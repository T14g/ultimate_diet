import React, { useEffect, useState } from "react";
import NewDiet from "../../components/NewDiet";
import DietList from "../../components/DietList";

const UserPanel = () => {
  const [diets, setDiets] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (update) {
      const url = "http://localhost/wp-diet/wp-json/wp/v2/diets";

      fetch(url)
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          setDiets(data);
          setUpdate(false);
        });
    }
  }, [update]);

  return (
    <>
      <NewDiet />
      {diets.length > 0 && (
        <DietList list={diets} setUpdate={() => setUpdate(true)} />
      )}
    </>
  );
};

export default UserPanel;
