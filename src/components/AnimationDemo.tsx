"use client";

import React, { useEffect, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { AnimationDemoProps } from "../types";

export default function AnimationDemo({
  id,
  animationFunction,
  resetKey = 0,
  height = "300px",
  className = "",
}: AnimationDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAnimation = React.useCallback(() => {
    setIsPlaying(true);
    animationFunction();

    // Reset el estado después de un tiempo
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  }, [animationFunction]);

  // Auto-ejecutar animación cuando se monta el componente
  useEffect(() => {
    const timer = setTimeout(() => {
      handlePlayAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, [resetKey, handlePlayAnimation]);

  return (
    <div
      className={`w-full bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Demo en vivo</span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handlePlayAnimation}
            disabled={isPlaying}
            className={`flex items-center space-x-2 px-3 py-1 text-xs rounded transition-all duration-200 ${
              isPlaying
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-primary-600 hover:bg-primary-700 text-white hover:scale-105"
            }`}
            title="Reproducir animación"
          >
            {isPlaying ? (
              <RotateCcw size={14} className="animate-spin" />
            ) : (
              <Play size={14} />
            )}
            <span>{isPlaying ? "Reproduciendo..." : "Reproducir"}</span>
          </button>
        </div>
      </div>

      {/* Área de animación */}
      <div
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden"
        style={{ height }}
      >
        {/* Grid de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Contenido de la animación */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {/* Los elementos se renderizan aquí según el capítulo */}
          {renderAnimationElements(id)}
        </div>
      </div>
    </div>
  );
}

// Función auxiliar para renderizar elementos según el capítulo
function renderAnimationElements(chapterId: string) {
  switch (chapterId) {
    case "instalacion":
      return (
        <div className="flex space-x-4">
          <div className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg installation-demo"></div>
          <div className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg installation-demo"></div>
          <div className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg installation-demo"></div>
        </div>
      );

    case "capitulo-1":
      return (
        <div
          id="box1"
          className="w-16 h-16 bg-primary-500 rounded-lg gsap-element shadow-lg"
        ></div>
      );

    case "capitulo-2":
      return (
        <div
          id="box2"
          className="w-16 h-16 bg-primary-500 rounded-lg gsap-element shadow-lg"
        ></div>
      );

    case "capitulo-3":
      return (
        <div className="flex flex-col space-y-4">
          <div
            id="box3a"
            className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg box3"
          ></div>
          <div
            id="box3b"
            className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg box3"
          ></div>
          <div
            id="box3c"
            className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg box3"
          ></div>
        </div>
      );

    case "capitulo-4":
      return (
        <div className="flex flex-col space-y-3">
          <div className="text-xs text-gray-400 text-center">power2.out</div>
          <div
            id="ease1"
            className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg easing-box"
          ></div>
          <div className="text-xs text-gray-400 text-center">back.out</div>
          <div
            id="ease2"
            className="w-12 h-12 bg-green-500 rounded-lg gsap-element shadow-lg easing-box"
          ></div>
          <div className="text-xs text-gray-400 text-center">bounce.out</div>
          <div
            id="ease3"
            className="w-12 h-12 bg-yellow-500 rounded-lg gsap-element shadow-lg easing-box"
          ></div>
          <div className="text-xs text-gray-400 text-center">elastic.out</div>
          <div
            id="ease4"
            className="w-12 h-12 bg-red-500 rounded-lg gsap-element shadow-lg easing-box"
          ></div>
        </div>
      );

    case "capitulo-5":
      return (
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-2">from()</div>
            <div
              id="method1"
              className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg method-box"
            ></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-2">to()</div>
            <div
              id="method2"
              className="w-12 h-12 bg-green-500 rounded-lg gsap-element shadow-lg method-box"
            ></div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-2">fromTo()</div>
            <div
              id="method3"
              className="w-12 h-12 bg-purple-500 rounded-lg gsap-element shadow-lg method-box"
            ></div>
          </div>
        </div>
      );

    case "capitulo-6":
      return (
        <div className="text-center space-y-4">
          <div id="text1" className="text-2xl font-bold text-primary-400">
            ¡GSAP es genial!
          </div>
          <div id="text2" className="text-lg text-green-400">
            Texto animado
          </div>
        </div>
      );

    case "capitulo-7":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center space-y-4">
          <div className="text-xs text-gray-400 text-center">
            ScrollTrigger (simulado)
          </div>
          <div
            id="scroll-box"
            className="w-16 h-16 bg-primary-500 rounded-lg gsap-element shadow-lg"
          ></div>
          <div className="text-xs text-gray-300 opacity-60">
            El elemento se anima automáticamente
          </div>
        </div>
      );

    case "capitulo-8":
      return (
        <div className="flex justify-center space-x-4">
          <div
            id="adv1"
            className="w-12 h-12 bg-primary-500 rounded-lg gsap-element shadow-lg advanced-box"
          ></div>
          <div
            id="adv2"
            className="w-12 h-12 bg-green-500 rounded-lg gsap-element shadow-lg advanced-box"
          ></div>
          <div
            id="adv3"
            className="w-12 h-12 bg-purple-500 rounded-lg gsap-element shadow-lg advanced-box"
          ></div>
        </div>
      );

    case "capitulo-9":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center space-y-4">
          <div className="text-xs text-gray-400 text-center">
            ScrollTrigger Avanzado
          </div>
          <div id="scroll-advanced" className="flex justify-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded gsap-element shadow-lg batch-item"></div>
            <div className="w-10 h-10 bg-green-500 rounded gsap-element shadow-lg batch-item"></div>
            <div className="w-10 h-10 bg-yellow-500 rounded gsap-element shadow-lg batch-item"></div>
            <div className="w-10 h-10 bg-red-500 rounded gsap-element shadow-lg batch-item"></div>
          </div>
          <div className="text-xs text-gray-300 opacity-60">
            Batch + Parallax + Stagger
          </div>
        </div>
      );

    case "capitulo-10":
      return (
        <div className="container-3d relative w-full h-full flex items-center justify-center">
          <div className="text-xs text-gray-400 text-center mb-4">
            Efectos 3D
          </div>
          <div id="cube-3d" className="relative">
            <div className="w-16 h-16 bg-primary-500 rounded-lg gsap-element shadow-lg"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-green-500/50 rounded-lg gsap-element shadow-lg layer-3d"></div>
            <div className="w-8 h-8 bg-purple-500/50 rounded-lg gsap-element shadow-lg layer-3d ml-2"></div>
          </div>
        </div>
      );

    case "capitulo-11":
      return (
        <div className="grid grid-cols-3 gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded gsap-element shadow-lg stagger-demo"></div>
          <div className="w-8 h-8 bg-green-500 rounded gsap-element shadow-lg stagger-demo"></div>
          <div className="w-8 h-8 bg-yellow-500 rounded gsap-element shadow-lg stagger-demo"></div>
          <div className="w-8 h-8 bg-red-500 rounded gsap-element shadow-lg stagger-demo"></div>
          <div className="w-8 h-8 bg-purple-500 rounded gsap-element shadow-lg stagger-demo"></div>
          <div className="w-8 h-8 bg-pink-500 rounded gsap-element shadow-lg stagger-demo"></div>
        </div>
      );

    case "capitulo-12":
      return (
        <div className="flex justify-center space-x-2">
          <div className="text-xs text-gray-400 text-center mb-2">
            Performance
          </div>
          <div className="flex space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded gsap-element shadow-lg perf-demo"></div>
            <div className="w-10 h-10 bg-green-500 rounded gsap-element shadow-lg perf-demo"></div>
            <div className="w-10 h-10 bg-yellow-500 rounded gsap-element shadow-lg perf-demo"></div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-16 h-16 bg-primary-500 rounded-lg gsap-element shadow-lg"></div>
      );
  }
}
