import React from "react";
import "./index.scss";
import { experiences } from "../../../assets/data";
const Experience = () => {
  console.log("experiences-->", experiences);
  return (
    <div id="timeline">
      <div className="timelineBox">
        {experiences.map((item, index) => (
          <TimeLineItems
            heading={item.company}
            text={item.date}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const TimeLineItems = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 == 0 ? "leftTimeLine" : "rightTimeLine"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Experience;
