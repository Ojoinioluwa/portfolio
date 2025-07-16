import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaMobileAlt, FaServer } from "react-icons/fa";
import fallbackImage from "../../assets/aboutme.jpg";

interface AboutMeProps {
  darkMode: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = fallbackImage;
    img.onload = () => setImageSrc(fallbackImage);
    img.onerror = () => {
      console.error("Image failed to load.");
      setImageSrc(null);
    };

    const section = document.getElementById("about-me-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-me-section"
      className={`w-full min-h-[600px] flex flex-col lg:flex-row items-center justify-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Left: Circular Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center py-10"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt="About Me"
            className={`w-60 h-60 md:w-96 md:h-96 rounded-full object-cover shadow-xl border-4 ${
              darkMode ? "border-gray-800" : "border-white"
            }`}
          />
        )}
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className={`w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 space-y-6 leading-relaxed ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2
          className={`text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${
            darkMode
              ? "from-purple-400 to-pink-500"
              : "from-blue-700 to-blue-500"
          }`}
        >
          Passionate About Building Real-World Solutions — Web & Mobile
        </h2>

        <p>
          <span className="inline-flex items-center gap-2 font-semibold text-lg">
            <FaCode className={darkMode ? "text-blue-400" : "text-blue-600"} />
            Full-Stack Developer
          </span>{" "}
          experienced in crafting <strong>
            modern, scalable applications
          </strong>{" "}
          across web and mobile. I use{" "}
          <strong>React, React Native (Expo), Node.js, and Go</strong> to
          deliver responsive UIs and performant backends that solve real
          problems.
        </p>

        <p>
          <span className="inline-flex items-center gap-2 font-semibold text-lg">
            <FaMobileAlt
              className={darkMode ? "text-green-400" : "text-green-600"}
            />
            Mobile Engineer
          </span>{" "}
          building intuitive, cross-platform mobile apps using{" "}
          <strong>React Native + Expo</strong>. I focus on clean architecture,
          offline-first support, and smooth user experiences with native feel.
        </p>

        <p>
          <span className="inline-flex items-center gap-2 font-semibold text-lg">
            <FaServer
              className={darkMode ? "text-indigo-400" : "text-indigo-600"}
            />
            Backend Specialist
          </span>{" "}
          building secure APIs with{" "}
          <strong>Go, PostgreSQL, Node.js, and MongoDB</strong>. From auth flows
          to automation and scheduling, I design systems that scale and stay
          clean under pressure.
        </p>

        <p>
          <span className="inline-flex items-center gap-2 font-semibold text-lg">
            <FaGraduationCap
              className={darkMode ? "text-yellow-400" : "text-yellow-600"}
            />
            Lifelong Learner
          </span>{" "}
          constantly growing through{" "}
          <strong>
            security engineering, dev tooling, and distributed systems
          </strong>
          . I believe in building software that lasts — and that people actually
          love to use.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
