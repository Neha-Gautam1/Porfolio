import { motion } from "framer-motion";

// Starter prompts from the project spec (section 14).
const SUGGESTED_QUESTIONS = [
  "Show me your projects",
  "Tell me about your experience",
  "Why should we hire Neha?",
  "Tell me about CareerPilot",
  "Which projects use AI?",
  "Tell me about her education",
];

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center px-2">
      {SUGGESTED_QUESTIONS.map((question, i) => (
        <motion.button
          key={question}
          type="button"
          onClick={() => onSelect(question)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200
                     text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition"
        >
          {question}
        </motion.button>
      ))}
    </div>
  );
}
