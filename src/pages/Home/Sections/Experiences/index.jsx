import "./index.scss";
import { experiences } from "../../../../assets/data";
import { forwardRef } from "react";
const Experience = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="timeline" className="experience my-5">
      <section className="text-center mb-2">
        <h1 id="experienceHeading">
          Priyam Mondal | Fullstack Developer (MERN Stack)
        </h1>
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
          />
        ))}
      </div>
    </div>
  );
});

const TimeLineItems = ({ company, jobTitle, date, url, index }) => (
  <div
    className={`timelineItem ${
      index % 2 == 0 ? "leftTimeLine" : "rightTimeLine"
    }`}
  >
    <a href={url} target="blank">
      <div title={company}>
        <h4>{company}</h4>
        <p className="m-0">{jobTitle}</p>
        <p className="m-0">{date}</p>
      </div>
    </a>
  </div>
);

export default Experience;
