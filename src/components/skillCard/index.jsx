import React from "react";
import "./index.scss";

const index = ({ name, description, link, type, image }) => {
  return (
    <a href={link} target="_blank" className="skillCard" title={name}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </a>
  );
};

export default index;
