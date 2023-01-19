import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

import { defaultDiet, days, weekDays, foodList } from "./data";

import { WP_PASSWORD_ADMIN } from "../../../config";

import NewDietStyles, { DietRow, DietColumn, Label } from "./NewDiet.styles";

const NewDiet = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [diet, setDiet] = useState(defaultDiet);

  const getTodayWeekDay = () => {
    const d = new Date();
    let index = d.getDay();
    console.log(weekDays[index]);
  };

  console.log(diet);

  const handleSelectFood = (e) => {
    let currentDiet = foodList;
    const day = e.dataset.day;
    const meal = parseInt(e.dataset.meal);
    const food = e.value;
    console.log(currentDiet);
    currentDiet[day][meal] = food;
    setDiet(currentDiet);
  };
  
  const getDietPeriod = () => `${startDate}/${endDate}`;

  const handleGetDiets = () => {
    const url = "http://localhost/wp-diet/wp-json/wp/v2/diets";

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  };

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

  const renderDailySelects = (day) => {
    let components = [];

    for (let i = 0; i < 6; i++) {
      components.push(
        <Select
          options={foodList}
          dataset={{ "data-day": day, "data-meal": i }}
          handleOnChange={handleSelectFood}
        />
      );
    }

    return components.map((el) => el);
  };

  const renderWeekDays = () => {
    return days.map((item) => (
      <DietColumn>
        <Label>{item.day}</Label>
        {renderDailySelects(item.slug)}
      </DietColumn>
    ));
  };

  return (
    <NewDietStyles>
      <DietRow className="align-start">
        <DietColumn className="no-bg white-text no-padding-left">
          <Label for="start_date">Data inicial:</Label>
          <Input
            name="start_date"
            type="date"
            id="start_date"
            handleOnChange={setStartDate}
          />
        </DietColumn>
        <DietColumn className="no-bg white-text no-padding-left">
          {" "}
          <Label for="end_date">Data final:</Label>
          <Input
            name="end_date"
            type="date"
            id="end_date"
            handleOnChange={setEndDate}
          />
        </DietColumn>
      </DietRow>
      <DietRow>{renderWeekDays()}</DietRow>
      <Button text="Salvar" handleOnClick={handleSubmit} />
      <Button text="Get Diets" handleOnClick={handleGetDiets} />
    </NewDietStyles>
  );
};

export default NewDiet;
