import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import BigTitle from "./index";

describe("BigTitle", () => {
  it("should render the component", () => {
    const BigTitleRendered = render(<BigTitle title="Big title H1" />);
    expect(BigTitleRendered.baseElement).toBeInTheDocument();
  });
});
