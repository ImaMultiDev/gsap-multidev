export const installationChapter = {
  id: "instalacion",
  title: "Instalación de GSAP",
  subtitle: "Configurando GSAP en tu proyecto",
  description:
    "Aprende todas las formas de instalar y configurar GSAP en diferentes entornos y frameworks.",
  difficulty: "beginner" as const,
  duration: "5 min",
  tags: ["instalación", "configuración", "npm", "cdn"],
  theory: `
    <h3>¿Cómo instalar GSAP?</h3>
    <p>GSAP se puede instalar de varias maneras dependiendo de tu setup de proyecto. Aquí te mostramos todas las opciones disponibles.</p>
    
    <h3>1. Instalación vía NPM (Recomendado)</h3>
    <p>Esta es la forma más común y recomendada para proyectos modernos:</p>
    <pre><code>npm install gsap</code></pre>
    <p>Luego importas GSAP en tu archivo JavaScript/TypeScript:</p>
    <pre><code>import gsap from "gsap";</code></pre>

    <h3>2. Instalación vía CDN</h3>
    <p>Para proyectos simples o prototipado rápido, puedes usar el CDN:</p>
    <pre><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"&gt;&lt;/script&gt;</code></pre>

    <h3>3. Descarga Manual</h3>
    <p>Puedes descargar los archivos desde <a href="https://gsap.com" target="_blank" class="text-primary-400 hover:text-primary-300">gsap.com</a> e incluirlos en tu proyecto:</p>
    <pre><code>&lt;script src="./js/gsap.min.js"&gt;&lt;/script&gt;</code></pre>

    <h3>Frameworks Compatibles</h3>
    <ul>
      <li><strong>React/Next.js:</strong> ✅ Completamente compatible</li>
      <li><strong>Vue.js:</strong> ✅ Completamente compatible</li>
      <li><strong>Angular:</strong> ✅ Completamente compatible</li>
      <li><strong>Svelte:</strong> ✅ Completamente compatible</li>
      <li><strong>Vanilla JS:</strong> ✅ Perfectamente compatible</li>
    </ul>

    <h3>Plugins Adicionales</h3>
    <p>GSAP tiene muchos plugins útiles. Algunos son gratuitos, otros requieren membresía:</p>
    <ul>
      <li><strong>ScrollTrigger:</strong> <code>npm install gsap/ScrollTrigger</code></li>
      <li><strong>TextPlugin:</strong> <code>npm install gsap/TextPlugin</code></li>
      <li><strong>MotionPathPlugin:</strong> Requiere membresía Club GreenSock</li>
    </ul>

    <h3>Configuración en React/Next.js</h3>
    <p>Para usar GSAP en React/Next.js, necesitas usar <code>"use client"</code> en tus componentes:</p>
    <pre><code>"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MyComponent() {
  const boxRef = useRef(null);
  
  useEffect(() => {
    gsap.to(boxRef.current, {duration: 2, x: 100});
  }, []);
  
  return &lt;div ref={boxRef}&gt;Anima esto&lt;/div&gt;;
}</code></pre>

    <h3>Verificando la Instalación</h3>
    <p>Para verificar que GSAP está correctamente instalado, puedes ejecutar:</p>
    <pre><code>console.log(gsap.version);</code></pre>
  `,
  code: `// Ejemplo básico después de la instalación
import gsap from "gsap";

// Verificar que GSAP está funcionando
console.log("GSAP Version:", gsap.version);

// Primera animación de prueba
gsap.to(".test-element", {
  duration: 2,
  x: 100,
  rotation: 360,
  scale: 1.5,
  ease: "bounce.out"
});

// Usando timeline para múltiples animaciones
const tl = gsap.timeline();
tl.to(".element1", {duration: 1, x: 50})
  .to(".element2", {duration: 1, y: 50}, "-=0.5")
  .to(".element3", {duration: 1, rotation: 180});`,
  animationFunction: () => {
    // Animación de verificación de instalación
    const elements = document.querySelectorAll(".installation-demo");
    if (elements.length > 0) {
      // Reset
      gsap.set(".installation-demo", {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        backgroundColor: "#3b82f6",
      });

      // Timeline de demostración
      const tl = gsap.timeline();
      tl.to(".installation-demo", {
        duration: 1,
        x: 100,
        backgroundColor: "#10b981",
        ease: "power2.out",
        stagger: 0.2,
      })
        .to(
          ".installation-demo",
          {
            duration: 0.8,
            rotation: 360,
            scale: 1.2,
            ease: "back.out(1.7)",
            stagger: 0.1,
          },
          "-=0.5"
        )
        .to(".installation-demo", {
          duration: 0.6,
          y: -30,
          ease: "power2.out",
          stagger: 0.1,
          yoyo: true,
          repeat: 1,
        });
    }
  },
};
