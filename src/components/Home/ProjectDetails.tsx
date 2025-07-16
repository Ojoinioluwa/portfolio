// Refactored Project Detail Page with Type-Based Sections
import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBullseye,
  FaCogs,
  FaWrench,
  FaLightbulb,
  FaChartLine,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { allProjects } from "./projectData";

interface ProjectDetailProps {
  darkMode: boolean;
}

type ProjectId = keyof typeof allProjects;

const ProjectDetailPage: React.FC<ProjectDetailProps> = ({ darkMode }) => {
  const { id } = useParams<{ id: ProjectId }>();
  const project = id ? allProjects[id] : undefined;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = scrollContainerRef.current.clientWidth * 0.8;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!project) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center ${
          darkMode ? "bg-gray-900 text-red-400" : "bg-gray-50 text-red-600"
        }`}
      >
        <p className="text-2xl font-semibold">Project not found.</p>
        <Link
          to="/"
          className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium focus:ring-2 transition-all ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          <FaArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  const DetailItem: React.FC<{
    icon: React.ElementType;
    label: string;
    value: string;
  }> = ({ icon: Icon, label, value }) => (
    <div
      className={`flex items-start gap-4 p-4 rounded-lg shadow ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <Icon
        className={`w-6 h-6 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
      />
      <div>
        <p className="font-semibold mb-1">{label}:</p>
        <p>{value}</p>
      </div>
    </div>
  );

  const roleTypeIcon = () => {
    if (project.role.toLowerCase().includes("backend")) return FaServer;
    if (project.role.toLowerCase().includes("frontend")) return FaMobileAlt;
    return FaLaptopCode; // fallback to full stack
  };

  return (
    <div
      className={`min-h-screen px-6 py-12 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg font-medium focus:ring-2 transition-all ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          <FaArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <h1 className="text-center text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            {project.title}
          </span>
        </h1>

        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full font-medium text-sm shadow-lg border border-gray-300 dark:border-gray-700">
            {React.createElement(roleTypeIcon(), {
              className: `w-5 h-5 ${
                darkMode ? "text-blue-300" : "text-blue-600"
              }`,
            })}
            <span>{project.role}</span>
          </div>
        </div>

        <p
          className={`text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {project.description}
        </p>

        {/* Image Gallery */}
        {project.images.length > 0 && (
          <div className="relative mb-16">
            {project.images.length > 1 && (
              <>
                <button
                  title="left"
                  onClick={() => scroll("left")}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 z-10 rounded-full shadow-md ${
                    darkMode
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>
                <button
                  title="right"
                  onClick={() => scroll("right")}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 z-10 rounded-full shadow-md ${
                    darkMode
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
            >
              {project.images.map((src, idx) => (
                <div
                  key={idx}
                  className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <img
                      src={src}
                      alt={`Screenshot ${idx + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://via.placeholder.com/800x400/$${
                          darkMode ? "334155" : "e0e0e0"
                        }/$${darkMode ? "ffffff" : "000000"}?text=Image+${
                          idx + 1
                        }`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailItem icon={FaBullseye} label="Goal" value={project.goal} />
          <DetailItem icon={FaCogs} label="Process" value={project.process} />
          <DetailItem
            icon={FaLightbulb}
            label="Solution"
            value={project.solution}
          />
          <DetailItem
            icon={FaChartLine}
            label="Outcome"
            value={project.outcome}
          />
          <DetailItem
            icon={FaBookOpen}
            label="Lessons"
            value={project.lessons}
          />

          <div
            className={`col-span-1 md:col-span-2 p-4 rounded-lg shadow ${
              darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
            }`}
          >
            <div className="flex items-start gap-4">
              <FaWrench
                className={`w-6 h-6 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <div>
                <p className="font-semibold mb-2">Tools Used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode
                          ? "bg-blue-700 text-blue-100"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {(project.liveDemo || project.githubLink || project.downloadLink) && (
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Explore Further</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg shadow-md focus:outline-none focus:ring-4 transition-all ${
                    darkMode
                      ? "bg-green-600 hover:bg-green-700 focus:ring-green-800"
                      : "bg-green-500 hover:bg-green-600 focus:ring-green-300"
                  } text-white`}
                >
                  <FaExternalLinkAlt className="mr-3 w-5 h-5" /> Live Demo
                </a>
              )}
              {project.downloadLink && (
                <a
                  href={project.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg shadow-md focus:outline-none focus:ring-4 transition-all ${
                    darkMode
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                      : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
                  } text-white`}
                >
                  <FaExternalLinkAlt className="mr-3 w-5 h-5" />
                  Download App
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg shadow-md focus:outline-none focus:ring-4 transition-all ${
                    darkMode
                      ? "bg-purple-600 hover:bg-purple-700 focus:ring-purple-800"
                      : "bg-purple-500 hover:bg-purple-600 focus:ring-purple-300"
                  } text-white`}
                >
                  <FaGithub className="mr-3 w-5 h-5" /> GitHub Repository
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
