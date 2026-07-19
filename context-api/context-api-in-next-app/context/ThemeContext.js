// import { createContext, useContext } from "react";

// export const ThemeContext = createContext({
//   themeMode: "light",

//   darkTheme: () => {},
//   lightTheme: () => {},
// });

// export const ThemeProvider = ThemeContext.Provider;

// export default function useTheme() {
//   return useContext(ThemeContext);
// }
"use client";

import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  // "isDark" is true/false
  // localStorage.getItem("isDark") returns "true"
  // "true" === "true"  -> true

  // localStorage.getItem("isDark") returns "false"
  // "false" === "true" -> false
  const [isDark, setIsDark] = useState(true);

  // setIsDark True hai to False, False hai to True
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    setIsDark(localStorage.getItem("isDark") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
