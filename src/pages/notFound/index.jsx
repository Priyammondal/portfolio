import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="mainbox">
        <div className="digit404">
          <div className="err">4</div>
          <FaQuestionCircle className="far fa-question-circle fa-spin" />
          <div className="err2">4</div>
        </div>
        <div className="msg">
          Maybe this page moved? Got deleted? <br />
          Is hiding out in quarantine? Never <br />
          existed in the first place?
          <br />
          <br />
          <p>
            Let's go <Link to={"/"}>home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
