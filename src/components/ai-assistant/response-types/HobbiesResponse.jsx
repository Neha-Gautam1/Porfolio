export default function HobbiesResponse({ message, items = [] }) {
  return (
    <div className="max-w-full">
      {message && <p className="text-sm text-gray-700 mb-3">{message}</p>}
      {items.length === 0 ? (
        <p className="text-xs text-gray-400 italic">Nothing to show here yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2">
          {items.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-xl p-3">
              {item.title && (
                <p className="font-semibold text-gray-800 text-xs capitalize">{item.title}</p>
              )}
              {item.details && (
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.details}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
