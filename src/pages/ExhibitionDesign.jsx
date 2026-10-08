import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const CATEGORY = "Exhibition Design";

export default function ExhibitionDesign() {
  const exhibitionProjects = projects.filter(
    (project) => project.category === CATEGORY
  );

  return (
    <div className="home exhibition-design">
        <div className="project-grid">
            <h1 class="exhibition-title">Exhibition Design</h1>
            {exhibitionProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </div>
  );
}