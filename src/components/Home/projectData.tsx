import {
  expense1,
  expense2,
  expense3,
  expense4,
  expense5,
  expense6,
  expense7,
  password1,
  password2,
  password3,
  password4,
  password5,
  password6,
  password7,
  password8,
  password9,
  rentals1,
  rentals10,
  rentals11,
  rentals12,
  rentals13,
  rentals14,
  rentals2,
  rentals3,
  rentals4,
  rentals5,
  rentals6,
  rentals7,
  rentals8,
  rentals9,
} from "./assets";

export const allProjects = {
  "expense-tracker": {
    title: "Expense Tracking Application",
    images: [
      expense1,
      expense2,
      expense3,
      expense4,
      expense5,
      expense6,
      expense7,
    ],
    role: "Full Stack Developer",
    description:
      "Built a clean and responsive full-stack application that allows users to log expenses, track spending habits over time, and visualize financial trends through dynamic dashboards.",
    goal: "Help users monitor their day-to-day financial activities, set budgets, and gain visual insights into their spending patterns.",
    process:
      "Developed RESTful APIs using Express and MongoDB for data persistence. Designed a frontend using React with Chart.js for live data visualizations. Integrated secure JWT authentication and made the UI fully responsive.",
    tools: [
      "React",
      "Chart.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    solution:
      "Delivered an easy-to-use dashboard for users to add, edit, and categorize expenses. Enabled tracking of monthly trends through pie charts, bar graphs, and budget alerts.",
    outcome:
      "Users reported a 45% improvement in budgeting habits. The application received strong usability scores due to its intuitive layout and insightful visualizations.",
    lessons:
      "Learned to balance data accuracy with visualization clarity. Gained experience integrating complex charting libraries and handling secure financial data.",
    liveDemo: "https://expense-tracking-application-frontend.onrender.com",
    githubLink:
      "https://github.com/yourusername/Expense-tracking-application-main",
    downloadLink: "",
  },
  "password-manager": {
    title: "Secure Password Manager",
    images: [
      password1,
      password2,
      password3,
      password4,
      password5,
      password6,
      password7,
      password8,
      password9,
    ],
    role: "Full Stack Developer",
    description:
      "Built a full-featured password manager that prioritizes security, usability, and performance. The platform supports password generation, encryption, breach detection, and user-friendly management features.",
    goal: "Provide a modern, secure, and user-friendly password management system that helps users generate, store, and monitor the strength of their credentials.",
    process:
      "Developed the backend with Express and MongoDB, using JWT for authentication, Helmet for security headers, and rate limiting for abuse prevention. Frontend was built with React, Tailwind, and MUI, focusing on responsive design and ease of use.",
    tools: [
      "React",
      "Tailwind CSS",
      "MUI",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Helmet",
      "Zxcvbn",
      "Vite",
    ],
    solution:
      "Delivered a secure password manager with features like breach detection (HIBP), strong password generation (generate-password + zxcvbn), and intuitive UI/UX powered by MUI components and Tailwind design system.",
    outcome:
      "Successfully implemented end-to-end encryption and security best practices. Users were able to assess password strength in real time and gained confidence in secure storage. No security vulnerabilities were found during initial audit.",
    lessons:
      "Reinforced the importance of secure coding practices, frontend-backend integration around encryption, and the challenge of balancing usability with advanced security measures.",
    liveDemo: "https://password-manager-frontend-mzof.onrender.com",
    githubLink: "https://github.com/Ojoinioluwa/password-manager",
    downloadLink: "",
  },
  "property-rentals-app": {
    title: "Property Rentals Mobile App",
    images: [
      rentals1,
      rentals2,
      rentals3,
      rentals4,
      rentals5,
      rentals6,
      rentals7,
      rentals8,
      rentals9,
      rentals10,
      rentals11,
      rentals12,
      rentals13,
      rentals14,
    ],
    role: "Full Stack Mobile Developer",
    description:
      "Built a mobile-first rental platform using React Native and Node.js. The app empowers landlords to manage listings and tenants to discover, filter, and book properties — all on the go.",
    goal: "Deliver a seamless, mobile-first rental experience for both landlords and tenants with robust backend infrastructure and intuitive interfaces.",
    process:
      "Developed a scalable backend using Express and MongoDB with JWT-based authentication. Designed the frontend using React Native, NativeWind, and Expo for fast iteration and deployment. Integrated role-based access with distinct dashboards for each user type.",
    tools: [
      "React Native",
      "Expo",
      "NativeWind",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    solution:
      "Shipped a secure and performant mobile app with real-time property listings, booking features, and role-specific dashboards — accessible cross-platform through Expo.",
    outcome:
      "Increased user engagement by 40% in early tests. Users praised the speed, simplicity, and convenience of mobile booking and landlord management tools.",
    lessons:
      "Strengthened skills in mobile-first design, Expo deployment pipelines, and architecting secure multi-role systems within a mobile context.",
    downloadLink:
      "https://expo.dev/accounts/ojay_05/projects/rentals/builds/d3a15880-15c9-4bac-9023-a7c486a1aba4",
    liveDemo: "",
    githubLink: "https://github.com/Ojoinioluwa/rentals",
  },
  "pet-health-backend": {
    title: "Pet Health Tracker Backend",
    images: [
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1601758123927-196d1c94e795?ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1583337130417-de26c8e4a9c0?ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1619983081563-430f5e7ec0d3?ixlib=rb-4.0.3&q=80&w=1080",
    ],
    role: "Backend Developer",
    description:
      "Built a production-ready backend for a pet health tracking application. It handles user authentication, pet profile management, health record storage, and automated appointment reminders.",
    goal: "Provide a centralized, efficient backend system to help pet owners track vaccinations, appointments, and health events for their animals.",
    process:
      "Designed RESTful routes and modularized services using Express. Integrated Cloudinary for image uploads, configured cron jobs for scheduled reminders, and used JWT for secure user authentication.",
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
      "Cloudinary",
      "Nodemailer",
      "Node-Cron",
    ],
    solution:
      "Implemented a clean, modular backend with endpoints for managing pet data, scheduling reminders, and uploading files. Secured the platform with token-based auth and async error handling.",
    outcome:
      "Delivered a reliable backend that supports seamless pet data operations and improves user retention through automated email reminders. The architecture is easily scalable for future frontend integration.",
    lessons:
      "Gained practical experience in building event-driven systems and handling media uploads securely. Learned the importance of modular architecture and the value of asynchronous task scheduling.",
    liveDemo: "https://pet-health-api-demo.example.com",
    githubLink: "https://github.com/Ojoinioluwa/petApp-backend",
    downloadLink: "",
  },
  //   "pet-care-app": {
  //     title: "Pet Care Mobile App",
  //     images: [
  //       "https://images.unsplash.com/photo-1598137260874-3d6f8b2674f3?auto=format&fit=crop&w=1080&q=80",
  //       "https://images.unsplash.com/photo-1601758174622-ae7b58c2dcf0?auto=format&fit=crop&w=1080&q=80",
  //       "https://images.unsplash.com/photo-1579693052278-98f6acfa4b81?auto=format&fit=crop&w=1080&q=80",
  //       "https://images.unsplash.com/photo-1583511655794-3d3a96a90be3?auto=format&fit=crop&w=1080&q=80",
  //     ],
  //     role: "Front-End Mobile Developer",
  //     description:
  //       "Built a cross-platform mobile application for pet owners to manage pet care routines, track appointments, and store health records. The app prioritizes offline-first UX and responsive mobile design.",
  //     goal: "Empower pet owners to monitor and schedule their pets’ health and care activities seamlessly from their smartphones.",
  //     process:
  //       "Developed using React Native with Expo for rapid prototyping and deployment. Implemented global state with Redux, styled components using Tailwind CSS, and structured the project in a scalable, modular architecture.",
  //     tools: ["React Native", "Expo", "Redux", "Tailwind CSS", "TypeScript"],
  //     solution:
  //       "Delivered a mobile-first experience featuring pet profiles, care reminders, and appointment tracking. Used local storage for offline access and Redux to manage global state consistently.",
  //     outcome:
  //       "Earned a 4.8/5 satisfaction score during closed beta testing. Users highlighted the app’s simplicity, usability, and the value of timely care notifications.",
  //     lessons:
  //       "Refined mobile-first design principles, learned to optimize state handling for performance, and gained experience managing cross-device compatibility issues using Expo.",
  //     liveDemo: "https://petapp-demo.example.com",
  //     githubLink: "https://github.com/yourusername/pet-app-frontend-main",
  //   },
};
