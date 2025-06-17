"use client";

import { ThemeContextType } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Verificar preferencia guardada en localStorage
    const savedTheme = localStorage.getItem("gsap-multidev-theme") as
      | "light"
      | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Verificar preferencia del sistema
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Aplicar el tema al documento
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.removeAttribute("data-theme");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }

    // Guardar preferencia
    localStorage.setItem("gsap-multidev-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
