import React from "react";
import Button from "../Button";
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
        <tr>
          <td>Dieta criada em: {formatDate(item.date)}</td>
          <td>
            <Button text="Ver dieta" />
          </td>
          <td>
            <Button text="Update content" />
          </td>
          <td>{item.content.rendered}</td>
        </tr>
      ))}
    </DietListStyles>
  );
};

export default DietList;
