import "./index.scss";
import { projects } from "../../../../assets/data";
import ProjectCard from "../../../../components/ProjectCard";
import { Link } from "react-router-dom";
import { forwardRef, useEffect, useState } from "react";

const Project = forwardRef((props, ref) => {
  const [cardsToShow, setCardsToShow] = useState(
    window.innerWidth < 767 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth < 767 ? 2 : 4);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div ref={ref} className="projects mx-auto my-5">
      <section className="text-center mb-5">
        <h2 id="projectsHeading">Projects</h2>
      </section>
      <section className="projectCardWrapper">
        {projects.slice(0, cardsToShow).map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </section>
      <Link to="/projects" className="mx-auto mt-5">
        <button title="View More Projects" className="btn btn-outline-light">View More</button>
      </Link>
    </div>
  );
});

export default Project;
