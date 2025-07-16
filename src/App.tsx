import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ProjectDetailPage from "./components/Home/ProjectDetails";
import Navbar from "./components/Home/NavBar";
import { useState, useEffect } from "react";

const THEME_KEY = "theme";
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem(THEME_KEY) === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="mb-12">
        <Navbar darkMode={darkMode} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/:id"
          element={<ProjectDetailPage darkMode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
