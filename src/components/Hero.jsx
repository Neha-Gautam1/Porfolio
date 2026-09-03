import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // Add your profile picture in assets folder
import resumeFile from "../assets/Neha.pdf"; // Add your resume in assets folder

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white px-4">
      {/* Profile Picture */}
      <motion.img
        src={profilePic}
        alt="Neha Profile"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey There, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Neha
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-2 md:mt-4 text-lg md:text-xl text-gray-600 text-center max-w-xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a <span className="font-semibold text-indigo-600">MERN Stack Developer</span> 
        &nbsp; who loves building responsive and functional websites 🌐, with a strong command over 
        <span className="font-semibold text-purple-600"> Data Structures & Algorithms in C++</span> 🚀.
      </motion.p>

      {/* Download Resume Button */}
      <motion.a
        href={resumeFile}
        download="Neha_Resume.pdf"
        className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
        whileHover={{ scale: 1.05 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
}
