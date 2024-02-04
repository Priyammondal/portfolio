import React, { useEffect, useState } from "react";
import "./Body.scss";
import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Activity from "./Activity";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp, AiOutlineProject } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GiTechnoHeart } from "react-icons/gi";
import { TbActivity } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";

const Body = ({ theme }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showSideNav, setShowsideNav] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
    if (window.scrollY > 150) {
      setShowsideNav(true);
    } else {
      setShowsideNav(false);
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
          <About theme={theme} />
          <Experiences theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Certificates theme={theme} />
          <Activity theme={theme} />
          <Contact theme={theme} />
      </div>
      {showScrollButton && (
        <div
          id="scrollToTop"
          onClick={scrollToTop}
          style={{ backgroundColor: theme === "light" ? "#f26440" : "white" }}
          title="Scroll To Top"
        >
          <AiOutlineArrowUp color={theme === "dark" ? "#f26440" : "white"} />
        </div>
      )}
      {/* {showSideNav && window.innerWidth > 992 && (
        <div id="sideNav" data-aos="fade-left">
          <a href="#about">
            <FcAbout size={32} title="About me" />
          </a>
          <a href="#experience">
            <HiSquares2X2 color="#ffd600" size={32} title="Experience" />
          </a>
          <a href="#skills">
            <GiTechnoHeart color="pink" size={32} title="Skills" />
          </a>{" "}
          <a href="#projects">
            <AiOutlineProject color="#00919b" size={32} title="Projects" />
          </a>
          <a href="#activity">
            <TbActivity color="#c53030" size={32} title="Activity" />
          </a>{" "}
          <a href="#contact">
            <MdContactPhone color="#38a169" size={32} title="Contact Me" />
          </a>
        </div>
      )} */}
    </div>
  );
};

export default Body;
