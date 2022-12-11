import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Input from "./index";

describe("Input", () => {
  it("should render an input", () => {
    const InputRendered = render(<Input />);
    const inputElement = InputRendered.getByTestId('input');
    expect(inputElement).toBeInTheDocument();
  });
});
