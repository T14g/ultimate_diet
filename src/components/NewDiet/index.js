import React, { useState } from "react";
import BigTitle from "../BigTitle";
import Button from "../Button";
import Input from "../Input";
import { WP_PASSWORD_ADMIN } from "../../../config";

import NewDietStyles, { DietRow, DietColumn } from "./NewDiet.styles";

const NewDiet = () => {
  const [diet, setDiet] = useState([]);

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
    <NewDietStyles>
      <DietRow>
        <DietColumn>Domingo</DietColumn>
        <DietColumn>Segunda</DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>Domingo</DietColumn>
        <DietColumn>Segunda</DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>Domingo</DietColumn>
        <DietColumn>Segunda</DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>Domingo</DietColumn>
        <DietColumn>Segunda</DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>Domingo</DietColumn>
        <DietColumn>Segunda</DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>Domingo</DietColumn>
        <DietColumn>Segunda</DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>Domingo</DietColumn>
        <DietColumn>Segunda</DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      {/* <BigTitle title="Create a New Diet" />
      <Input handleOnChange={setDiet} />
      <br />
      <Input handleOnChange={setDiet} />
      <br />
      <Input handleOnChange={setDiet} />
      <br />
      <Input handleOnChange={setDiet} />
      <br />
      <Input handleOnChange={setDiet} />
      <br />
      <Input handleOnChange={setDiet} />
      <br />
      <Button text="Save" handleOnClick={handleSubmit} /> */}
    </NewDietStyles>
  );
};

export default NewDiet;
