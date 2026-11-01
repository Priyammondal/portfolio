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

      <section className="github_push w-100 my-5">
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
