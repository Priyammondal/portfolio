import "./index.css";
import GitHubCalendar from "react-github-calendar";
import Tooltip from "@mui/material/Tooltip";

import { forwardRef } from "react";

const Activity = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="activity my-5">
      <section className="text-center mb-2">
        <h1 id="activityHeading">Activity</h1>
      </section>
      <section className="activity_graph w-50">
        <a
          href="https://github.com/Priyammondal"
          target="_blank"
          className="mx-auto"
          rel="noreferrer"
        >
          <img
            className="w-100"
            alt="activity graph"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=Priyammondal&bg_color=000000&color=ae9f37&line=578e62&point=137000&area=true&hide_border=true`}
          />
        </a>
      </section>

      <section className="githubStat my-3 w-50">
        <a
          href="https://github.com/Priyammondal"
          target="_blank"
          className="mx-auto"
          rel="noreferrer"
        >
          <img
            className="w-100"
            align="center"
            alt="github Stat"
            src="https://github-readme-stats.vercel.app/api?username=Priyammondal&show_icons=true&theme=dark&locale=en&count_private=true&hide=stars"
          />
        </a>
      </section>

      <section className="contribution_info mb-5 w-75">
        <a href="https://github.com/Priyammondal">
          <img
            src={`https://streak-stats.demolab.com/?user=Priyammondal&theme=dark`}
            alt="current Streak"
          />
        </a>
        <a href="https://github.com/Priyammondal">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Priyammondal&layout=compact&langs_count=5&theme=dark`}
            alt="most used languages"
          />
        </a>
      </section>

      <section className="github_push w-100">
        <GitHubCalendar
          username="Priyammondal"
          colorScheme="light"
          renderBlock={(block, activity) => (
            <Tooltip
              title={
                activity.count > 1
                  ? `${activity.count} contributiona on ${activity.date}`
                  : activity.count === 1
                  ? `${activity.count} contribution on ${activity.date}`
                  : `No contributions on ${activity.date}`
              }
            >
              {block}
            </Tooltip>
          )}
        ></GitHubCalendar>
      </section>
    </div>
  );
});

export default Activity;
