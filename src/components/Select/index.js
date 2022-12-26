import React from "react";

const Select = ({ options, name, handleOnChange, dataset }) => {
  return (
    <select name={name} onChange={(e) => handleOnChange(e.target)} {...dataset}>
      {options.map((op) => (
        <option>{op}</option>
      ))}
    </select>
  );
};

export default Select;
