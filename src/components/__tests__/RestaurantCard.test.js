import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("Restaurant Card Test", () => {
  it("Should render the restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Young Restaurant");

    expect(name).toBeInTheDocument();
  });
});
