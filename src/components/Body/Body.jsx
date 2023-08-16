import React, { useEffect, useState } from "react";
import "./Body.scss";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Activity from "./Activity";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const Body = ({ theme }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };
  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="body-main"
      style={{
        backgroundColor: theme === "dark" ? "#1a202c" : "white",
        color: theme === "dark" ? "white" : "#1a202c",
      }}
    >
      <div className="body-wrapper col-12 col-lg-8 mx-auto">
        <div id="about">
          <About theme={theme} />
        </div>
        <div id="skills">
          <Skills theme={theme} />
        </div>
        <div id="projects">
          <Projects theme={theme} />
        </div>
        <div id="activity">
          <Activity theme={theme} />
        </div>
        <div id="contact">
          <Contact theme={theme} />
        </div>
      </div>
      {showScrollButton && (
        <div id="scrollToTop" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </div>
      )}
    </div>
  );
};

export default Body;
