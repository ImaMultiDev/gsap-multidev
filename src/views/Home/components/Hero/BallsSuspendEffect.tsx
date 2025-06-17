import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BallsSuspendEffect() {
  const effectRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!effectRef.current) return;

    // Crear una timeline para cada elemento flotante
    const elements = effectRef.current.querySelectorAll(".floating-ball");

    elements.forEach((element, index) => {
      gsap.to(element, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-10, 10),
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(2, 3),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
      });
    });

    // Cleanup
    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);

  return (
    <div
      ref={effectRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Elementos flotantes principales */}
      <div className="floating-ball absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-primary-500/30 backdrop-blur-sm border border-primary-500/20 shadow-lg shadow-primary-500/20"></div>
      <div className="floating-ball absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-purple-500/30 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/20"></div>
      <div className="floating-ball absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-500/20 shadow-lg shadow-blue-500/20"></div>

      {/* Elementos flotantes más pequeños */}
      <div className="floating-ball absolute top-1/2 right-1/3 w-8 h-8 rounded-full bg-primary-400/20 backdrop-blur-sm border border-primary-400/10"></div>
      <div className="floating-ball absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400/20 backdrop-blur-sm border border-purple-400/10"></div>
      <div className="floating-ball absolute top-1/3 left-1/2 w-10 h-10 rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/10"></div>

      {/* Elementos decorativos adicionales con brillo */}
      <div className="absolute top-1/4 right-1/2 w-32 h-32 bg-gradient-to-r from-primary-500/10 to-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"></div>
    </div>
  );
}
