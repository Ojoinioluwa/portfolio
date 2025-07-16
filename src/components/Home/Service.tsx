import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaArrowRight } from "react-icons/fa"; // Added FaArrowRight for the CTA

interface ServicesPageProps {
  darkMode: boolean;
}

const services = [
  {
    title: "Web App Development",
    icon: FaCode,
    description:
      "Transform your business idea into a robust online presence. I craft responsive, scalable, full-stack web applications using React, Node.js, Express, and MongoDB. From MVPs to complex systems, expect performance-driven solutions with clean architecture and modern UI/UX.",
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    description:
      "Reach your audience anywhere, anytime. I build intuitive, high-performance cross-platform mobile apps with React Native (Expo) and a Node.js backend. Enjoy offline capabilities, fast loading, and a native-like UX for both iOS and Android, backed by scalable cloud APIs.",
  },
  {
    title: "Backend Engineering",
    icon: FaServer,
    description:
      "Establish a resilient foundation for your applications. I architect secure and maintainable backend systems using Node.js, Express.js, and MongoDB. Perfect for RESTful APIs, admin dashboards, microservices, and real-time apps requiring efficiency and reliability.",
  },
];

const ServicesPage: React.FC<ServicesPageProps> = ({ darkMode }) => {
  return (
    <section
      id="services" // Added an ID for direct linking from other parts of the site
      className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {" "}
        {/* Increased max-width for better spacing */}
        <h2 className="text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
          Crafting Digital Experiences That Drive Growth
        </h2>
        <p
          className={`text-xl mb-16 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Specialized software solutions designed to help your business
          innovate, scale, and succeed in the digital landscape.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {/* Adjusted gap for a tighter look */}
          {services.map(({ title, icon: Icon, description }, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-xl border transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }
                ${
                  darkMode ? "hover:border-purple-600" : "hover:border-blue-500"
                }
              `} // Enhanced hover effects and border colors
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-5
                ${
                  darkMode
                    ? "bg-purple-600 text-white"
                    : "bg-indigo-100 text-indigo-600"
                }
              `}
              >
                {" "}
                {/* Styled icon container */}
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p
                className={`text-base leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mb-5`}
              >
                {description}
              </p>
              <p
                className={`text-sm italic ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Flexible, project-based pricing to match your specific needs.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          {" "}
          {/* Increased top margin for CTA */}
          <p
            className={`text-xl mb-6 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Ready to transform your ideas into reality or conquer a complex
            technical challenge?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-600 text-white
              shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
          >
            Let's Discuss Your Project <FaArrowRight className="ml-3 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
