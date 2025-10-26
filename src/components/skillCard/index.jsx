import React from "react";
import "./index.css";

const index = ({ name, link, image }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="skillCard"
      title={name}
    >
      <img src={image} alt={name} />
      <p>{name}</p>
    </a>
  );
};

export default index;
