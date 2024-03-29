import React from "react";
import "./index.scss";
import { experiences } from "../../../assets/data";
const Experience = ({ theme }) => {
  return (
    <div id="timeline" className="my-5">
      <section className="text-center mb-5">
        <h2 id="experienceHeading" className="invisible">Experiences</h2>
      </section>
      <div className="timelineBox">
        {experiences.map((item, index) => (
          <TimeLineItems
            key={index}
            company={item.company}
            jobTitle={item.jobTitle}
            date={item.date}
            url={item.url}
            index={index}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

const TimeLineItems = ({ company, jobTitle, date, url, index, theme }) => (
  <div
    className={`${
      theme === "dark" ? "timelineItemDark" : "timelineItemLight"
    } ${index % 2 == 0 ? "leftTimeLine" : "rightTimeLine"}`}
  >
    <a href={url} target="blank">
      <div style={{ color: theme === "light" && "#1a202c" }} title={company}>
        <h4>{company}</h4>
        <p className="m-0">{jobTitle}</p>
        <p className="m-0">{date}</p>
      </div>
    </a>
  </div>
);

export default Experience;
