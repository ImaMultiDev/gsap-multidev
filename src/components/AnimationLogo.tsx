"use client";
import React, { useRef, useEffect } from "react";
import { Logo } from "@/components/icons";
import gsap from "gsap";

export default function AnimationLogo() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;

    const staggerItems = logoRef.current.querySelectorAll(
      "#square-G, #square-S, #square-A, #square-P, #square-M0, #square-O1, #square-T2, #square-I3, #square-O4, #square-N5"
    );

    if (staggerItems.length > 0) {
      // Animación inicial
      gsap.set(staggerItems, {
        y: 30,
        opacity: 0,
        scale: 0.8,
        rotation: 0,
      });

      const tl = gsap.timeline();

      tl.to(staggerItems, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 1,
          from: "start",
        },
        ease: "back.out(1.7)",
      }).to(
        staggerItems,
        {
          duration: 0.6,
          rotation: 360,
          stagger: {
            amount: 0.5,
            from: "center",
          },
          ease: "power2.inOut",
        },
        "-=0.3"
      );

      // Controlar las animaciones hover por separado
      staggerItems.forEach((item) => {
        let hoverAnim: gsap.core.Tween | null = null;

        item.addEventListener("mouseenter", () => {
          // Si la animación existe y está activa, la matamos para evitar solapamiento
          if (hoverAnim && hoverAnim.isActive()) {
            hoverAnim.kill();
            gsap.set(item, { scale: 1 }); // Reset al estado original
          }

          // Creamos una nueva animación
          hoverAnim = gsap.to(item, {
            scale: 1.2,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          });
        });
      });
    }
  }, []);

  return (
    <div ref={logoRef} className="w-[120px] h-auto cursor-pointer">
      <Logo />
    </div>
  );
}
