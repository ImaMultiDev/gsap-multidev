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

    default:
      return (
        <div className="w-16 h-16 bg-primary-500 rounded-lg gsap-element shadow-lg"></div>
      );
  }
}
