import React, { useContext } from "react";
import { ThemeContext } from "./contexts/Themecontext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}>
      <nav className="flex justify-between p-4 shadow-md bg-gray-800 text-white">
        <h1 className="text-lg font-bold">Global Theme Switcher</h1>
        <button
          onClick={toggleTheme}
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </nav>

      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-lg w-full p-6 bg-white rounded shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Current Theme: <span className="font-bold">{theme === "dark" ? "Dark" : "Light"}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This is a global theme switcher built using React, Context API, and local storage.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
