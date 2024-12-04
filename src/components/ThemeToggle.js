import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Themecontext";
const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} Mode
    </button>
  );
};

export default ThemeToggle;
