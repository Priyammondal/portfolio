import React from "react";
import "./index.scss";
import GitHubCalendar from "react-github-calendar";

const Activity = ({ theme }) => {
  return (
    <div
      className="activity my-5"
      style={{
        border: theme === "light" && "1px solid #ccc",
        paddingBottom: theme === "light" && "5%",
      }}
    >
      <section className="text-center mb-5">
        <h2 id="activityHeading" className="invisible">
          Activity
        </h2>
      </section>
      <section className="activity_graph">
        <a
          href="https://github.com/Priyammondal"
          target="_blank"
          className="mx-auto"
        >
          <img
            className=""
            alt="Priyam Mondal"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=Priyammondal&bg_color=${
              theme === "dark" ? "000000" : "fff"
            }&color=ae9f37&line=578e62&point=137000&area=true&hide_border=true`}
          />
        </a>
      </section>

      <section className="contribution_info py-2">
        <a href="https://github.com/Priyammondal">
          <img
            src={`https://streak-stats.demolab.com/?user=Priyammondal&theme=${theme}`}
          />
        </a>
        <a href="https://github.com/Priyammondal">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Priyammondal&layout=compact&langs_count=5&theme=${theme}`}
          />
        </a>
      </section>

      <section className="github_push w-100">
        <GitHubCalendar
          username="Priyammondal"
          colorScheme={theme}
        ></GitHubCalendar>
      </section>
    </div>
  );
};

export default Activity;
