import { Link } from "react-router-dom";
import upRightArrow from "../assets/images/up-right-arrow.svg";
import useScrollScale from "../hooks/useScrollScale";

export default function ProjectCard({ project }) {
  const { ref, scale } = useScrollScale(0.7);

  return (
    <div className="project-card" ref={ref}>
      <div className="project-meta">
        <p className="project-category">{project.category}</p>
        <Link to={`/project/${project.id}`}>
          <h3 className="project-title">
            {project.title}
            <img className="up-right-arrow" src={upRightArrow} />
          </h3>
        </Link>
      </div>
      <Link 
        to={`/project/${project.id}`} 
        className="project-media-container"
        style={{
        display: "block",
        transform: `scale(${scale})`,
        transformOrigin: "center",
        transition: "transform 0.5s ease-out",
      }}
      >
        {project.vimeo ? (
          <iframe
            src={project.vimeo}
            title={project.title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              display: "block",
              border: "none",
            }}
          />
        ) : (
          <img
            className="project-card-featured-image"
            src={project.featuredImage}
            alt={project.title}
          />
        )}
      </Link>
    </div>
  );
}