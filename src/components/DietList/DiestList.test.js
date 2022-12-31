import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import DietList from "./index";

describe("DietList", () => {
  it("should render the component", () => {
    const DietListRendered = render(<DietList/>);
    expect(DietListRendered.baseElement).toBeInTheDocument();
  });
});
