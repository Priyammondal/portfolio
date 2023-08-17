import React from "react";
import "./index.scss";

const index = ({ name, description, link, type, image, theme }) => {
  console.log("theme-->", theme);
  return (
    <a
      href={link}
      target="_blank"
      className="skillCard"
      style={{ borderColor: theme === "dark" ? "#2D3748" : "#EDF2F7" }}
    >
      <img src={image} alt={name} />
      <p
        style={{
          color: theme === "light" && "black",
        }}
      >
        {name}
      </p>
    </a>
  );
};

export default index;
