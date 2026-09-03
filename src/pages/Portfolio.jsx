import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Languages from "../components/Languages";
import Specialization from "../components/Specialization";
import Tools from "../components/Tools";
import ChatAssistant from "../components/ai-assistant/ChatAssistant";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Intro Section */}
      <Hero />

      {/* About / Story */}
      <About />

      {/* Skills / Tech Stack */}
      <Skills />
      <Tools/>
      <Specialization/>
     <Education/>
      {/* Work History / Experience */}
      <Experience />
      <Languages/>

      {/* Achievements / Certifications */}
      <Achievements />

      {/* Projects / Portfolio Showcase */}
      <Projects />

      {/* Hobbies & Interests */}
      <Hobbies />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* AI Recruiter Assistant — floating widget, doesn't affect page layout/scroll */}
      <ChatAssistant />
    </div>
  );
}
