export default function SkillsResponse({ message, items = [] }) {
  return (
    <div className="max-w-full">
      {message && <p className="text-sm text-gray-700 mb-3">{message}</p>}
      {items.length === 0 ? (
        <p className="text-xs text-gray-400 italic">Nothing to show here yet.</p>
      ) : (
        <div className="space-y-3">
        {items.map((item, i) => {
          const chips = (item.technologies || "")
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);

          return (
            <div key={i}>
              {item.category && (
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  {item.category.replace(/_/g, " ")}
                </p>
              )}
              {chips.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {chips.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50
                                 text-indigo-600 border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : (
                item.details && <p className="text-gray-600 text-xs">{item.details}</p>
              )}
            </div>
          );
        })}
        </div>
      )}
    </div>
  );
}
