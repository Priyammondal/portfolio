import React, { useEffect } from "react";
import "./index.scss";
import { projects } from "../../../assets/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ theme }) => {
  console.log("Projects-->", projects);

  const settings = {
    // dots: true,
    arrows: true,
    // fade: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="projects mx-auto">
      <section className="text-center">
        <h2>Projects</h2>
      </section>
      <section className={theme === "light" && "light"}>
        <Slider {...settings}>
          {projects.map((item, index) => (
            <div key={index} className="card-wrapper">
              <div className="card">
                <div className="img-wrapper">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="card-body pb-3">
                  <section>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </section>
                  <section className="d-flex justify-content-between">
                    <a href="#" className="btn github">
                      <FaGithub /> Github
                    </a>
                    <a href={item.url} target="_blank" className="btn external">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </section>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Project;
