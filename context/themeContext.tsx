import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;

    setIsDarkMode(newIsDarkMode);

    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
  };

  const value = { isDarkMode, toggleDarkMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};