import React from "react";

const Input = ({ handleOnChange, name }) => (
  <input
    data-testId="input"
    name={name}
    onChange={(e) => handleOnChange(e.target.value)}
  />
);

export default Input;
