import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const CATEGORY = "Multimedia Installation";

export default function MultimediaInstallation() {
  const multimediaProjects = projects.filter(
    (project) => project.category === CATEGORY
  );

  return (
    <div className="home multimedia-installation">
        <div className="project-grid">
            <h1 class="multimedia-title">Multimedia Installation</h1>
            {multimediaProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </div>
  );
}