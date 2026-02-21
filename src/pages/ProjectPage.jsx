import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import LightBox from "../components/LightBox";
import upLeftArrow from "../assets/images/up-left-arrow.svg";
import "../styles/LightBox.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [LightBoxIndex, setLightBoxIndex] = useState(null);

  if (!project) return <p>Project not found</p>;

  const openLightBox = (index) => setLightBoxIndex(index);
  const closeLightBox = () => setLightBoxIndex(null);
  const goPrev = () => setLightBoxIndex(i => (i - 1 + project.images.length) % project.images.length);
  const goNext = () => setLightBoxIndex(i => (i + 1) % project.images.length);

  return (
    <div className="project-page">
      <h1 className="inner-project-title">{project.title}</h1>
      <p className="inner-project-category">{project.category}</p>
      <Link to="/" className="back-to-projects-link"><img src={upLeftArrow} className="up-left-arrow"/> Back to all Projects</Link>

      <div className="inner-project-content">
        <p className="inner-project-content-body">{project.content}</p>

        <div className="masonry-grid">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => openLightBox(index)}
            />
          ))}
        </div>
      </div>

      <LightBox
        images={project.images}
        currentIndex={LightBoxIndex}
        onClose={closeLightBox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}