import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineChatBubbleLeftRight, HiXMark } from "react-icons/hi2";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";

// Set VITE_API_URL in .env for production (Part 10); defaults to the local
// FastAPI dev server (rag/api/server.py, started with `uvicorn api.server:app`).
const API_URL = import.meta.env.API_URL || "http://localhost:8000";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]); // {query, response} pairs — sent with every request so the backend (nlu/context.py) can resolve follow-ups like "the second one" or "it"
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isSending]);

  const handleSend = async (query) => {
    const userMessage = { role: "user", content: query };
    setMessages((prev) => [...prev, userMessage]);
    setIsSending(true);

    try {
      const { data: response } = await axios.post(`${API_URL}/chat`, { query, history });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.message, response },
      ]);
      setHistory((prev) => [...prev, { query, response }]);
    } catch (err) {
      console.error("Assistant reply failed:", err);
      const isNetworkError = !err.response;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          isError: true,
          content: isNetworkError
            ? "Couldn't reach the assistant backend. Is the server running?"
            : "Something went wrong reaching the assistant. Please try again.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Floating launcher button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                   text-white shadow-lg flex items-center justify-center"
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
      >
        {isOpen ? <HiXMark className="w-6 h-6" /> : <HiOutlineChatBubbleLeftRight className="w-6 h-6" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed z-50 bottom-24 right-4 sm:right-6 w-[92vw] max-w-sm
                       h-[70vh] max-h-[600px] bg-white rounded-3xl shadow-2xl
                       flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <p className="font-bold leading-tight">Ask about Neha</p>
              <p className="text-xs text-white/80">AI recruiter assistant</p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center px-2">
                  <p className="text-gray-600 text-sm">
                    Hi! I'm an AI assistant that can answer questions about Neha's
                    projects, skills, and experience. Try one of these, or ask
                    your own:
                  </p>
                  <SuggestedQuestions onSelect={handleSend} />
                </div>
              ) : (
                messages.map((message, i) => <ChatMessage key={i} message={message} />)
              )}
              {isSending && <ChatMessage message={{ role: "assistant", isLoading: true }} />}
            </div>

            <ChatInput onSend={handleSend} disabled={isSending} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
