import React, { useState } from "react";
import BigTitle from "../BigTitle";
import Button from "../Button";
import Input from "../Input";
import { WP_PASSWORD_ADMIN } from "../../../config";

const NewDiet = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const createPost = () => {
    const url = "http://localhost/wp-diet/wp-json/wp/v2/diets";

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "novo post",
        content: "post content here 123",
        status: "publish",
      }),
    })
      .then((result) => result.json())
      .then((data) => {
       console.log(data);
      });
  };

  const handleSubmit = () => {
    const url = "http://localhost/wp-diet/wp-json/jwt-auth/v1/token";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "admin", password: WP_PASSWORD_ADMIN }),
    })
      .then((result) => result.json())
      .then((user) => {
        console.log(user.token);
        localStorage.setItem("jwt", user.token);
        createPost();
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
