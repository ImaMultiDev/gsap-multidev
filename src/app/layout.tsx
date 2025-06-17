import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GSAPMultidev - Aprende GSAP visualmente",
  description:
    "Plataforma educativa para aprender GSAP (GreenSock Animation Platform) de forma visual y estructurada. Desde conceptos básicos hasta animaciones avanzadas.",
  keywords:
    "GSAP, animaciones, JavaScript, CSS, web development, tutorial, aprender",
  authors: [{ name: "GSAPMultidev Team" }],
  creator: "GSAPMultidev",
  publisher: "GSAPMultidev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gsapmultidev.com"),
  openGraph: {
    title: "GSAPMultidev - Aprende GSAP visualmente",
    description:
      "Plataforma educativa para aprender GSAP de forma visual y estructurada.",
    url: "https://gsapmultidev.com",
    siteName: "GSAPMultidev",
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
    title: "GSAPMultidev - Aprende GSAP visualmente",
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
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
