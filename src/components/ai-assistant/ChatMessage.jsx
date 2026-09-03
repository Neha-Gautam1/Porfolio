import { motion } from "framer-motion";

import ResponseRenderer from "./response-types/ResponseRenderer";

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-indigo-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";
  const isError = message.role === "assistant" && message.isError;
  const isLoading = message.role === "assistant" && message.isLoading;

  // A structured (Generative UI) response renders as its own typed card,
  // full-width and without the plain chat-bubble background — the card
  // itself carries the visual weight.
  const isStructured =
    !isUser && !isError && !isLoading && message.response && message.response.type !== "text";

  if (isStructured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full"
      >
        <ResponseRenderer response={message.response} />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl text-sm leading-relaxed shadow-sm ${
          isUser
            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2.5 rounded-br-sm"
            : isError
            ? "bg-red-50 text-red-600 border border-red-200 px-4 py-2.5 rounded-bl-sm"
            : "bg-gray-50 text-gray-800 border border-gray-100 rounded-bl-sm overflow-hidden"
        }`}
      >
        {isLoading ? <TypingDots /> : (
          <div className={isUser || isError ? "" : "px-4 py-2.5"}>
            {message.content}
          </div>
        )}
      </div>
    </motion.div>
  );
}
