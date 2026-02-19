import { Link } from "react-router-dom";
import upRightArrow from "../assets/images/up-right-arrow.svg";

export default function ProjectCard({ project }) {
  return (
    <div class="project-card">
    
      <div className="project-meta">
        <p className="project-category">{project.category}</p>
         <Link to={`/project/${project.id}`}>
          <h3 className="project-title">{project.title}<img className="up-right-arrow" src={upRightArrow}/></h3>
        </Link>
      </div>

    <Link to={`/project/${project.id}`}>
      <img
        className="project-card-featured-image"
        src={project.featuredImage}
        alt={project.title}
      />
    </Link>
    </div>
  );
}
