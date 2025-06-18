"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Star,
  Zap,
  Home,
  ChevronRight,
  Trophy,
  Eye,
  Filter,
  Globe,
} from "lucide-react";
import Image from "next/image";

interface Website {
  id: string;
  title: string;
  company: string;
  url: string;
  description: string;
  category:
    | "Gaming"
    | "Portfolio"
    | "E-commerce"
    | "Corporate"
    | "Creative"
    | "Community"
    | "Tech";
  features: string[];
  rating: number;
  year: string;
  image: string;
  tags: string[];
  awards?: string[];
}

const websites: Website[] = [
  {
    id: "1",
    title: "GreenSock Animation Platform",
    company: "GSAP",
    url: "https://gsap.com/",
    description:
      "GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the fun stuff.",
    category: "Community",
    features: ["CREATOR", "MAIN Community", "Educational Content"],
    rating: 5,
    year: "2024",
    image: "/cursos/gsap-desde-cero.webp",
    tags: ["gsap", "educate", "community"],
  },
  {
    id: "2",
    title: "Osmo",
    company: "Osmo SUPPLY B.V.",
    url: "https://www.osmo.supply/",
    description: "The creative toolkit behind award-winning websites!",
    category: "Community",
    features: ["TOP", "Creative Toolkit", "Educational Content"],
    rating: 4.8,
    year: "2025",
    image: "/cursos/osmo.jpg",
    tags: ["educate", "build", "creative", "community"],
    awards: ["Developer Award", "Site of the Day"],
  },
  {
    id: "3",
    title: "Apple AirPods Pro",
    company: "Apple Inc.",
    url: "https://apple.com/airpods-pro",
    description:
      "Experiencia inmersiva de producto con animaciones 3D y interacciones sofisticadas.",
    category: "Tech",
    features: ["Animaciones 3D", "Product showcase", "Micro-interactions"],
    rating: 4.5,
    year: "2024",
    image: "/webs/airpodsweb.png",
    tags: ["product", "3d", "tech"],
    awards: ["FWA SOTD"],
  },
  {
    id: "4",
    title: "Grand Theft Auto VI",
    company: "Rockstar Games",
    url: "https://www.rockstargames.com/VI",
    description:
      "Sitio web oficial de GTA VI con animaciones cinematográficas impresionantes y transiciones suaves.",
    category: "Gaming",
    features: ["Parallax avanzado", "Video integrado", "ScrollTrigger"],
    rating: 4.4,
    year: "2025",
    image: "/webs/gtavi.png",
    tags: ["gaming", "cinematic", "video"],
    awards: ["Awwwards SOTD", "CSS Design Awards"],
  },
  {
    id: "5",
    title: "Bruno Simon Portfolio",
    company: "Bruno Simon",
    url: "https://bruno-simon.com",
    description:
      "Portfolio 3D interactivo que redefinió los estándares de creatividad web.",
    category: "Portfolio",
    features: ["3D environment", "Game-like interaction", "WebGL"],
    rating: 4.9,
    year: "2023",
    image: "/webs/bruno-simon.png",
    tags: ["3d", "webgl", "interactive"],
    awards: ["Awwwards SOTY", "Developer Award"],
  },
  {
    id: "6",
    title: "Lusion Studio",
    company: "Lusion",
    url: "https://lusion.co",
    description:
      "Agencia creativa con efectos visuales únicos y navegación innovadora.",
    category: "Creative",
    features: ["Creative effects", "Custom cursors", "Innovative navigation"],
    rating: 4.9,
    year: "2023",
    image: "/webs/lusion-studio.png",
    tags: ["agency", "creative", "innovative"],
    awards: ["Awwwards SOTD", "FWA"],
  },
  {
    id: "7",
    title: "Tesla Model S",
    company: "Tesla",
    url: "https://tesla.com/models",
    description:
      "Showcase del vehículo con animaciones fluidas y configurador interactivo.",
    category: "Corporate",
    features: ["Vehicle configurator", "Performance metrics", "360° views"],
    rating: 4.6,
    year: "2024",
    image: "/webs/tesla-model-s.png",
    tags: ["automotive", "configurator", "premium"],
  },

  {
    id: "8",
    title: "Shopify Plus",
    company: "Shopify",
    url: "https://shopify.com/plus",
    description:
      "Página de producto empresarial con animaciones que destacan características clave.",
    category: "E-commerce",
    features: ["Feature highlights", "Case studies", "Interactive stats"],
    rating: 4.5,
    year: "2024",
    image: "/webs/shopify.png",
    tags: ["ecommerce", "enterprise", "saas"],
  },
];

