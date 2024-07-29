import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Testing the search functionality", () => {
  // beforeAll(() => {
  //   console.log("Before all");
  // });

  // beforeEach(() => {
  //   console.log("before each");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  // afterEach(() => {
  //   console.log("after each");
  // });

  it("Should search res list for young restaurant input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeClick = screen.getAllByTestId("resCard");

    expect(cardsBeforeClick.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {
      target: {
        value: "friends",
      },
    });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
  });

  it("Should filter top rated restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeClick = screen.getAllByTestId("resCard");

    expect(cardsBeforeClick.length).toBe(20);

    const topRatedRestaurantBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(topRatedRestaurantBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(16);
  });
});
