import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import Input from "./index";

describe("Input", () => {
  it("should render an input", () => {
    const InputRendered = render(<Input />);
    const inputElement = InputRendered.getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it("onChange should call callback function", () => {
    const callBackFn = jest.fn();
    const InputRendered = render(<Input handleOnChange={callBackFn} />);
    const inputElement = InputRendered.getByTestId("input");

    fireEvent.change(inputElement, { target: { value: "123" } });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("123");
    expect(callBackFn).toHaveBeenCalled();
  });
});
