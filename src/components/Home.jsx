import React from "react";
import Typed from "react-typed";

export const Home = () => {
  return (
    <div id="home">
      <div className="Home-wraper"></div>
      <div className="main-info">
        <h1>Hi, I'm Priyam</h1>
        <h1>Welcome to my profile</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design", "API Development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#contact" id="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};