const categories = [
  "Todos",
  "Gaming",
  "Portfolio",
  "E-commerce",
  "Corporate",
  "Creative",
  "Tech",
  "Community",
];

const categoryColors = {
  Gaming: "bg-red-500/20 text-red-400",
  Portfolio: "bg-purple-500/20 text-purple-400",
  "E-commerce": "bg-green-500/20 text-green-400",
  Corporate: "bg-blue-500/20 text-blue-400",
  Creative: "bg-pink-500/20 text-pink-400",
  Community: "bg-yellow-500/20 text-yellow-400",
  Tech: "bg-cyan-500/20 text-cyan-400",
};

export default function TopGSAPView() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredWebsites =
    selectedCategory === "Todos"
      ? websites
      : websites.filter((website) => website.category === selectedCategory);

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
          <span className="text-foreground font-medium">TopGSAP</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16 px-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <Trophy size={32} className="text-yellow-400" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Top Sitios Web GSAP
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            Acceso a las comunidades, plataformas fundamentales, y sitios web
            premiados que utilizan GSAP para crear experiencias extraordinarias
          </p>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Explora la creatividad sin límites, adentrate en el maravilloso
            universo de GreenSock Animation Platform
          </p>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 px-6">
          <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <div className="text-xl font-bold text-yellow-400 mb-1">
              {websites.length}
            </div>
            <div className="text-xs text-gray-400">Sitios Destacados</div>
          </div>
          <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <div className="text-xl font-bold text-green-400 mb-1">12</div>
            <div className="text-xs text-gray-400">Awwwards SOTD</div>
          </div>
          <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <div className="text-xl font-bold text-blue-400 mb-1">6</div>
            <div className="text-xs text-gray-400">Categorías</div>
          </div>
          <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <div className="text-xl font-bold text-purple-400 mb-1">2025</div>
            <div className="text-xs text-gray-400">Actualizado</div>
          </div>
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

        {/* Grid de sitios web */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {filteredWebsites.map((website) => (
            <div
              key={website.id}
              className="group bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Screenshot del sitio */}
              <div className="relative h-48 bg-gradient-to-br from-yellow-900/20 to-purple-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
                  <Globe size={48} className="text-yellow-400 opacity-80" />
                  <Image
                    className="absolute rounded-2xl shadow-2xl"
                    src={website.image}
                    alt="website image"
                    width={220}
                    height={140}
                  />
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 px-2 py-1 bg-black/80 rounded">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span className="text-white text-xs">{website.rating}</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      categoryColors[website.category]
                    }`}
                  >
                    {website.category}
                  </span>
                </div>

                {/* Awards badges */}
                {website.awards && website.awards.length > 0 && (
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      <Trophy size={12} className="text-yellow-400" />

                      <span className="text-xs text-yellow-400">
                        {website.awards.length} award
                        {website.awards.length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow-400 transition-colors flex-1">
                    {website.title}
                  </h3>
                  <span className="text-xs text-gray-400 ml-2">
                    {website.year}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-1">{website.company}</p>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {website.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">
                    Características destacadas:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {website.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {website.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                {website.awards && website.awards.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">
                      Reconocimientos:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {website.awards.map((award, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded border border-yellow-500/30"
                        >
                          🏆 {award}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-700">
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-black rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Eye size={16} />
                    <span>Visitar sitio</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de inspiración */}
        <div className="mt-16 px-6">
          <div className="bg-gradient-to-r from-yellow-900/20 to-purple-900/20 rounded-xl border border-yellow-500/30 p-8">
            <div className="text-center">
              <Zap size={32} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Te inspiras a crear algo increíble?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Estos sitios web demuestran el poder de GSAP para crear
                experiencias únicas. Usa nuestra plataforma para aprender las
                técnicas detrás de estas obras maestras.
              </p>
              <Link
                href="/instalacion"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <span>Comenzar a aprender</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Nota */}
        <div className="mt-12 text-center px-6">
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Criterios de selección
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Los sitios web han sido seleccionados por su innovación en
              animaciones, uso creativo de GSAP, reconocimientos de la industria
              y impacto en la comunidad de desarrollo web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
