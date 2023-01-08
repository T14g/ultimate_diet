import React, { useEffect } from "react";
import Button from "../Button";
import DietListStyles from "./DietList.styles";

import { WP_PASSWORD_ADMIN } from "../../../config";

const DietList = ({ list, setUpdate }) => {
  const formatDate = (d) => {
    const date = new Date(d);
    const formated = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    return formated;
  };

  const updatePost = (id) => {
    const url = `http://localhost/wp-diet/wp-json/wp/v2/diets/${id}`;

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Nova Dieta Semanal",
        content: `Diet updated!!!`,
        status: "publish",
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        setUpdate();
      });
  };

  const deletePost = (id) => {
    const url = `http://localhost/wp-diet/wp-json/wp/v2/diets/${id}`;

    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setUpdate();
      });
  };

  useEffect(() => {
    const handleAuth = () => {
      const url = "http://localhost/wp-diet/wp-json/jwt-auth/v1/token";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "admin",
          password: WP_PASSWORD_ADMIN,
        }),
      })
        .then((result) => result.json())
        .then((user) => {
          localStorage.setItem("jwt", user.token);
        });
    };
    handleAuth();
  }, []);

  return (
    <DietListStyles>
      {list.map((item) => (
        <tr>
          <td>Dieta criada em: {formatDate(item.date)}</td>
          <td>
            <Button text="Ver dieta" />
          </td>
          <td>
            <Button
              text="Update content"
              handleOnClick={() => updatePost(item.id)}
            />
          </td>
          <td>
            <Button text="DELETE " handleOnClick={() => deletePost(item.id)} />
          </td>
          <td>{item.content.rendered}</td>
        </tr>
      ))}
    </DietListStyles>
  );
};

export default DietList;
