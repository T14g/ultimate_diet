import React, { useEffect, useState } from "react";
import NewDiet from "../../components/NewDiet";
import DietList from "../../components/DietList";

const UserPanel = () => {
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const url = "http://localhost/wp-diet/wp-json/wp/v2/diets";

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setDiets(data);
      });
  }, []);

  return (
    <>
      <NewDiet />
      {diets.length > 0 && <DietList list={diets} />}
    </>
  );
};

export default UserPanel;
