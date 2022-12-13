import React from "react";

const Button = ({ text, handleOnClick }) => (
  <button onClick={handleOnClick} data-testId="button">
    {text}
  </button>
);

export default Button;
