import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import NavbarNew from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GSAPMotion - Aprende GSAP visualmente",
  description:
    "Plataforma educativa para aprender GSAP (GreenSock Animation Platform) de forma visual y estructurada. Desde conceptos básicos hasta animaciones avanzadas.",
  keywords:
    "GSAP, animaciones, JavaScript, CSS, web development, tutorial, aprender",
  authors: [{ name: "ImaMultidev" }],
  creator: "ImaMultidev",
  publisher: "ImaMultidev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gsapmultidev.com"),
  openGraph: {
    title: "GSAPMotion - Aprende GSAP visualmente",
    description:
      "Plataforma educativa para aprender GSAP de forma visual y estructurada.",
    url: "https://gsapmultidev.com",
    siteName: "GSAPMotion",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSAPMotion - Aprende GSAP visualmente",
    description:
      "Plataforma educativa para aprender GSAP de forma visual y estructurada.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        {/* Favicon estándar */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Iconos para PWA y dispositivos */}
        <link rel="icon" type="image/png" sizes="64x64" href="/logo_64.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/logo_128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/logo_192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/logo_512.png"
        />

        {/* Icono para Apple */}
        <link rel="apple-touch-icon" href="/logo_192.png" />

        {/* Manifest para PWA (opcional si quieres hacer la app instalable) */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body
        className={`${inter.className} dark antialiased min-h-screen flex flex-col bg-gray-950 text-gray-50`}
      >
        <NavbarNew />
        <main className="flex-grow px-4 md:px-6 lg:px-8 min-h-[calc(100vh-5rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
