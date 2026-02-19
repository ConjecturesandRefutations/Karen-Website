import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="home">
      <div className="opening-section">
        <h1 className="main-title">Karen Natharen</h1>
      </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
    </div>
  );
}
