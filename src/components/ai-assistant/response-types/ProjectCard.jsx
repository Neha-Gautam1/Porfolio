import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function ProjectCard({ project, compact = false }) {
  if (!project) return null;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all
                 duration-300 p-4 border border-gray-100"
    >
      <h4 className="font-bold text-gray-800 text-sm">{project.title}</h4>
      <p
        className={`text-gray-600 text-xs leading-relaxed mt-1.5 ${
          compact ? "line-clamp-3" : ""
        }`}
      >
        {project.description}
      </p>
      {project.tech && (
        <p className="text-indigo-600 font-semibold text-xs mt-2.5">{project.tech}</p>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-white
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition"
        >
          View Project <HiArrowTopRightOnSquare className="w-3 h-3" />
        </a>
      )}
    </motion.div>
  );
}
