import React from "react";

const Input = ({ handleOnChange, name, type, id }) => (
  <input
    data-testId="input"
    name={name}
    type={type}
    id={id}
    onChange={(e) => handleOnChange(e.target.value)}
  />
);

export default Input;
