import { useState } from "react";
import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi2";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 border-t border-gray-100 bg-white"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask about Neha's projects, skills, experience..."
        disabled={disabled}
        className="flex-1 text-sm px-4 py-2.5 rounded-full border border-gray-200
                   focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:bg-gray-50"
      />
      <motion.button
        type="submit"
        disabled={disabled || !value.trim()}
        whileHover={{ scale: disabled ? 1 : 1.08 }}
        whileTap={{ scale: disabled ? 1 : 0.94 }}
        className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white
                   shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        <HiPaperAirplane className="w-4 h-4" />
      </motion.button>
    </form>
  );
}
