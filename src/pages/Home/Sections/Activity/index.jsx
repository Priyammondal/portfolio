import React from "react";
import "./index.scss";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as MuiTooltip } from "@mui/material";

const Activity = () => {
  return (
    <div className="activity my-5">
      <section className="activity_graph w-50">
        <a
          href="https://github.com/Priyammondal"
          target="_blank"
          className="mx-auto"
        >
          <img
            className="w-100"
            alt="Priyam Mondal"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=Priyammondal&bg_color=000000&color=ae9f37&line=578e62&point=137000&area=true&hide_border=true`}
          />
        </a>
      </section>

      <section className="githubStat my-3 w-50">
        <a
          href="https://github.com/Priyammondal"
          target="_blank"
          className="mx-auto"
        >
          <img
            className="w-100"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=Priyammondal&show_icons=true&theme=dark&locale=en&count_private=true&hide=stars"
          />
        </a>
      </section>

      <section className="contribution_info mb-5 w-75">
        <a href="https://github.com/Priyammondal">
          <img
            src={`https://streak-stats.demolab.com/?user=Priyammondal&theme=dark`}
          />
        </a>
        <a href="https://github.com/Priyammondal">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Priyammondal&layout=compact&langs_count=5&theme=dark`}
          />
        </a>
      </section>

      <section className="github_push w-100">
        <GitHubCalendar
          username="Priyammondal"
          colorScheme="light"
          renderBlock={(block, activity) => (
            <MuiTooltip
              title={
                activity.count > 1
                  ? `${activity.count} contributiona on ${activity.date}`
                  : activity.count === 1
                  ? `${activity.count} contribution on ${activity.date}`
                  : `No contributions on ${activity.date}`
              }
            >
              {block}
            </MuiTooltip>
          )}
        ></GitHubCalendar>
      </section>
    </div>
  );
};

export default Activity;
