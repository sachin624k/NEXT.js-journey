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

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // "isDark" is true/false
  // localStorage.getItem("isDark") returns "true"
  // "true" === "true"  -> true

  // localStorage.getItem("isDark") returns "false"
  // "false" === "true" -> false
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true",
  );

  // setIsDark True hai to False, False hai to True
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

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
