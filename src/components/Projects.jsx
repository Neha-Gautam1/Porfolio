import { motion } from "framer-motion";
import schoolMgmtImg from "../assets/schoolImg.jpg";
import medicalStoreImg from "../assets/medicalImg.jpg";
import plantNurseryImg from "../assets/nurseryImg.jpg";
import listingWebsiteImg from "../assets/listingWebsiteImg.jpeg";
import chatAppImg from "../assets/chatApp.jpeg";
import { HiArrowRight } from "react-icons/hi";
import portfolioImg from "../assets/portfolio.jpg";

const projects = [
  {
  title: "MentEdge - Intern Mentor Connect Platform",
  image: mentedgeImg,
  desc: "Developed and contributed to an intern-mentor connect platform during internship, enabling seamless communication, mentorship tracking, project collaboration, and internship management with responsive UI and secure authentication.",
  tech: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
  link: "https://mentedge.com/"
},
  {
    title: "School Management System",
    image: schoolMgmtImg,
    desc: "Comprehensive school management system with roles for Admin, Teacher, Student, and Parent. Features attendance tracking, grade management, and communication between stakeholders with role-based authentication and authorization.",
    tech: "MERN Stack, TailwindCSS, JWT Authentication",
    link: "https://github.com/Neha-Gautam1/CodeShape-IT-Solutions"
  },
  {
    title: "Online Medical Store",
    image: medicalStoreImg,
    desc: "E-commerce platform for medicines with roles for Admin, User, and Delivery. Users can browse and purchase products, track orders, and admins manage inventory and delivery assignments. Secure login and role-based authorization.",
    tech: "MERN Stack, TailwindCSS, JWT Authentication",
    link: "https://github.com/Neha-Gautam1/CodeShape-IT-Solutions"
  },
  {
    title: "Plant Nursery",
    image: plantNurseryImg,
    desc: "Online plant nursery platform with role-based access for Admin, User, and Delivery. Admin manages products and orders, users browse and purchase plants, and delivery personnel update order status.",
    tech: "MERN Stack, TailwindCSS, JWT Authentication",
    link: "https://plantllyy.netlify.app/"
  },
  {
    title: "Listing Website",
    image: listingWebsiteImg,
    desc: "Dynamic listing platform allowing users to add, edit, or delete listings. Features authentication, authorization, and a responsive, user-friendly interface for managing content efficiently.",
    tech: "MERN Stack, TailwindCSS, JWT Authentication",
    link: "https://github.com/Neha-Gautam1/Wanderlust-Listing-Site"
  },
  {
    title: "Chat App",
    image: chatAppImg,
    desc: "Real-time chat application allowing users to send and receive messages instantly. Features include user authentication, chat rooms, notifications, and responsive UI for seamless communication across devices.",
    tech: "MERN Stack, Socket.io, TailwindCSS, JWT Authentication",
    link: "https://github.com/Neha-Gautam1/Chat-App"
  },
  {
    title: "Portfolio Website",
    image: portfolioImg,
    desc: "Portfolio website showcasing projects, skills, and contact information. Features a clean, modern design with responsive layout and smooth animations to enhance user experience." ,
    link: "https://github.com/Neha-Gautam1/Porfolio"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="flex flex-col bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Project Image */}
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />

            {/* Project Info */}
            <div className="p-6 text-left flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-3 leading-relaxed flex-1">{proj.desc}</p>
              <p className="text-indigo-600 font-semibold mb-4">Tech Stack: {proj.tech}</p>
              
              {/* View Project Button */}
             <a
  href={proj.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto inline-flex items-center gap-2 px-4 py-2 
             bg-gradient-to-r from-blue-500 to-purple-500 text-white 
             text-sm font-medium rounded-lg shadow-md hover:opacity-90 
             transition w-auto self-start"
>
  View Project
  <HiArrowRight className="w-4 h-4" />
</a>

            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Projects Button */}
      <motion.div className="mt-10">
        <a
          href="https://github.com/Neha-Gautam1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     text-white text-lg font-semibold rounded-lg shadow-lg 
                     hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More Projects
          <HiArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
