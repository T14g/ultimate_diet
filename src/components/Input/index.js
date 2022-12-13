import React from "react";

const Input = ({ handleOnChange }) => (
  <input data-testId="input" onChange={(e) => handleOnChange(e.target.value)} />
);

export default Input;
