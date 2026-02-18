import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.category}</p>

      <div className="project-content">
        <p>{project.content}</p>

        {project.images.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
    </div>
  );
}
