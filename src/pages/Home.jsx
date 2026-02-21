import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ContactDrawer from "../components/ContactDrawer"; 

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="home">
      <div className="opening-section">
        <h1 className="main-title">Karen Natharen</h1>
        <p className="contact-link" onClick={openDrawer} style={{ cursor: "pointer" }}>
          Contact
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <ContactDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
}