import "./index.css";
import { projects } from "../../assets/data";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div className="projectsPage container my-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  );
};

export default Projects;
