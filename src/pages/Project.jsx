import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import LightBox from "../components/LightBox";
import "../styles/LightBox.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [LightBoxIndex, setLightBoxIndex] = useState(null);

  if (!project) return <p>Project not found</p>;

  const images = project.images || [];
  const openLightBox = (index) => setLightBoxIndex(index);
  const closeLightBox = () => setLightBoxIndex(null);
  const goPrev = () =>
    setLightBoxIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setLightBoxIndex((i) => (i + 1) % images.length);

  return (
    <div className="project-page">
      <h1 className="inner-project-title">{project.title}</h1>
      <p className="inner-project-category">{project.long_category}</p>

      <div className="inner-project-content">
        <div className="inner-project-content-body">
          {project.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {project.vimeo ? (
          <div className="project-video-container">
            <iframe
              src={project.vimeo}
              title={project.title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                border: "none",
                borderRadius: "5px",
              }}
            />
          </div>
        ) : (
          <div className="masonry-grid">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => openLightBox(index)}
              />
            ))}
          </div>
        )}
      </div>

      {!project.vimeo && images.length > 0 && (
        <LightBox
          images={images}
          currentIndex={LightBoxIndex}
          onClose={closeLightBox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}