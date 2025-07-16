import React from "react";
import { FaDownload } from "react-icons/fa"; // Import the download icon

interface DownloadCVButtonProps {
  darkMode: boolean;
  cvFilePath: string; // The path to your CV file
  buttonText?: string; // Optional: customize button text
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
  darkMode,
  cvFilePath,
  buttonText = "Download My CV", // Default text
}) => {
  return (
    <a
      href={cvFilePath}
      download // This attribute tells the browser to download the file
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
                 shadow-lg transform hover:scale-105 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-offset-2
                 ${
                   darkMode
                     ? "bg-blue-700 hover:bg-blue-600 text-white focus:ring-blue-500 focus:ring-offset-gray-900"
                     : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 focus:ring-offset-white"
                 }`}
      aria-label="Download Curriculum Vitae"
    >
      <FaDownload className="mr-2 h-5 w-5" />
      {buttonText}
    </a>
  );
};

export default DownloadCVButton;
