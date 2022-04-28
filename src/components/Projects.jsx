import React from "react";
import bdiplus from "./Images/bdiplusLogo.png";
import cakeShop from "./Images/cakeShop.png";
import calculator from "./Images/calculator.png";
import crud from "./Images/crud.png";
import travelingWebsite from "./Images/travelingWebsite.png";
import registration from "./Images/registration.png";
import laptopBazar from "./Images/laptopBazar.png";
import portfolio from "./Images/portfolio.png";

const Projects = () => {
  return (
    <div id="projects">
      <div
      className="projects"
        style={{
          height: "30%",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <a
          href="https://signup.onedata.plus/"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={bdiplus}
            alt="bdiplus"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
            }}
          />
        </a>

        <a
          href="https://github.com/Priyammondal/Cakeshop"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={cakeShop}
            alt="cakeShop"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
            }}
          />
        </a>
        <a
          href="https://github.com/Priyammondal/Travelling-website"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={travelingWebsite}
            alt="travelingWebsite"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
            }}
          />
        </a>
        <a
          href="https://github.com/Priyammondal/Registration-Form-React"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={registration}
            alt="registration"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
              borderRadius: "50px",
            }}
          />
        </a>
      </div>

      <div
      className="projects"
        style={{
          height: "30%",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <a
          href="https://github.com/ND-Geek/Calculator"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={calculator}
            alt="calculator"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
            }}
          />
        </a>
        <a
          href="https://github.com/Priyammondal/random-1"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={crud}
            alt="crud"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
            }}
          />
        </a>
        <a
          href="https://github.com/Priyammondal/laptopBazar"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={laptopBazar}
            alt="laptopBazar"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
            }}
          />
        </a>
        <a
          href="https://github.com/Priyammondal/portfolio"
          target="_blank"
          style={{ height: "100%", width: "22%" }}
        >
          <img
            src={portfolio}
            alt="portfolio"
            style={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "50px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
