import React, { useState } from "react";
import BigTitle from "../BigTitle";
import Button from "../Button";
import Input from "../Input";
import { WP_PASSWORD } from "../../../config";

const NewDiet = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const handleSubmit = () => {
    const url = "http://localhost/wp-diet/wp-json/jwt-auth/v1/token";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ username: "admin", password: WP_PASSWORD }),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <BigTitle title="Create a New Diet" />
      <Input handleOnChange={setInputOne} />
      <br />
      <Input handleOnChange={setInputTwo} />
      <br />
      <Button text="Save" handleOnClick={handleSubmit} />
    </div>
  );
};

export default NewDiet;
