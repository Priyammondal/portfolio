import React, { useState } from "react";
import "./Header.scss";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../assets/priyam_m.png";
import resume from "../../assets/Priyam.pdf";

const Header = ({ theme, setTheme }) => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{
        backgroundColor: theme === "dark" ? "#2d3748" : "white",
        color: theme === "dark" ? "white" : "#2d3748",
      }}
    >
      <div className="col-12 col-lg-8 mx-auto d-block d-lg-flex">
        <div className="d-flex justify-content-between px-2 px-lg-0">
          <a
            className="navbar-flex justify-content-center align-items-center navbar-brand"
            href="/portfolio"
          >
            <img className="logo" src={logo} alt="logo" />
          </a>
          <div className="d-flex gap-3 align-items-center">
            <div
              className="mode d-flex justify-content-center align-items-center d-lg-none"
              style={{
                backgroundColor: theme === "dark" ? "#3d4756" : "#edf2f7",
              }}
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex justify-content-between flex-column flex-lg-row align-items-start w-100 ps-0 ps-lg-3">
            <section>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" title="About Me">
                  <a
                    className="nav-link active px-2"
                    aria-current="page"
                    href="#about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item px-2" title="Experience">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item px-2" title="Skills">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item px-2" title="Projects">
                  <a className="nav-link" aria-current="page" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item px-2" title="Certificates">
                  <a className="nav-link" aria-current="page" href="#certificates">
                    Certificates
                  </a>
                </li>
                <li className="nav-item px-2" title="Activity">
                  <a className="nav-link" href="#activity">
                    Activity
                  </a>
                </li>
                <li className="nav-item px-2" title="Contact Me">
                  <a className="nav-link" href="#contact">
                    Contact Me
                  </a>
                </li>
                <li className="nav-item px-2" title="Resume">
                  <a className="nav-link" href={resume} download>
                    Resume
                  </a>
                </li>
              </ul>
            </section>
            <aside className="d-none d-lg-flex justify-content-center align-items-center">
              <div
                className="mode"
                style={{
                  backgroundColor: theme === "dark" ? "#3d4756" : "#edf2f7",
                }}
                onClick={() =>
                  theme === "light" ? setTheme("dark") : setTheme("light")
                }
                title={theme === "dark" ? "Dark Mode" : "Light Mode"}
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
