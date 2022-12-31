import React from "react";
import DietListStyles from "./DietList.styles";

const DietList = ({ list }) => {
  const formatDate = (d) => {
    const date = new Date(d);
    const formated = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    return formated;
  };

  return (
    <DietListStyles>
      {list.map((item) => (
        <li>Dieta criada em: {formatDate(item.date)}</li>
      ))}
    </DietListStyles>
  );
};

export default DietList;
