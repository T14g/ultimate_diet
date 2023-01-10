import React, { useEffect, useState } from "react";
import NewDiet from "../../components/NewDiet";
import DietList from "../../components/DietList";
import Button from "../../components/Button";

import UserPanelStyles from "./UserPanel.styles";

const UserPanel = () => {
  const [diets, setDiets] = useState([]);
  const [update, setUpdate] = useState(true);
  const [action, setAction] = useState("");

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
    <UserPanelStyles>
      <h2>Escolha uma ação</h2>
      <p>Current action: {action}</p>
      <Button text="Nova Dieta" handleOnClick={() => setAction("new-diet")} />
      <Button text="Ver Dietas" handleOnClick={() => setAction("view-diets")} />
      {action === "new-diet" && <NewDiet />}
      {action === "view-diets" && diets.length > 0 && (
        <DietList list={diets} setUpdate={() => setUpdate(true)} />
      )}
    </UserPanelStyles>
  );
};

export default UserPanel;
