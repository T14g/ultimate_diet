import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import NewDiet from "./index";

describe("NewDiet", () => {
  it("should render the component", () => {
    const NewDietRendered = render(<NewDiet/>);
    expect(NewDietRendered.baseElement).toBeInTheDocument();
  });
});
