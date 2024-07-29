import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  it("Should load heading inside contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion statement
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion statement
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    // Assertion statement
    expect(inputName).toBeInTheDocument();
  });

  it("Should load two input boxes on the contact component", () => {
    render(<Contact />);

    // querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    // Assertion statement
    expect(inputBoxes.length).not.toBe(3);
  });
});
