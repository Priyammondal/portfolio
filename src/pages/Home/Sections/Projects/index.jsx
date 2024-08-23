import "./index.scss";
import { projects } from "../../../../assets/data";
import ProjectCard from "../../../../components/ProjectCard";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="projects mx-auto my-5">
      <section className="text-center mb-5">
        <h2 id="projectsHeading">Projects</h2>
      </section>
      <section className="projectCardWrapper">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </section>
      <Link to="/projects" className="mx-auto mt-5">
        <button title="View More Projects" className="btn btn-outline-light">See More</button>
      </Link>
    </div>
  );
};

export default Project;
