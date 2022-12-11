import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("should render a button", () => {
    const ButtonRendered = render(<Button />);
    const buttonElement = ButtonRendered.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
