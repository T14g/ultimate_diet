import React from "react";
import BigTitle from "../BigTitle";
import Button from "../Button";
import Input from "../Input";

const NewDiet = () => (
  <div>
    <BigTitle title="Create a New Diet" />
    <Input />
    <br/>
    <Input />
    <br/>
    <Button text="Save"/>
  </div>
);

export default NewDiet;
