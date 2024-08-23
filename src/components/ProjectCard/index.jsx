import React from "react";
import "./index.scss";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <div className="projectCard">
      <img src={data.imgSrc} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{data.title}</h2>
        <p className="card-description">
          {data.description || (
            <>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              ratione rem sint, qui libero quibusdam dolorem distinctio eligendi
              repellat hic.
            </>
          )}
        </p>
        <div className="card-buttons">
          <Link
            className="input-group text-decoration-none"
            to={data.github}
            target="_blank"
          >
            <button className="input-group-text">
              <FaGithub />
            </button>
            <button className="btn btn-outline-light">Github</button>
          </Link>
          <Link
            className="input-group text-decoration-none"
            to={data.url}
            target="_blank"
          >
            <button className="input-group-text">
              <FaExternalLinkAlt />
            </button>
            <button className="btn btn-outline-light">Demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
