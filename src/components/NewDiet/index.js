import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

import { WP_PASSWORD_ADMIN } from "../../../config";

import NewDietStyles, { DietRow, DietColumn, Label } from "./NewDiet.styles";

const NewDiet = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [diet, setDiet] = useState({
    dom: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    seg: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    ter: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    qua: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    qui: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    sex: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    sab: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
  });

  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const foodList = [
    "Omelete",
    "Arroz + Omelete",
    "Shake Calórico",
    "Strogonoff",
    "Sanduíche",
    "Massa, frango, molho de tomate",
  ];

  const getTodayWeekDay = () => {
    const d = new Date();
    let index = d.getDay();
    console.log(weekDays[index]);
  };

  const handleSelectFood = (e) => {
    let currentDiet = foodList;
    // const day = e.target.dataset;
    console.log(e.dataset);
    // currentDiet[day][meal] = food;
    // setDiet(currentDiet);
  };

  const getDietPeriod = () => `${startDate}/${endDate}`;

  const createPost = () => {
    const url = "http://localhost/wp-diet/wp-json/wp/v2/diets";
    const dietPeriod = getDietPeriod();

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Nova Dieta Semanal",
        content: `Período da dieta: ${dietPeriod}`,
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
        <DietColumn>
          <h2>Crie novo plano de dieta da semana</h2>
          <div>
            <label for="start_date">Data inicial:</label>
            <Input
              name="start_date"
              type="date"
              id="start_date"
              handleOnChange={setStartDate}
            />
            <br />
            <label for="end_date">Data final:</label>
            <Input
              name="end_date"
              type="date"
              id="end_date"
              handleOnChange={setEndDate}
            />
            <div>
              Data inicial : {startDate}
              <br />
              Data final : {endDate}
            </div>
          </div>
        </DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Label>Domingo</Label>
        </DietColumn>
        <DietColumn>
          <Label>Segunda</Label>
          <Select
            options={foodList}
            dataset={{ "data-day": "seg ", "data-meal": "0" }}
            handleOnChange={handleSelectFood}
          />
          <Select
            options={foodList}
            dataset={{ "data-day": "seg ", "data-meal": "1" }}
            handleOnChange={handleSelectFood}
          />
          <Select
            options={foodList}
            dataset={{ "data-day": "seg ", "data-meal": "2" }}
            handleOnChange={handleSelectFood}
          />
          <Select
            options={foodList}
            dataset={{ "data-day": "seg ", "data-meal": "3" }}
            handleOnChange={handleSelectFood}
          />
          <Select
            options={foodList}
            dataset={{ "data-day": "seg ", "data-meal": "4" }}
            handleOnChange={handleSelectFood}
          />
          <Select
            options={foodList}
            dataset={{ "data-day": "seg ", "data-meal": "5" }}
            handleOnChange={handleSelectFood}
          />
          <Select
            options={foodList}
            data-day="seg "
            data-meal="6"
            handleOnChange={handleSelectFood}
          />
        </DietColumn>
        <DietColumn>Terça</DietColumn>
        <DietColumn>Quarta</DietColumn>
        <DietColumn>Quinta</DietColumn>
        <DietColumn>Sexta</DietColumn>
        <DietColumn>Sábado</DietColumn>
      </DietRow>
      <DietRow>
        <DietColumn>
          <Select options={foodList} name="dom_1" />
        </DietColumn>
        <DietColumn>
          <Select options={foodList} name="seg_1" />
        </DietColumn>
        <DietColumn>
          <Select options={foodList} name="ter_1" />
        </DietColumn>
        <DietColumn>
          <Select options={foodList} name="qua_1" />
        </DietColumn>
        <DietColumn>
          <Select options={foodList} name="qui_1" />
        </DietColumn>
        <DietColumn>
          <Select options={foodList} name="sex_1" />
        </DietColumn>
        <DietColumn>
          <Select options={foodList} name="sab_1" />
        </DietColumn>
      </DietRow>
      <Button text="Salvar" handleOnClick={handleSubmit} />
    </NewDietStyles>
  );
};

export default NewDiet;
