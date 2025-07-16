import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Changed to react-icons/fa

interface NavbarProps {
  darkMode: boolean;
  // Add any specific link handlers or active states if needed
}

const Navbar: React.FC<NavbarProps> = ({ darkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define navigation links
  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about-me-section" }, // Link to your existing About Me section
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  // Tailwind classes for colors based on dark mode
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-800";
  const linkHoverColor = darkMode
    ? "hover:text-blue-400"
    : "hover:text-blue-600";
  const mobileMenuBg = darkMode ? "bg-gray-950" : "bg-gray-50"; // Slightly darker/lighter for contrast
  const mobileLinkHoverBg = darkMode
    ? "hover:bg-gray-800"
    : "hover:bg-gray-100";

  // Framer Motion variants for mobile menu animation
  const menuVariants = {
    hidden: { opacity: 0, x: 300 }, // use number, not "100%"
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const, // narrow string to literal
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 300,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md ${bgColor} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <a href="/" className={`text-2xl font-bold ${textColor}`}>
              Ojay
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-lg font-medium ${textColor} ${linkHoverColor} transition-colors duration-200`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} ${linkHoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" /> // Changed from X to FaTimes
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" /> // Changed from Menu to FaBars
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`md:hidden ${mobileMenuBg} absolute top-0 left-0 w-full h-screen overflow-y-auto pt-16 pb-3 transition-colors duration-300`} // Full height mobile menu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  className={`block px-3 py-3 rounded-md text-base font-medium ${textColor} ${mobileLinkHoverBg} transition-colors duration-200`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
