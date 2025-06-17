"use client";

import React, { useState } from "react";
import { Clock, BookOpen, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { ChapterLayoutProps } from "../types";
import { navigationItems } from "../data/chapters";
import CodeBlock from "./CodeBlock";
import AnimationDemo from "./AnimationDemo";
import Link from "next/link";

export default function ChapterLayout({ chapter }: ChapterLayoutProps) {
  const [resetKey, setResetKey] = useState(0);

  // Encontrar capítulo anterior y siguiente
  const currentIndex = navigationItems.findIndex(
    (item) => item.id === chapter.id
  );
  const prevChapter =
    currentIndex > 0 ? navigationItems[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < navigationItems.length - 1
      ? navigationItems[currentIndex + 1]
      : null;

  const handleResetAnimation = () => {
    setResetKey((prev) => prev + 1);
  };

  const difficultyColors = {
    beginner: "bg-green-500 text-green-100",
    intermediate: "bg-yellow-500 text-yellow-100",
    advanced: "bg-red-500 text-red-100",
  };

  const difficultyLabels = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary-400 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-foreground">{chapter.title}</span>
        </nav>

        {/* Header del capítulo */}
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                difficultyColors[chapter.difficulty]
              }`}
            >
              {difficultyLabels[chapter.difficulty]}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <Clock size={16} className="mr-1" />
              {chapter.duration}
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {chapter.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
            {chapter.subtitle}
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl">
            {chapter.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {chapter.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-2 bg-gray-800 text-gray-300 text-sm rounded border border-gray-700"
              >
                <Tag size={14} className="mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contenido principal en grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
          {/* Sección de teoría */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg border border-gray-700 p-8 animate-slide-up">
              <div className="flex items-center mb-6">
                <BookOpen size={20} className="text-primary-500 mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Teoría
                </h2>
              </div>
              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: chapter.theory }}
              />
            </div>
          </div>

          {/* Sección de demo y código */}
          <div className="space-y-8">
            {/* Demo de animación */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <AnimationDemo
                id={chapter.id}
                animationFunction={chapter.animationFunction}
                resetKey={resetKey}
                height="400px"
              />
            </div>

            {/* Bloque de código */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CodeBlock code={chapter.code} title="Código de la animación" />
            </div>
          </div>
        </div>

        {/* Navegación entre capítulos */}
        <div className="flex justify-between items-center pt-12 border-t border-gray-700">
          <div className="flex-1">
            {prevChapter && (
              <Link
                href={prevChapter.href}
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft size={20} className="mr-2" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Anterior</div>
                  <div className="text-sm font-medium">{prevChapter.title}</div>
                </div>
              </Link>
            )}
          </div>

          <button
            onClick={handleResetAnimation}
            className="mx-6 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 hover:scale-105 font-medium"
          >
            Repetir Demo
          </button>

          <div className="flex-1 flex justify-end">
            {nextChapter && (
              <Link
                href={nextChapter.href}
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:scale-105"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-400">Siguiente</div>
                  <div className="text-sm font-medium">{nextChapter.title}</div>
                </div>
                <ChevronRight size={20} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
