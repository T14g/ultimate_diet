import React from "react";

const Select = ({ options, name, handleOnChange }) => (
  <select name={name} onChange={(e) => handleOnChange(e.target.value)}>
    {options.map((op) => (
      <option>{op}</option>
    ))}
  </select>
);

export default Select;
