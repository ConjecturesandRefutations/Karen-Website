import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <img src={project.featuredImage} alt={project.title} />
      <div className="project-meta">
        <h3>{project.title}</h3>
        <p>{project.category}</p>
      </div>
    </Link>
  );
}
