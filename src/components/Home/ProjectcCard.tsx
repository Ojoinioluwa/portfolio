import React from "react";
import { Link } from "react-router-dom";

// Simplified ProjectCardProps for display on the card itself
interface ProjectCardProps {
  id: string;
  title: string;
  thumbnail: string;
  role: string;
  summary: string;
  darkMode: boolean;
  // Technologies, problem, solution, outcome, process, liveDemo, githubLink
  // are NOT directly passed as props to the ProjectCard for display.
  // They are implicitly available in the 'proj' object from ProjectsList
  // and would be accessed on a dedicated project details page.
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  thumbnail,
  role,
  summary,
  darkMode,
}) => {
  return (
    <div
      className={`
        rounded-xl overflow-hidden shadow-lg transform transition-all duration-300
        hover:scale-[1.03] hover:shadow-xl
        ${
          darkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }
      `}
    >
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/600x400?text=Image+Not+Available";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <h3
          className={`text-xl font-bold mb-2 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm italic mb-3 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {role}
        </p>
        <p
          className={`text-base leading-relaxed line-clamp-3 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {summary}
        </p>

        <div className="mt-5">
          <Link
            to={`/${id}`}
            className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-white
              bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4
              focus:ring-blue-300 transition-colors duration-200 ease-in-out
              ${
                darkMode
                  ? "dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  : ""
              }`}
          >
            View Details
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
