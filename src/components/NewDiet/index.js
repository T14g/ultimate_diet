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
        <DietColumn>
          <Input name="dom_1" />
        </DietColumn>
        <DietColumn>
          <Input name="dom_2" />
        </DietColumn>
        <DietColumn>
          <Input name="dom_3" />
        </DietColumn>
        <DietColumn>
          <Input name="dom_4" />
        </DietColumn>
        <DietColumn>
          <Input name="dom_5" />
        </DietColumn>
        <DietColumn>
          <Input name="dom_6" />
        </DietColumn>
        <DietColumn>
          <Input name="dom_7" />
        </DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Input name="seg_1" />
        </DietColumn>
        <DietColumn>
          <Input name="seg_2" />
        </DietColumn>
        <DietColumn>
          <Input name="seg_3" />
        </DietColumn>
        <DietColumn>
          <Input name="seg_4" />
        </DietColumn>
        <DietColumn>
          <Input name="seg_5" />
        </DietColumn>
        <DietColumn>
          <Input name="seg_6" />
        </DietColumn>
        <DietColumn>
          <Input name="seg_7" />
        </DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Input name="ter_1" />
        </DietColumn>
        <DietColumn>
          <Input name="ter_2" />
        </DietColumn>
        <DietColumn>
          <Input name="ter_3" />
        </DietColumn>
        <DietColumn>
          <Input name="ter_4" />
        </DietColumn>
        <DietColumn>
          <Input name="ter_5" />
        </DietColumn>
        <DietColumn>
          <Input name="ter_6" />
        </DietColumn>
        <DietColumn>
          <Input name="ter_7" />
        </DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Input name="qua_1" />
        </DietColumn>
        <DietColumn>
          <Input name="qua_2" />
        </DietColumn>
        <DietColumn>
          <Input name="qua_3" />
        </DietColumn>
        <DietColumn>
          <Input name="qua_4" />
        </DietColumn>
        <DietColumn>
          <Input name="qua_5" />
        </DietColumn>
        <DietColumn>
          <Input name="qua_6" />
        </DietColumn>
        <DietColumn>
          <Input name="qua_7" />
        </DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Input name="qui_1" />
        </DietColumn>
        <DietColumn>
          <Input name="qui_2" />
        </DietColumn>
        <DietColumn>
          <Input name="qui_3" />
        </DietColumn>
        <DietColumn>
          <Input name="qui_4" />
        </DietColumn>
        <DietColumn>
          <Input name="qui_5" />
        </DietColumn>
        <DietColumn>
          <Input name="qui_6" />
        </DietColumn>
        <DietColumn>
          <Input name="qui_7" />
        </DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Input name="sex_1" />
        </DietColumn>
        <DietColumn>
          <Input name="sex_2" />
        </DietColumn>
        <DietColumn>
          <Input name="sex_3" />
        </DietColumn>
        <DietColumn>
          <Input name="sex_4" />
        </DietColumn>
        <DietColumn>
          <Input name="sex_5" />
        </DietColumn>
        <DietColumn>
          <Input name="sex_6" />
        </DietColumn>
        <DietColumn>
          <Input name="sex_7" />
        </DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Input name="sab_1" />
        </DietColumn>
        <DietColumn>
          <Input name="sab_2" />
        </DietColumn>
        <DietColumn>
          <Input name="sab_3" />
        </DietColumn>
        <DietColumn>
          <Input name="sab_4" />
        </DietColumn>
        <DietColumn>
          <Input name="sab_5" />
        </DietColumn>
        <DietColumn>
          <Input name="sab_6" />
        </DietColumn>
        <DietColumn>
          <Input name="sab_7" />
        </DietColumn>
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
