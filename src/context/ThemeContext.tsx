"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "charls_theme_preference";

function applyThemeClass(newTheme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (newTheme === "dark") {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Synchronize with stored preference or system preference via a single async frame to avoid cascading render
    const frame = requestAnimationFrame(() => {
      try {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        if (storedTheme === "light" || storedTheme === "dark") {
          setThemeState(storedTheme);
          applyThemeClass(storedTheme);
        } else {
          const systemTheme: Theme = mediaQuery.matches ? "dark" : "light";
          setThemeState(systemTheme);
          applyThemeClass(systemTheme);
        }
      } catch {
        // Fallback gracefully
      } finally {
        setMounted(true);
      }
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        const currentSaved = localStorage.getItem(THEME_STORAGE_KEY);
        if (!currentSaved) {
          const newSystemTheme: Theme = e.matches ? "dark" : "light";
          setThemeState(newSystemTheme);
          applyThemeClass(newSystemTheme);
        }
      } catch {
        // Ignore read errors
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeClass(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Ignore write errors (e.g. private browsing restrictions)
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
