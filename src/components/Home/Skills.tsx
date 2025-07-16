import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiPrisma,
  SiVercel,
  SiExpo,
  SiExpress,
  SiFramer,
  SiMongoose,
} from "react-icons/si";

const skillList = [
  {
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
    note: "Built and maintained scalable SPAs",
  },
  {
    name: "React Native",
    icon: <FaReact />,
    category: "Frontend",
    note: "Used for cross-platform mobile apps",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Frontend",
    note: "Rapid UI prototyping",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    category: "Frontend",
    note: "Subtle animations for engagement",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "Frontend",
    note: "Core scripting language expertise",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Frontend",
    note: "Static typing for better maintainability",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
    note: "REST APIs and server-side logic",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    category: "Backend",
    note: "Routing, middleware, and modular design",
  },
  {
    name: "Go",
    icon: <SiGo />,
    category: "Backend",
    note: "Optimized concurrent systems",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database",
    note: "Schema design for NoSQL projects",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "Database",
    note: "Relational DB for scalable apps",
  },

  {
    name: "Prisma",
    icon: <SiPrisma />,
    category: "ORM",
    note: "Type-safe database access",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose />,
    category: "ORM",
    note: "ODM for MongoDB with complex schemas",
  },
  {
    name: "Expo",
    icon: <SiExpo />,
    category: "Mobile Tools",
    note: "Cross-platform dev for RN apps",
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "DevOps",
    note: "Version control best practices",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    category: "DevOps",
    note: "CI/CD and collaboration",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    category: "DevOps",
    note: "Containerization of microservices",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    category: "Deployment",
    note: "Frontend deployment & edge functions",
  },
];

const categories = ["All", ...new Set(skillList.map((s) => s.category))];

const SkillsPage = ({ darkMode }: { darkMode: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const ref = document.getElementById("skills-section");
    if (ref) obs.observe(ref);
    return () => obs.disconnect();
  }, []);

  const filteredSkills =
    filter === "All"
      ? skillList
      : skillList.filter((skill) => skill.category === filter);

  return (
    <section
      id="skills-section"
      className={`py-20 px-6 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500"
      >
        Engineering Arsenal
      </motion.h2>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium border transition duration-300 text-sm ${
              filter === cat
                ? "bg-teal-500 text-white"
                : darkMode
                ? "bg-gray-700 text-gray-300 border-gray-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`p-4 rounded-lg shadow-md flex flex-col items-center space-y-2 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } hover:shadow-xl transition duration-300`}
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="font-semibold text-sm">{skill.name}</p>
            <span className="text-xs text-gray-500 text-center">
              {skill.note}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
