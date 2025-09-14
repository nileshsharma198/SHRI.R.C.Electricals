import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // apply theme to <html> and persist
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // listen for storage events (other tabs) and system preference changes
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "theme") {
        setTheme(e.newValue || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
      }
    };
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onPref = (e) => {
      const saved = localStorage.getItem("theme");
      if (!saved) setTheme(e.matches ? "dark" : "light");
    };

    window.addEventListener("storage", onStorage);
    // modern browsers:
    if (mql.addEventListener) mql.addEventListener("change", onPref);
    else mql.addListener(onPref);

    return () => {
      window.removeEventListener("storage", onStorage);
      if (mql.removeEventListener) mql.removeEventListener("change", onPref);
      else mql.removeListener(onPref);
    };
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
