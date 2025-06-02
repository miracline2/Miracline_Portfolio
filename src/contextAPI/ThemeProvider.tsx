import  { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

// This component wraps the app and provides the theme
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "Dark" ? "Light" : "Dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
