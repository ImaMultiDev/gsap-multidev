"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  BookOpen,
  Code,
  Play,
  Users,
  Star,
} from "lucide-react";
import { chapters, navigationItems } from "../data/chapters";
import gsap from "gsap";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación de entrada
    const tl = gsap.timeline();

    tl.from(".hero-title", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })
      .from(
        ".hero-subtitle",
        {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".hero-description",
        {
          duration: 0.8,
          y: 20,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".hero-buttons",
        {
          duration: 0.8,
          y: 20,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".hero-demo",
        {
          duration: 1,
          scale: 0.8,
          opacity: 0,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

    // Animación de los elementos flotantes
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });
  }, []);

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
      <section ref={heroRef} className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-purple-900/20"></div>

        {/* Elementos flotantes de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 left-10 w-3 h-3 bg-primary-500 rounded-full opacity-50"></div>
          <div className="floating-element absolute top-40 right-20 w-2 h-2 bg-yellow-500 rounded-full opacity-40"></div>
          <div className="floating-element absolute top-60 left-1/3 w-4 h-4 bg-purple-500 rounded-full opacity-30"></div>
          <div className="floating-element absolute bottom-40 right-10 w-3 h-3 bg-green-500 rounded-full opacity-50"></div>
          <div className="floating-element absolute bottom-20 left-20 w-2 h-2 bg-red-500 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="hero-title text-5xl lg:text-7xl font-bold text-foreground">
                <span className="block mb-2">Aprende</span>
                <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent block mb-2">
                  GSAP
                </span>
                <span className="block">Visualmente</span>
              </h1>

              <p className="hero-subtitle text-xl lg:text-2xl text-gray-300 leading-relaxed">
                La plataforma definitiva para dominar las animaciones web
              </p>

              <p className="hero-description text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Desde conceptos básicos hasta técnicas avanzadas, aprende GSAP
                de forma visual y práctica con ejemplos interactivos y
                explicaciones detalladas.
              </p>

              <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <Link
                  href="/instalacion"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                >
                  <Play size={20} className="mr-2" />
                  Comenzar Tutorial
                  <ArrowRight size={20} className="ml-2" />
                </Link>

                <Link
                  href="#capitulos"
                  className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  <BookOpen size={20} className="mr-2" />
                  Ver Capítulos
                </Link>
              </div>
            </div>

            {/* Demo visual */}
            <div className="hero-demo flex justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
                <div className="absolute inset-4 border border-gray-600 rounded-lg opacity-30"></div>
                <div className="absolute inset-8 border border-gray-500 rounded-lg opacity-20"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-lg shadow-lg floating-element"></div>
                  <div className="absolute top-16 right-16 w-8 h-8 bg-yellow-500 rounded-full floating-element"></div>
                  <div className="absolute bottom-16 left-16 w-6 h-6 bg-purple-500 rounded floating-element"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-gray-800/80 backdrop-blur-sm rounded p-2">
                  <code className="text-xs text-green-400 font-mono">
                    gsap.to(".element", {"{x: 100, rotation: 360}"})
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Por qué GSAPMultidev?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
      <section id="capitulos" ref={chaptersRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Capítulos Disponibles
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
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

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary-400 transition-colors">
                  {index + 1}. {chapter.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {chapter.subtitle}
                </p>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {chapter.description}
                </p>

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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
