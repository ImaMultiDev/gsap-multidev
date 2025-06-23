"use client";

import React from "react";
import { Heart, Zap, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto my-8 px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap size={24} className="text-primary-500" />
              <span className="text-xl font-bold text-white">GSAPMotion</span>
            </div>
            <p className="text-gray-400 text-sm">
              Plataforma educativa para aprender GSAP de forma visual y
              estructurada. Desde conceptos básicos hasta animaciones avanzadas.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col y-4">
            <h3 className="text-white font-semibold">Enlaces útiles</h3>
            <ul className="flex gap-2 flex-col text-sm text-blue-300">
              <li>
                <a
                  href="https://gsap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Documentación oficial GSAP
                </a>
              </li>
              <li>
                <a
                  href="https://gsap.com/docs/v3/GSAP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/GreenSock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Ejemplos en CodePen
                </a>
              </li>
              <li>
                <a
                  href="https://gsap.com/community/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Comunidad GSAP
                </a>
              </li>
            </ul>
          </div>

          {/* Información del proyecto */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold">Acerca del proyecto</h3>
            <p className="text-gray-400 text-sm">
              Este proyecto utiliza las últimas tecnologías web para ofrecer la
              mejor experiencia de aprendizaje.
            </p>

            <div className="flex gap-2">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                title="Twitter"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>&copy; {currentYear} GSAPMotion. Hecho con</span>
              <Heart size={16} className="text-red-500 mx-1" />
              <span>para la comunidad DEV.</span>
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Next.js 15</span>
              <span>•</span>
              <span>Tailwind CSS 4</span>
              <span>•</span>
              <span>GSAP</span>
              <span>•</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
