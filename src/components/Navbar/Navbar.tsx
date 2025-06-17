"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  Zap,
  ChevronDown,
  Home,
  BookOpen,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { navigationItems } from "../../data/chapters";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const difficultyColors = {
    beginner: "text-green-400",
    intermediate: "text-yellow-400",
    advanced: "text-red-400",
  };

  const difficultyBgColors = {
    beginner: "bg-green-500/20 border-green-500/30",
    intermediate: "bg-yellow-500/20 border-yellow-500/30",
    advanced: "bg-red-500/20 border-red-500/30",
  };

  const difficultyLabels = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsChaptersOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative top-0 w-full bg-background/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20 px-6 md:px-8 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary-400 transition-colors"
          >
            <Zap size={28} className="text-primary-500" />
            <span>GSAPMultidev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Home */}{" "}
              <Link
                href="/"
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                  pathname === "/"
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                }`}
              >
                <div className="flex gap-2">
                  <Home size={18} />
                  <span>Inicio</span>
                </div>
              </Link>
              {/* Dropdown Capítulos */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                  className={`flex gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                    navigationItems.some((item) => pathname === item.href)
                      ? "bg-primary-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <div className="flex gap-2">
                    <BookOpen size={16} />
                    <span>Capítulos</span>
                  </div>

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isChaptersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isChaptersOpen && (
                  <div className="absolute top-full left-0 p-4 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden animate-slide-up">
                    <div className="max-h-96 overflow-y-auto">
                      <div className="flex flex-col gap-3">
                        {navigationItems.map((item, index) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => setIsChaptersOpen(false)}
                            className={`flex items-center justify-between rounded-lg transition-all duration-200 hover:bg-gray-800 group ${
                              pathname === item.href
                                ? "bg-primary-600/20 border border-primary-500/30"
                                : ""
                            }`}
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                                  {index + 1}. {item.title}
                                </span>
                              </div>
                              {item.difficulty && (
                                <div className="flex items-center space-x-2">
                                  <span
                                    className={`px-2 py-1 text-xs rounded border ${
                                      difficultyBgColors[item.difficulty]
                                    } ${difficultyColors[item.difficulty]}`}
                                  >
                                    {difficultyLabels[item.difficulty]}
                                  </span>
                                </div>
                              )}
                            </div>
                            <ChevronDown
                              size={16}
                              className="text-gray-400 rotate-[-90deg]"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 hover:scale-105"
              title={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-gray-700 animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {/* Home Mobile */}
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-primary-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Home size={16} />
                <span>Inicio</span>
              </Link>

              {/* Capítulos Mobile */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Capítulos
                </div>
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ml-4 ${
                      pathname === item.href
                        ? "bg-primary-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <div>
                      <span>
                        {index + 1}. {item.title}
                      </span>
                      {item.difficulty && (
                        <div className="mt-1">
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              difficultyBgColors[item.difficulty]
                            } ${difficultyColors[item.difficulty]}`}
                          >
                            {difficultyLabels[item.difficulty]}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
