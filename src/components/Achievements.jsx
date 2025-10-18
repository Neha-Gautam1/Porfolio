import { motion } from "framer-motion";
import { FaCode, FaMedal } from "react-icons/fa";

const achievements = [
  {
    title: "CodeChef",
    desc: "Achieved a 2★ rating by solving algorithmic challenges and strengthening problem-solving skills.",
    icon: <FaCode className="text-orange-500 w-10 h-10" />,
    link: "https://www.codechef.com/users/neha_gautam_23",
  },
  {
    title: "LeetCode",
    desc: "Ranked in the Top 13% of global participants by consistently solving data structure and algorithm problems.",
    icon: <FaMedal className="text-yellow-500 w-10 h-10" />,
    link: "https://leetcode.com/u/developer_neha/",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white text-center">
      {/* Heading with gradient & animation */}
      <motion.h2
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      {/* Cards grid */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto px-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-3">{ach.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {ach.title}
            </h3>
            <p className="text-gray-600 mb-4">{ach.desc}</p>
            <a
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition"
            >
              View Profile
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
