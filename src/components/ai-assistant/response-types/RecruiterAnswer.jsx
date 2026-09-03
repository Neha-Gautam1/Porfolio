import { HiSparkles } from "react-icons/hi2";

export default function RecruiterAnswer({ message }) {
  return (
    <div
      className="max-w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50
                 border border-indigo-100 rounded-2xl p-4"
    >
      <div className="flex items-center gap-1.5 mb-2 text-indigo-500">
        <HiSparkles className="w-4 h-4" />
        <span className="text-[11px] font-semibold uppercase tracking-wide">
          Recruiter Insight
        </span>
      </div>
      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{message}</p>
    </div>
  );
}
