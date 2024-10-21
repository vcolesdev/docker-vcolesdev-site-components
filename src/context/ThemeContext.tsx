import { useStorage } from "@/src/hooks/useStorage";
import { createContext, useEffect, useMemo, useState } from "react";
import * as React from "react";

type Theme = "light" | "dark" | null;

interface ThemeContextApi {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface ThemeProvider {
  children: React.ReactNode | React.ReactNode[] | string;
}

const ThemeContext = createContext({
  theme: null,
  setTheme: (theme: Theme) => {},
} as ThemeContextApi);

function useTheme() {
  const html = document.documentElement;

  const { storage, getStorageData } = useStorage();

  const [theme, setTheme] = useState<Theme | null>(null);

  const currentTheme: ThemeContextApi = useMemo(() => {
    const updateTheme = (newTheme: Theme) => setTheme(newTheme);
    return { theme, setTheme: updateTheme };
  }, [theme, setTheme]);

  function checkUserPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function handleDomClasses(el: Element, theme: Theme) {
    if (theme === "light") {
      el.classList.remove("dark");
      el.classList.add("light");
    } else if (theme === "dark") {
      el.classList.remove("light");
      el.classList.add("dark");
    } else {
      return;
    }
  }

  function setDarkTheme() {
    currentTheme.setTheme("dark");
    storage.setItem("theme", "dark");
    handleDomClasses(html, "dark");
    console.log("Dark theme set!");
  }

  function setLightTheme() {
    currentTheme.setTheme("light");
    storage.setItem("theme", "light");
    handleDomClasses(html, "light");
    console.log("Light theme set!");
  }

  return {
    currentTheme,
  };
}

const ThemeProvider = ({ children }: ThemeProvider) => {
  const { currentTheme } = useTheme();

  useEffect(() => {}, [currentTheme]);

  return <ThemeContext.Provider value={currentTheme}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
export type { ThemeContextApi };
