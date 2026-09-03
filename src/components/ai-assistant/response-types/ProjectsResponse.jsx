import ProjectCard from "./ProjectCard";

export default function ProjectsResponse({ message, items = [] }) {
  return (
    <div className="max-w-full">
      {message && <p className="text-sm text-gray-700 mb-3">{message}</p>}
      {items.length === 0 ? (
        <p className="text-xs text-gray-400 italic">No matching projects found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {items.map((project, i) => (
            <ProjectCard key={project.title ?? i} project={project} compact />
          ))}
        </div>
      )}
    </div>
  );
}
