import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introRendered, setIntroRendered] = useState(true);

useEffect(() => {
  const fadeTimer = setTimeout(() => {
    setIntroVisible(false);
  }, 2000);

  return () => {
    clearTimeout(fadeTimer);
  };
}, []);

  return (
    <div className="home">
      {introRendered && (
        <div
          className="intro-overlay"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999999,
            opacity: introVisible ? 1 : 0,
            transition: "opacity 1s ease",
            pointerEvents: introVisible ? "all" : "none",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#fff",
              margin: 0,
              fontFamily: "inherit",
              fontSize: "clamp(3rem, 5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              fontFamily: '"Neulis", sans-serif',
            }}
          >
            Karen Natharen
          </h1>
          <p
            style={{
              color: "#fff",
              margin: "0.75rem 0 0",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Exhibition designer · Creative Director · Producer
          </p>
        </div>
      )}

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}