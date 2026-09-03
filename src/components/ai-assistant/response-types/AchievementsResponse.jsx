export default function AchievementsResponse({ message, items = [] }) {
  return (
    <div className="max-w-full">
      {message && <p className="text-sm text-gray-700 mb-3">{message}</p>}
      {items.length === 0 ? (
        <p className="text-xs text-gray-400 italic">Nothing to show here yet.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="bg-gray-50 rounded-xl p-3 text-xs text-gray-700 leading-relaxed">
              {item.title && <span className="font-semibold text-gray-800">{item.title}: </span>}
              {item.details}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
