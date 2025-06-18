"use client";

import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Star,
  Clock,
  Users,
  Home,
  ChevronRight,
  Play,
  BookOpen,
  Award,
} from "lucide-react";
import Image from "next/image";

interface Course {
  id: string;
  title: string;
  instructor: string;
  platform: string;
  rating: number;
  students: string;
  duration: string;
  level: "Principiante" | "Intermedio" | "Complete";
  price: string;
  description: string;
  url: string;
  image: string;
  highlights: string[];
}

const courses: Course[] = [
  {
    id: "1",
    title: "GSAP Course Bundle",
    instructor: "Jack Doyle",
    platform: "creativecodingclub",
    rating: 4.9,
    students: "+20,000",
    duration: "+40h / +250 leassons",
    level: "Complete",
    price: "$24.50",
    description:
      "The mission of Creative Coding Club is to help front end developers discover the joy of animating with code.",
    url: "https://www.creativecodingclub.com/bundles/creative-coding-club/",
    image: "/cursos/creative-coding.jpg",
    highlights: ["Complete", "GreenSock", "+40h", "Highly recommended!"],
  },
  {
    id: "2",
    title: "Free GSAP 3 Express",
    instructor: "Jack Doyle",
    platform: "creativecodingclub",
    rating: 4.7,
    students: "+10,000",
    duration: "34 leassons",
    level: "Principiante",
    price: "Free",
    description:
      "Go step-by-step through the best parts of the GSAP API while buiding small projects with detailed videos, written instructions, and loads of demos.",
    url: "https://www.creativecodingclub.com/courses/FreeGSAP3Express/",
    image: "/cursos/gsap-express-creativecodingclub.jpg",
    highlights: ["FREE", "GreenSock", "Initial", "Highly recommended!"],
  },

  {
    id: "3",
    title: "Master Web Animations",
    instructor: "Victor Work",
    platform: "vwlab.io",
    rating: 4.7,
    students: "+10,000",
    duration: "4h 30m",
    level: "Complete",
    price: "€73.95",
    description:
      "Whether you're a beginner or an experienced developer, the course will guide you through, principles of motion, timeline animation, tools, and techniques used by award-winning developers.",
    url: "https://vwlab.io/products/web-animations",
    image: "/cursos/master-web-animations.png",
    highlights: ["Master", "Web Development", "Highly recommended!"],
  },
  {
    id: "4",
    title: "GSAP desde Cero (GRATUITO, en castellano)",
    instructor: "Miguel Ángel Durán Garcia",
    platform: "midu.dev",
    rating: 4.5,
    students: "MiduCommunity",
    duration: "1h 26m",
    level: "Principiante",
    price: "Free",
    description:
      "Aprende a usar GSAP para crear animaciones increíbles en tu página. En este curso veremos ejemplos reales basándonos en Linear y Apple, y podrás entender las bases para no solo replicarlas, sino mejorarlas.",
    url: "https://midu.dev/curso/gsap-desde-cero/",
    image: "/cursos/gsap-desde-cero.webp",
    highlights: ["Español", "FREE", "2025"],
  },
  {
    id: "5",
    title: "Learn Web Animation the Easy Way: An Intro to SVG and GSAP",
    instructor: "Siggy Works",
    platform: "Udemy",
    rating: 4.3,
    students: "3,291",
    duration: "3h 10m",
    level: "Intermedio",
    price: "€44.99",
    description:
      "Create an animated eCard with just JavaScript and SVG in record time.",
    url: "https://www.udemy.com/course/learn-web-animation-with-svg-and-gsap/",
    image: "/cursos/learn-web-animation-with-svg-and-gsap.jpg",
    highlights: ["Animation", "SVG", "Web Development"],
  },
  {
    id: "6",
    title: "Creative Coding with GSAP",
    instructor: "Various Instructors",
    platform: "Pluralsight",
    rating: 4.5,
    students: "9,876",
    duration: "15 hours",
    level: "Intermedio",
    price: "$29/month",
    description:
      "Explora el lado creativo de GSAP con animaciones artísticas y efectos visuales impresionantes.",
    url: "https://www.pluralsight.com/courses/svg-animation-javascript",
    image: "/cursos/pluralsight.png",
    highlights: ["Creative effects", "SVG animations", "Canvas integration"],
  },
];

const platforms = {
  Udemy: { color: "bg-purple-500/30", icon: "📘" },
  "LinkedIn Learning": { color: "bg-blue-600", icon: "💼" },
  "Frontend Masters": { color: "bg-red-500/30", icon: "🎯" },
  Pluralsight: { color: "bg-orange-500/30", icon: "📚" },
  "midu.dev": { color: "bg-blue-700/30", icon: "Ⓜ️" },
  creativecodingclub: { color: "bg-yellow-600/30", icon: "🥇" },
  "vwlab.io": { color: "bg-green-500/30 text-green-400", icon: "🏅" },
};

const levelColors = {
  Principiante: "bg-green-500/20 text-green-400 border-green-500/30",
  Intermedio: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Complete: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function CoursesView() {
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
          <span className="text-foreground font-medium">Cursos</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16 px-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
              <BookOpen size={32} className="text-primary-400" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cursos de GSAP
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            Selección de los mejores cursos para dominar GSAP desde cero hasta
            nivel experto
          </p>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Hemos recopilado los cursos más valorados y completos de las
            principales plataformas educativas. Desde principiantes hasta
            desarrolladores avanzados.
          </p>
        </div>

        {/* Filtros rápidos */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 px-6">
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Award size={16} className="text-yellow-400" />
            <span className="text-sm text-gray-300">Mejor valorados</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Users size={16} className="text-green-400" />
            <span className="text-sm text-gray-300">Más populares</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Clock size={16} className="text-blue-400" />
            <span className="text-sm text-gray-300">Actualizados 2024</span>
          </div>
        </div>

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Imagen del curso */}
              <div className="relative h-48 bg-gradient-to-br from-primary-900/20 to-purple-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
                  <Image
                    className="absolute rounded-2xl"
                    src={course.image}
                    alt="imagen del curso"
                    height={140}
                    width={220}
                  />
                  <Play size={48} className="text-primary-400 opacity-80" />
                </div>

                {/* Platform badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      platforms[course.platform as keyof typeof platforms]
                        ?.color
                    }`}
                  >
                    {platforms[course.platform as keyof typeof platforms]?.icon}{" "}
                    {course.platform}
                  </span>
                </div>

                {/* Level badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      levelColors[course.level]
                    }`}
                  >
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-400 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">
                    Por {course.instructor}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-gray-700">
                  <span className="text-lg font-semibold text-primary-400">
                    {course.price}
                  </span>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    <span>Ver curso</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota sobre enlaces */}
        <div className="mt-16 text-center px-6">
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Nota sobre los enlaces
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Los enlaces proporcionados son referenciales. Te recomendamos
              verificar precios actuales y ofertas en las plataformas oficiales.
              Algunos cursos pueden requerir suscripción mensual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
