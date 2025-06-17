"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Zap, BookOpen, Code, Users, Star } from "lucide-react";
import Hero from "@/views/Home/components/Hero/Hero";
import { chapters } from "@/data/chapters";

export default function HomeView() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<HTMLDivElement>(null);

  const difficultyColors = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  const difficultyLabels = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section ref={featuresRef} className="bg-gray-900/50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Por qué GSAPMultidev?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Una experiencia de aprendizaje diseñada para desarrolladores que
              quieren dominar las animaciones web profesionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Code size={32} className="text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Código Real
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ve el código exacto que produce cada animación, con sintaxis
                resaltada y explicaciones detalladas.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Demos Interactivos
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Cada concepto viene con una demostración visual que puedes
                reproducir las veces que quieras.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={32} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Teoría Clara
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Explicaciones teóricas organizadas y fáciles de entender, desde
                principiante hasta avanzado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="capitulos" ref={chaptersRef} className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Capítulos Disponibles
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Progresa a tu ritmo a través de nuestro currículum estructurado,
              diseñado para llevarte de principiante a experto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.id}
                href={`/${chapter.id}`}
                className="group block p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
              >
                {chapter.difficulty && (
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        difficultyColors[chapter.difficulty]
                      }`}
                    >
                      {difficultyLabels[chapter.difficulty]}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {chapter.duration}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary-400 transition-colors">
                  {index + 1}. {chapter.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {chapter.subtitle}
                </p>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {chapter.description}
                </p>

                {chapter.tags && (
                  <div className="flex flex-wrap gap-2">
                    {chapter.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {chapter.tags.length > 3 && (
                      <span className="px-3 py-1 text-gray-500 text-xs">
                        +{chapter.tags.length - 3} más
                      </span>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-2">
                <BookOpen size={24} className="text-primary-400 mr-2" />
                <span className="text-3xl font-bold text-foreground">
                  {chapters.length}
                </span>
              </div>
              <p className="text-gray-400">Capítulos Disponibles</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center mb-2">
                <Users size={24} className="text-green-400 mr-2" />
                <span className="text-3xl font-bold text-foreground">
                  1000+
                </span>
              </div>
              <p className="text-gray-400">Desarrolladores Aprendiendo</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center mb-2">
                <Star size={24} className="text-yellow-400 mr-2" />
                <span className="text-3xl font-bold text-foreground">4.9</span>
              </div>
              <p className="text-gray-400">Calificación Promedio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
