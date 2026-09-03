export default function TimelineList({ message, items = [], accent = "indigo" }) {
  const borderClass = accent === "purple" ? "border-purple-400" : "border-indigo-400";

  if (items.length === 0) {
    return (
      <div className="max-w-full">
        {message && <p className="text-sm text-gray-700 mb-2">{message}</p>}
        <p className="text-xs text-gray-400 italic">Nothing to show here yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-full">
      {message && <p className="text-sm text-gray-700 mb-3">{message}</p>}
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i} className={`bg-gray-50 rounded-xl p-3 border-l-4 ${borderClass}`}>
            {item.title && (
              <p className="font-semibold text-gray-800 text-sm leading-snug">{item.title}</p>
            )}
            {item.details && (
              <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
