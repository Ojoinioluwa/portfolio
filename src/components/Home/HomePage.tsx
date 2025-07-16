import React, { useEffect, useState, memo } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/animatedBackground.css"; // Ensure this path is correct and the CSS is optimized
import DownloadCVButton from "./download";
import MyImage from "../../assets/ojay877.webp";

interface HomePageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToAbout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  darkMode,
  toggleDarkMode,
  scrollToAbout,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use a single useEffect for the fade-in effect
  useEffect(() => {
    // A slight delay ensures the component is mounted before animation starts
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  // Memoize the button for slight performance gain if props don't change
  const ThemeToggleButton = memo(() => (
    <button
      onClick={toggleDarkMode}
      className="absolute top-6 right-6 p-3 rounded-full bg-white/80 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-20"
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      {darkMode ? (
        <FaSun className="h-6 w-6 animate-spin-once" /> // Added a subtle animation
      ) : (
        <FaMoon className="h-6 w-6 animate-spin-once-reverse" /> // Added a subtle animation
      )}
    </button>
  ));

  // Base classes for animated elements
  const baseAnimationClasses = "transition-all duration-1000 ease-out";
  const getAnimatedClass = (delay: number) =>
    `${baseAnimationClasses} ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    } delay-${delay}`; // delay-${delay} requires custom Tailwind config or explicit delays

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 font-inter overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      // Added a data-theme attribute for potential external CSS or JS targeting
      data-theme={darkMode ? "dark" : "light"}
    >
      {/* Animated Background - Consider if mix-blend-multiply is truly needed */}
      <div className="absolute inset-0 animated-bg opacity-20 z-0" />

      {/* Optional: Overlay blend for better contrast - refine based on animated-bg */}
      {/* This overlay might interfere with the animated background's visibility or performance.
          Evaluate if it's truly necessary or if the animated background CSS can achieve the desired effect alone.
          For now, keeping it but highlighting its potential impact. */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-100 dark:from-gray-900/80 dark:to-black mix-blend-multiply z-0" />

      <ThemeToggleButton />

      {/* Main Hero Section */}
      <section className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20 lg:py-32 max-w-7xl mx-auto w-full px-6">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-2xl flex-shrink-0 space-y-6">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent ${getAnimatedClass(
              100
            )}`}
          >
            Hey, I’m Ojo Inioluwa
          </h1>

          <p
            className={`text-xl md:text-2xl font-semibold tracking-wide text-gray-800 dark:text-gray-200 ${getAnimatedClass(
              200
            )}`}
          >
            Full-Stack Engineer (MERN + Go/Postgres) • Secure Systems Builder
          </p>
          <div className="backdrop-blur-sm bg-white/70 dark:bg-black/20 p-6 rounded-xl">
            <p
              className={`text-base md:text-lg text-left leading-relaxed text-neutral-800 dark:text-neutral-300 ${getAnimatedClass(
                300
              )}`}
            >
              I build secure, production-ready applications—from password
              managers and expense trackers to rental platforms and pet health
              systems. My stack spans React, Node.js, Go, MongoDB, and
              PostgreSQL. I care deeply about clean architecture, robust API
              design, and performance-focused engineering — with an evolving
              interest in cybersecurity.
            </p>
          </div>

          <div className={getAnimatedClass(400)}>
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Scroll to About section"
              >
                See What I’m Building &rarr;
              </button>

              <DownloadCVButton
                darkMode={darkMode}
                cvFilePath="/cv/Ojo-Inioluwa-Oluwasemilogo-resume.pdf"
                buttonText="Download CV"
              />
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500 flex-shrink-0 ${baseAnimationClasses} ${
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          } delay-500`}
        >
          <img
            src={MyImage}
            alt="Ojay's Professional Profile"
            className="w-full h-full object-cover object-center rounded-full"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://via.placeholder.com/400x400/${
                darkMode ? "334155" : "e0e0e0"
              }/${darkMode ? "ffffff" : "000000"}?text=Ojay`;
            }}
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
};

export default HomePage;
