import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.microlink.io"],
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // <--- desactiva errores de lint en producción
  },
};

export default nextConfig;
