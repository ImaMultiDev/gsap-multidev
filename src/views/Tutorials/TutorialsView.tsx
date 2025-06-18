"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Play,
  Eye,
  Home,
  ChevronRight,
  Youtube,
  Filter,
} from "lucide-react";

interface Tutorial {
  id: string;
  title: string;
  channel: string;
  duration: string;
  views: string;
  description: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  category:
    | "Fundamentos"
    | "ScrollTrigger"
    | "React"
    | "Portfolio"
    | "Avanzado";
  youtubeId: string;
  image: string;
  tags: string[];
}

const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Learn GSAP for Webflow",
    channel: "Webflow",
    duration: "1:00:14",
    views: "40K",
    description:
      "Cassie Evans de GSAP nos enseñará los conceptos básicos de cómo utilizar este GSAP en sus compilaciones de Webflow.",
    level: "Principiante",
    category: "Fundamentos",
    youtubeId: "7qRek2GLbB8",
    image: "/tutorials/gsap-for-webflow.png",
    tags: ["inicial", "webflow", "básico"],
  },
  {
    id: "2",
    title: "Introducing ScrollTrigger for GSAP",
    channel: "GSAP Learning",
    duration: "21:42",
    views: "326K",
    description:
      "Aprende ScrollTrigger con ejemplos prácticos y animaciones impresionantes.",
    level: "Principiante",
    category: "ScrollTrigger",
    youtubeId: "X7IBa7vZjmo",
    image: "/tutorials/greensock-scrolltrigger.png",
    tags: ["scrolltrigger", "scroll", "principiante"],
  },
  {
    id: "3",
    title: "WebSite GTA VI (Parte 01)",
    channel: "midudev",
    duration: "1:24:12",
    views: "35K",
    description:
      "Clon del sitio web GTA VI DESDE CERO - HTML, JavaScript & GSAP",
    level: "Principiante",
    category: "Fundamentos",
    youtubeId: "YAgkFlyw_i0&t",
    image: "/webs/gtavi.png",
    tags: ["portfolio", "proyecto", "diseño"],
  },

  {
    id: "4",
    title: "Awwwards Winning Website | React.js, Tailwind CSS, GSAP",
    channel: "JavaScript Mastery",
    duration: "2:39:34",
    views: "1.7M",
    description:
      "Build and Deploy an Awwwards Winning Website | React.js, Tailwind CSS, GSAP",
    level: "Avanzado",
    category: "React",
    youtubeId: "zA9r5zTllx4",
    image: "/tutorials/jsmastery.png",
    tags: ["react", "tailwind", "awwwards-website"],
  },
  {
    id: "5",
    title: "Next.js 15, GSAP, Three.js and Prismic",
    channel: "Prismic",
    duration: "9:31:38",
    views: "70K",
    description:
      "Learn Next.js 15, GSAP, Three.js and Prismic to build a 3D skateboard website.",
    level: "Avanzado",
    category: "React",
    youtubeId: "LBOhVng5rk8&t",
    image: "/tutorials/suburbian.png",
    tags: ["react", "next.js", "cms", "prismic"],
  },
  {
    id: "6",
    title: "Portfolio with SvelteKit, Three.js, GSAP and Prismic",
    channel: "Prismic",
    duration: "7:12:15",
    views: "28K",
    description:
      "Create a Creative Portfolio with SvelteKit, Three.js, GSAP and Prismic! Full Course 2024.",
    level: "Avanzado",
    category: "Avanzado",
    youtubeId: "JQAbenI2YTA&t",
    image: "/tutorials/portfolio-prismic.png",
    tags: ["react", "sveltekit", "portfolio", "prismic"],
  },
];

const categories = [
  "Todos",
  "Fundamentos",
  "ScrollTrigger",
  "React",
  "Portfolio",
  "Avanzado",
];

const levelColors = {
  Principiante: "bg-green-500/20 text-green-400 border-green-500/30",
  Intermedio: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Avanzado: "bg-red-500/20 text-red-400 border-red-500/30",
};

const categoryColors = {
  Fundamentos: "bg-blue-500/20 text-blue-400",
  ScrollTrigger: "bg-purple-500/20 text-purple-400",
  React: "bg-cyan-500/20 text-cyan-400",
  Portfolio: "bg-pink-500/20 text-pink-400",
  Avanzado: "bg-orange-500/20 text-orange-400",
};

export default function TutorialsView() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredTutorials =
    selectedCategory === "Todos"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 text-sm text-gray-400 my-4 md:my-6 px-6">
          <Link
            href="/"
            className="hover:text-primary-400 transition-colors flex items-center space-x-2"
          >
            <Home size={16} />
            <span>Inicio</span>
          </Link>
          <ChevronRight size={16} />
          <span className="text-foreground font-medium">Tutoriales</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16 px-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
              <Youtube size={32} className="text-red-400" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tutoriales de YouTube
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            Los mejores videos para aprender GSAP, seleccionados por calidad y
            popularidad
          </p>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Desde tutoriales básicos hasta técnicas avanzadas, encuentra el
            contenido perfecto para tu nivel y objetivos de aprendizaje.
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="mb-12 px-6">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-300">
              Filtrar por categoría:
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de tutoriales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {filteredTutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="group bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Thumbnail del video */}
              <div className="relative h-48 bg-gradient-to-br from-red-900/20 to-purple-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Image
                      className="absolute rounded-2xl"
                      src={tutorial.image}
                      alt="imagen del tutorial"
                      height={140}
                      width={220}
                    />
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {tutorial.duration}
                  </span>
                </div>

                {/* Level badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      levelColors[tutorial.level]
                    }`}
                  >
                    {tutorial.level}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      categoryColors[tutorial.category]
                    }`}
                  >
                    {tutorial.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                  {tutorial.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {tutorial.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <span>{tutorial.channel}</span>
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{tutorial.views}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <a
                    href={`https://youtube.com/watch?v=${tutorial.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Youtube size={16} />
                    <span>Ver en YouTube</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-2xl font-bold text-red-400 mb-2">
              {tutorials.length}
            </div>
            <div className="text-gray-400">Tutoriales seleccionados</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-2xl font-bold text-green-400 mb-2">1.2M+</div>
            <div className="text-gray-400">Visualizaciones totales</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-2xl font-bold text-blue-400 mb-2">6h 20m</div>
            <div className="text-gray-400">Contenido total</div>
          </div>
        </div>

        {/* Nota */}
        <div className="mt-16 text-center px-6">
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Contenido curado por la comunidad
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Todos los tutoriales han sido seleccionados por su calidad
              educativa y popularidad. Los links te llevarán directamente a
              YouTube donde podrás ver el contenido completo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
