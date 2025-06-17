import { ArrowRight, BookOpen, Play } from "lucide-react";
import BallsSuspendEffect from "./BallsSuspendEffect";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    // Animación del elemento principal que coincide con el código mostrado
    gsap.to(".main-demo-element", {
      x: 100,
      rotation: 360,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Animaciones decorativas de los elementos secundarios
    gsap.to(".secondary-element", {
      y: -15,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-background to-purple-900/30"></div>

      <BallsSuspendEffect />

      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="block mb-3 text-white">Aprende</span>
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent block mb-3">
                GSAP
              </span>
              <span className="block text-white">Visualmente</span>
            </h1>

            <p className="hero-subtitle text-xl lg:text-2xl text-white leading-relaxed">
              La plataforma definitiva para dominar las animaciones web
            </p>

            <p className="hero-description text-lg text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Desde conceptos básicos hasta técnicas avanzadas, aprende GSAP de
              forma visual y práctica con ejemplos interactivos y explicaciones
              detalladas.
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
          <div className="hero-demo flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 bg-gradient-to-br from-primary-900/20 to-purple-900/20 rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Bordes decorativos */}
              <div className="absolute inset-3 border border-primary-500/20 rounded-xl"></div>
              <div className="absolute inset-6 border border-purple-500/20 rounded-lg"></div>

              {/* Elementos animados */}
              <div className="absolute inset-0 flex my-25 justify-start px-16">
                {/* Elemento principal que demuestra la animación del código */}
                <div className="w-16 h-16  bg-primary-500 bg-green-400 rounded-lg shadow-xl main-demo-element glow-primary transform-gpu"></div>
              </div>

              {/* Código de ejemplo */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                <code className="text-sm text-green-400 font-mono block">
                  gsap.to(&quot;.element&quot;, {"{"}
                </code>
                <code className="text-sm text-blue-400 font-mono block pl-4">
                  x: 100,
                </code>
                <code className="text-sm text-blue-400 font-mono block pl-4">
                  rotation: 360
                </code>
                <code className="text-sm text-green-400 font-mono block">
                  {"}"})
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
