import React, { useEffect } from "react";
import "./index.scss";
import { projects } from "../../../assets/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ theme }) => {
  useEffect(() => {
    const prev = document.querySelector(".slick-prev");
    const next = document.querySelector(".slick-next");
    prev.title = "Previous";
    next.title = "Next";
  }, []);

  const settings = {
    // dots: true,
    // fade: true,
    // autoplay: true,
    arrows: true,
    infinite: true,
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
    <div className="projects mx-auto my-5">
      <section className="text-center mb-5">
        <h2 id="projectsHeading">Projects</h2>
      </section>
      <section className={theme === "light" && "light"}>
        <Slider {...settings}>
          {projects.map((item, index) => (
            <div
              key={index}
              className="card-wrapper"
              title={item.title
                .toLowerCase()
                .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
            >
              <div
                className="card"
                style={{
                  border: theme === "light" && "1px solid #ccc",
                }}
              >
                <div className="img-wrapper" style={{
                  border: theme === "light" && "1px solid #ccc",
                  borderRadius: "5px"
                }}>
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="card-body pb-3">
                  <section>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </section>
                  <section className="d-flex justify-content-between">
                    <a
                      href={item.github}
                      className="btn github"
                      target="_blank"
                      style={{
                        backgroundColor: theme === "light" && "#edf2f7",
                        color: theme === "light" && "black",
                        pointerEvents: item?.github?.length === 0 && "none",
                      }}
                      title="Github"
                    >
                      <FaGithub /> Github
                    </a>
                    <a
                      href={item.url}
                      target="_blank"
                      className="btn external"
                      style={{
                        backgroundColor: theme === "light" && "#319795",
                        color: theme === "light" && "white",
                      }}
                      title="Demo"
                    >
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
