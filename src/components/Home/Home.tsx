import React, { useRef, useCallback } from "react";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import SkillsPage from "./Skills";
import ProjectsList from "./Projects";
import ServicesPage from "./Service";
import ContactPage from "./Contact";

const Home: React.FC<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ darkMode, setDarkMode }) => {
  const scrollToAbout = useCallback(() => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  return (
    <div className="min-h-screen font-inter transition-colors duration-500 ease-in-out bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <HomePage
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToAbout={scrollToAbout}
      />

      <div ref={aboutMeRef}>
        <AboutMe darkMode={darkMode} />
      </div>

      <SkillsPage darkMode={darkMode} />
      <ProjectsList darkMode={darkMode} />
      <ServicesPage darkMode={darkMode} />
      <ContactPage darkMode={darkMode} />
    </div>
  );
};

export default Home;
