"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  id?: string;
  className?: string;
}

export default function ThemeToggle({ id = "theme-toggle-btn", className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    // Prevent hydration mismatch by rendering a static placeholder with identical dimensions
    return (
      <div
        id={id}
        className={`w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/40 dark:border-slate-700/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      id={id}
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer overflow-hidden ${
        isDark
          ? "bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 text-amber-300 hover:text-amber-200 hover:border-amber-400/40 shadow-sm shadow-amber-400/5"
          : "bg-slate-100 hover:bg-slate-200/90 border border-slate-300/80 text-slate-700 hover:text-blue-600 hover:border-blue-400/40 shadow-sm shadow-slate-200"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon (Visible in Dark Mode) */}
        <Sun
          className={`w-5 h-5 transition-all duration-300 absolute inset-0 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />

        {/* Moon Icon (Visible in Light Mode) */}
        <Moon
          className={`w-5 h-5 transition-all duration-300 absolute inset-0 ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-blue-600"
          }`}
        />
      </div>
    </button>
  );
}
