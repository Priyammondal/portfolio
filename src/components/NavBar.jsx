import React, { useState, useEffect } from "react";
// import logo from "../components/Images/code.png";
import logo from "../components/Images/manLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
              <li class="nav-item">
                <a
                  id="homee"
                  class="nav-link"
                  href="#home"
                  style={{}}
                  onClick={() => {
                    // let url = window.location.href.slice(
                    //   window.location.href.indexOf("#"),
                    //   window.location.href.length
                    // );
                    // console.log(url)
                    // if (url == "#home") {
                      let element = document.getElementById("homee");
                      element.style.borderBottom = "0.1875rem solid #f9ab00";
                    // }
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="aboutMee"
                  className="nav-link"
                  href="#aboutMe"
                  style={{}}
                  onClick={() => {
                    // let url = window.location.href.slice(
                    //   window.location.href.indexOf("#"),
                    //   window.location.href.length
                    // );
                    // console.log(url)
                    // if (url == "#aboutMe") {
                      let element = document.getElementById("aboutMee");
                      element.style.borderBottom = "0.1875rem solid #f9ab00";
                    // }
                  }}
                >
                  about me
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="service"
                  className="nav-link"
                  href="#services"
                  style={{}}
                  onClick={() => {
                    // let url = window.location.href.slice(
                    //   window.location.href.indexOf("#"),
                    //   window.location.href.length
                    // );
                    // console.log(url)
                    // if (url == "#services") {
                      let element = document.getElementById("service");
                      element.style.borderBottom = "0.1875rem solid #f9ab00";
                    // }
                  }}
                >
                  services
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="project"
                  className="nav-link"
                  aria-current="page"
                  href="#projects"
                  style={{}}
                  onClick={() => {
                    // let url = window.location.href.slice(
                    //   window.location.href.indexOf("#"),
                    //   window.location.href.length
                    // );
                    // console.log(url)
                    // if (url == "#projects") {
                      let element = document.getElementById("project");
                      element.style.borderBottom = "0.1875rem solid #f9ab00";
                    // }
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="contacts"
                  className="nav-link"
                  href="#contact"
                  style={{}}
                  onClick={() => {
                    // let url = window.location.href.slice(
                    //   window.location.href.indexOf("#"),
                    //   window.location.href.length
                    // );
                    // console.log(url)
                    // if (url == "#contact") {
                      let element = document.getElementById("contacts");
                      element.style.borderBottom = "0.1875rem solid #f9ab00";
                    // }
                  }}
                >
                  contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
