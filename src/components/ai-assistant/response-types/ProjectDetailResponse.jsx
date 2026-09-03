import ProjectCard from "./ProjectCard";

export default function ProjectDetailResponse({ message, project }) {
  return (
    <div className="max-w-full">
      {message && <p className="text-sm text-gray-700 mb-3">{message}</p>}
      <ProjectCard project={project} />
    </div>
  );
}
