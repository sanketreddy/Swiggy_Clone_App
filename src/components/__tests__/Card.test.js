const { render, screen, fireEvent } = require("@testing-library/react");
const { act } = require("react");
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "./mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Testing the card addition feature for the app", () => {
  it("Should load rendering my restaurant menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Chaat (18)");

    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(18);

    const addBtns = screen.getAllByRole("button", { name: "Add+" });
    // console.log(addBtns.length);

    fireEvent.click(addBtns[0]);

    const changedCartItems = screen.getByText("🛒(1)");

    expect(changedCartItems).toBeInTheDocument();
    fireEvent.click(addBtns[1]);

    const changedCartItems1 = screen.getByText("🛒(2)");

    expect(changedCartItems1).toBeInTheDocument();

    expect(foodItems.length).toBe(18);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(foodItems.length).toBe(18);

    expect(
      screen.getByText("Cart is empty. Please add items to the cart!")
    ).toBeInTheDocument();
  });
});
