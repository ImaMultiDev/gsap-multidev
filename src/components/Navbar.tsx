"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  BookOpen,
  Layout,
  BookOpenCheck,
  Trophy,
} from "lucide-react";
import { navigationItems } from "@/data/chapters";
import AnimationLogo from "./AnimationLogo";
import Image from "next/image";

export default function NavbarNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isGSAPlandOpen, setIsGSAPlandOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gsaplandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsChaptersOpen(false);
      }
      if (
        gsaplandRef.current &&
        !gsaplandRef.current.contains(event.target as Node)
      ) {
        setIsGSAPlandOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative top-0 w-full bg-background/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-6">
          <div className="flex items-center gap-14">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold hover:text-primary-400"
            >
              <AnimationLogo />
            </Link>
            <div className="items-center">
              <Image
                src="/logo/logo_192.png"
                alt="GSAPMotion"
                width={82}
                height={82}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
                  pathname === "/"
                    ? "bg-primary-600 text-white shadow-primary-500/20"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                }`}
              >
                <Home size={18} />
                <span className="text-sm font-medium">Inicio</span>
              </Link>

              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
                    navigationItems.some((item) => pathname === item.href)
                      ? "bg-primary-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <BookOpen size={18} />
                  <span className="text-sm font-medium">Capítulos</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isChaptersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isChaptersOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 p-3 bg-gray-900 rounded-lg border border-gray-700 shadow-xl">
                    <div className="max-h-96 overflow-y-auto space-y-2">
                      {navigationItems.map((item, index) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setIsChaptersOpen(false)}
                          className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                            pathname === item.href
                              ? "bg-primary-600/20 border border-primary-500/30"
                              : "hover:bg-gray-800"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {index + 1}. {item.title}
                          </span>
                          {item.difficulty && (
                            <span
                              className={`text-xs px-2 py-1 rounded border ${
                                item.difficulty === "beginner"
                                  ? "text-green-400 border-green-500/30"
                                  : item.difficulty === "intermediate"
                                  ? "text-yellow-400 border-yellow-500/30"
                                  : "text-red-400 border-red-500/30"
                              }`}
                            >
                              {item.difficulty === "beginner"
                                ? "Principiante"
                                : item.difficulty === "intermediate"
                                ? "Intermedio"
                                : "Avanzado"}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div ref={gsaplandRef} className="relative">
                <button
                  onClick={() => setIsGSAPlandOpen(!isGSAPlandOpen)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${
                    ["/cursos", "/tutoriales", "/top-gsap"].includes(pathname)
                      ? "bg-primary-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <Layout size={18} />
                  <span className="text-sm font-medium">GSAPland</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isGSAPlandOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isGSAPlandOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 p-3 bg-gray-900 rounded-lg border border-gray-700 shadow-xl">
                    <div className="space-y-2">
                      <Link
                        href="/cursos"
                        onClick={() => setIsGSAPlandOpen(false)}
                        className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                          pathname === "/cursos"
                            ? "bg-primary-600/20 border border-primary-500/30"
                            : "hover:bg-gray-800"
                        }`}
                      >
                        <BookOpenCheck size={18} />
                        <span className="text-sm font-medium">Cursos GSAP</span>
                      </Link>
                      <Link
                        href="/tutoriales"
                        onClick={() => setIsGSAPlandOpen(false)}
                        className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                          pathname === "/tutoriales"
                            ? "bg-primary-600/20 border border-primary-500/30"
                            : "hover:bg-gray-800"
                        }`}
                      >
                        <BookOpen size={18} />
                        <span className="text-sm font-medium">Tutoriales</span>
                      </Link>
                      <Link
                        href="/top-gsap"
                        onClick={() => setIsGSAPlandOpen(false)}
                        className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                          pathname === "/top-gsap"
                            ? "bg-primary-600/20 border border-primary-500/30"
                            : "hover:bg-gray-800"
                        }`}
                      >
                        <Trophy size={18} />
                        <span className="text-sm font-medium">Top GSAP</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-20 bg-background/95 backdrop-blur-sm border-b border-gray-700">
            <div className="p-4 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  pathname === "/"
                    ? "bg-primary-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <Home size={18} />
                <span className="text-sm font-medium">Inicio</span>
              </Link>

              <div className="space-y-2">
                <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Capítulos
                </h3>
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      pathname === item.href
                        ? "bg-primary-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {index + 1}. {item.title}
                    </span>
                    {item.difficulty && (
                      <span
                        className={`text-xs px-2 py-1 rounded border ${
                          item.difficulty === "beginner"
                            ? "text-green-400 border-green-500/30"
                            : item.difficulty === "intermediate"
                            ? "text-yellow-400 border-yellow-500/30"
                            : "text-red-400 border-red-500/30"
                        }`}
                      >
                        {item.difficulty === "beginner"
                          ? "Principiante"
                          : item.difficulty === "intermediate"
                          ? "Intermedio"
                          : "Avanzado"}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  GSAPland
                </h3>
                <Link
                  href="/cursos"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    pathname === "/cursos"
                      ? "bg-primary-600 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <BookOpenCheck size={18} />
                  <span className="text-sm font-medium">Cursos GSAP</span>
                </Link>
                <Link
                  href="/tutoriales"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    pathname === "/tutoriales"
                      ? "bg-primary-600 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <BookOpen size={18} />
                  <span className="text-sm font-medium">Tutoriales</span>
                </Link>
                <Link
                  href="/top-gsap"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    pathname === "/top-gsap"
                      ? "bg-primary-600 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <Trophy size={18} />
                  <span className="text-sm font-medium">Top GSAP</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
