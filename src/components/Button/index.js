import React from "react";
import ButtonStyles from "./Button.styles";

const Button = ({ text, handleOnClick }) => (
  <ButtonStyles onClick={handleOnClick} data-testId="button">
    {text}
  </ButtonStyles> 
);

export default Button;
