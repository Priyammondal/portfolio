import "./index.css";
import { projects } from "../../assets/data";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div className="projectsPage container my-5">
      <div className="projectsHeading">
        <h1>Projects</h1>
        <p>Exploring ideas, building products, and solving problems.</p>
      </div>
      <div className="projectGrid">
        {projects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
