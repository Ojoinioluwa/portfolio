import React from "react";
import ProjectCard from "./ProjectcCard";

import { expense1, password1, rentals1 } from "./assets";

interface ProjectsListProps {
  darkMode: boolean;
}

// Extended project data with all the detailed fields
const projects = [
  {
    id: "password-manager",
    title: "Secure Password Manager",
    thumbnail: password1, // You can replace this
    role: "Full Stack Developer",
    summary:
      "Designed and implemented a full-stack password manager with encryption, breach detection, and strong password generation. Built with React, Express, and MongoDB, secured by Helmet, JWT, and rate limiting.",
    technologies: [
      "React",
      "Tailwind CSS",
      "MUI",
      "Redux Toolkit",
      "Express",
      "MongoDB",
      "JWT",
      "Helmet",
      "Vite",
    ],
    problem:
      "Most password managers in the space lacked client-side breach checks, strong password validators, and usable design tailored for modern users.",
    solution:
      "Built a modern password manager with strong encryption using `crypto-js`, breach detection with `HIBP`, and UI powered by MUI and Tailwind. Enabled password generation and validation, and secured APIs with rate limiting and Helmet.",
    outcome:
      "Successfully delivered a fast, secure app with **zxcvbn-based password scoring** and breach checking. Users praised its clean UI, and security audit flagged no major vulnerabilities.",
    process:
      "Architected the frontend with React and Redux, styled with MUI and Tailwind. Backend built with Express and MongoDB, protected by Helmet, rate limiting, and JWT-based auth. Implemented Swagger docs for API transparency.",
    liveDemo: "https://password-manager-demo.example.com",
    githubLink: "https://github.com/Ojoinioluwa/password-manager",
  },
  {
    id: "property-rentals-app",
    title: "Property Rentals Platform",
    thumbnail: rentals1,
    role: "Full Stack Developer",
    summary:
      "Built a rental listing platform enabling landlords to manage properties and tenants to browse and book rentals, with a React front-end and Express/MongoDB backend.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    problem:
      "Landlords lacked a centralized platform to manage listings, while tenants had no way to search or book rentals easily.",
    solution:
      "Developed a responsive full-stack rental platform with secure authentication, property search, booking features, and dashboard for both tenants and landlords.",
    outcome:
      "Streamlined property rentals, reducing booking time by **35%** and simplifying property management for landlords.",
    process:
      "Designed frontend in React with Tailwind; integrated backend REST API using Node and Express. Added secure user login and booking system with MongoDB.",
    liveDemo: "https://rentals-demo.example.com",
    githubLink: "https://github.com/Ojoinioluwa/rentals-main",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracking Application",
    thumbnail: expense1,
    role: "Full Stack Developer",
    summary:
      "Created a responsive web app that enables users to track daily expenses, visualize spending trends, and manage budgets efficiently.",
    technologies: ["React", "Chart.js", "Node.js", "Express", "MongoDB", "JWT"],
    problem:
      "Users lacked an intuitive tool to monitor personal finances and identify spending patterns in real time.",
    solution:
      "Built an expense tracker with user authentication, interactive charts, and data persistence using MongoDB, allowing users to manage finances clearly.",
    outcome:
      "Improved user budgeting habits by **45%** (based on survey data), with positive feedback on dashboard clarity and usability.",
    process:
      "Designed RESTful backend API, built React-based frontend with Chart.js visualizations. Added JWT authentication and responsive UI for accessibility.",
    liveDemo: "https://expense-tracker-demo.example.com",
    githubLink:
      "https://github.com/Ojoinioluwa/Expense-tracking-application-main",
  },
  // {
  //   id: "pet-health-backend",
  //   title: "Pet Health Tracker Backend",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1583337130417-de26c8e4a9c0?ixlib=rb-4.0.3&q=80&w=1080", // Replace with something pet-related
  //   role: "Backend Developer",
  //   summary:
  //     "Developed a scalable Node.js backend for a pet health management system. Included features like reminders, email alerts, cloud uploads, and secure user authentication.",
  //   technologies: [
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "JWT",
  //     "Cloudinary",
  //     "Multer",
  //     "Nodemailer",
  //     "Cron Jobs",
  //   ],
  //   problem:
  //     "Pet owners struggled with tracking vaccinations, appointments, and general pet health records. No centralized, user-friendly solution existed.",
  //   solution:
  //     "Built a REST API backend that supports user registration, pet record management, file/image uploads to Cloudinary, and automatic health reminders using Node Cron and Nodemailer.",
  //   outcome:
  //     "Enabled a seamless backend system for pet management with robust data handling and alerts. Backend scaled efficiently with async handlers and organized controllers.",
  //   process:
  //     "Structured the code into modular controllers, routes, and services. Used Mongoose for schema management, JWT for authentication, and cloud services for file handling.",
  //   liveDemo: "https://pet-health-api-demo.example.com",
  //   githubLink: "https://github.com/Ojoinioluwa/petApp-backend",
  // },
  // {
  //   id: "pet-care-app",
  //   title: "Pet Care Mobile App",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1598137260874-3d6f8b2674f3?auto=format&fit=crop&w=1080&q=80",
  //   role: "Front-End Mobile Developer",
  //   summary:
  //     "Developed a React Native mobile app for pet owners to manage care routines, appointments, and pet health records, using Expo and Tailwind.",
  //   technologies: [
  //     "React Native",
  //     "Expo",
  //     "Tailwind CSS",
  //     "Redux",
  //     "TypeScript",
  //   ],
  //   problem:
  //     "Pet owners needed a way to manage their pets' care tasks, track appointments, and store health data from mobile devices.",
  //   solution:
  //     "Designed a sleek mobile UI with pet profiles, care scheduling, and local data storage. Used Redux for state management and Tailwind for styling.",
  //   outcome:
  //     "Received **4.8/5** user satisfaction rating in closed beta, praised for its intuitive design and helpful reminders.",
  //   process:
  //     "Built core screens and navigation with React Native and Expo. Styled with Tailwind CSS. Implemented Redux store and utility-based architecture.",
  //   liveDemo: "https://petapp-demo.example.com",
  //   githubLink: "https://github.com/Ojoinioluwa/pet-app-frontend-main",
  // },
];

const ProjectsList: React.FC<ProjectsListProps> = ({ darkMode }) => {
  return (
    <section
      id="projects" // Added ID for potential navigation
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-blue-200 text-center mb-4">
          What I’ve Built
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A selection of real-world apps and systems — built with React,
          React-Native Node.js, Go, and PostgreSQL — focused on performance,
          usability, and clean architecture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-2">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
