import { Chapter } from "../types";
import gsap from "gsap";
import { installationChapter } from "./installation";

export const chapters: Chapter[] = [
  installationChapter,
  {
    id: "capitulo-1",
    title: "Introducción a GSAP",
    subtitle: "Tus primeras animaciones",
    description:
      "Aprende los conceptos básicos de GSAP y crea tu primera animación.",
    difficulty: "beginner",
    duration: "10 min",
    tags: ["básico", "introducción", "gsap.to()"],
    theory: `
      <h3>¿Qué es GSAP?</h3>
      <p>GSAP (GreenSock Animation Platform) es una librería de JavaScript profesional para crear animaciones de alto rendimiento. Es utilizada por millones de sitios web y es la herramienta preferida por desarrolladores y diseñadores para crear experiencias web interactivas.</p>
      
      <h3>¿Por qué usar GSAP?</h3>
      <ul>
        <li><strong>Rendimiento:</strong> Hasta 20x más rápido que jQuery</li>
        <li><strong>Compatibilidad:</strong> Funciona en todos los navegadores</li>
        <li><strong>Flexibilidad:</strong> Anima cualquier propiedad de cualquier objeto</li>
        <li><strong>Facilidad de uso:</strong> API intuitiva y bien documentada</li>
      </ul>

      <h3>Método gsap.to()</h3>
      <p>El método <code>gsap.to()</code> es la forma más común de crear animaciones. Toma un elemento (o elementos) y los anima hacia los valores especificados.</p>
      
      <p><strong>Sintaxis básica:</strong></p>
      <pre><code>gsap.to(target, {duration: 1, x: 100, rotation: 360})</code></pre>
    `,
    code: `
// Reset inicial
gsap.set(box, {
  x: 0,
  rotation: 0,
  scale: 1,
  backgroundColor: "#3b82f6",
});

// Animación básica con gsap.to()
gsap.to(box, {
  duration: 2,
  x: 200,
  rotation: 360,
  scale: 1.5,
  backgroundColor: "#ff6b6b",
  ease: "bounce.out",
});`,
    animationFunction: () => {
      const box = document.getElementById("box1");
      if (box) {
        // Reset inicial
        gsap.set(box, {
          x: -100,
          rotation: 0,
          scale: 1,
          backgroundColor: "#3b82f6",
        });

        // Animación
        gsap.to(box, {
          duration: 2,
          x: 100,
          rotation: 360,
          scale: 1.5,
          backgroundColor: "#ff6b6b",
          ease: "bounce.out",
        });
      }
    },
  },
  {
    id: "capitulo-2",
    title: "Propiedades Transforms",
    subtitle: "Escalado, rotación y posicionamiento",
    description:
      "Explora las transformaciones 2D con GSAP: scale, rotate, x, y.",
    difficulty: "beginner",
    duration: "15 min",
    tags: ["transforms", "scale", "rotate", "posición"],
    theory: `
      <h3>Transformaciones 2D en GSAP</h3>
      <p>GSAP hace que trabajar con transformaciones CSS sea increíblemente fácil. En lugar de escribir complejas transformaciones CSS, puedes usar propiedades simples e intuitivas.</p>
      
      <h3>Propiedades de Transformación</h3>
      <ul>
        <li><strong>x, y:</strong> Mueve el elemento en los ejes X e Y</li>
        <li><strong>scale:</strong> Escala el elemento (scale: 2 = doble tamaño)</li>
        <li><strong>scaleX, scaleY:</strong> Escala solo en un eje específico</li>
        <li><strong>rotation:</strong> Rota el elemento (en grados)</li>
        <li><strong>skewX, skewY:</strong> Inclina el elemento</li>
      </ul>

      <h3>Ventajas de GSAP vs CSS</h3>
      <p>Mientras que CSS requiere:</p>
      <pre><code>transform: translateX(100px) rotate(45deg) scale(1.5);</code></pre>
      
      <p>GSAP te permite usar:</p>
      <pre><code>gsap.to(element, {x: 100, rotation: 45, scale: 1.5})</code></pre>
    `,
    code: `
// Reset inicial
gsap.set(box, {
  x: -100,
  y: 50,
  scaleX: 2,
  scaleY: 0.5,
  backgroundColor: "#3b82f6",
  rotation: 0,
  skewX: 0,
});

// Múltiples transformaciones
gsap.to(box, {
  duration: 1.5,
  x: 100,
  y: -50,
  scaleX: 0.5,
  scaleY: 2,
  rotation: 45,
  skewX: 10,
  ease: "power2.inOut",
});`,
    animationFunction: () => {
      const box = document.getElementById("box2");
      if (box) {
        // Reset inicial
        gsap.set(box, {
          x: -100,
          y: 50,
          scaleX: 2,
          scaleY: 0.5,
          backgroundColor: "#3b82f6",
          rotation: 0,
          skewX: 0,
        });

        // Animación
        gsap.to(box, {
          duration: 1.5,
          x: 100,
          y: -50,
          scaleX: 0.5,
          scaleY: 2,
          rotation: 45,
          skewX: 10,
          ease: "power2.inOut",
        });
      }
    },
  },
  {
    id: "capitulo-3",
    title: "Timeline Básico",
    subtitle: "Secuenciando animaciones",
    description:
      "Aprende a crear secuencias de animaciones con gsap.timeline().",
    difficulty: "intermediate",
    duration: "20 min",
    tags: ["timeline", "secuencias", "delay"],
    theory: `
      <h3>¿Qué es un Timeline?</h3>
      <p>Un Timeline en GSAP es un contenedor que puede contener múltiples tweens (animaciones) y controlar todas como una unidad. Es perfecto para crear secuencias complejas de animaciones.</p>
      
      <h3>Ventajas de los Timelines</h3>
      <ul>
        <li><strong>Control total:</strong> Puedes pausar, reproducir, invertir toda la secuencia</li>
        <li><strong>Posicionamiento preciso:</strong> Controla exactamente cuándo ocurre cada animación</li>
        <li><strong>Reutilización:</strong> Los timelines se pueden reutilizar y reproducir múltiples veces</li>
        <li><strong>Facilidad de mantenimiento:</strong> Código más limpio y organizado</li>
      </ul>

      <h3>Métodos de posicionamiento</h3>
      <ul>
        <li><strong>Sin parámetro:</strong> Animación se ejecuta después de la anterior</li>
        <li><strong>Número absoluto:</strong> "1" = empieza en el segundo 1</li>
        <li><strong>Relativo:</strong> "-=0.5" = empieza 0.5s antes del final anterior</li>
        <li><strong>Relativo:</strong> "+=0.5" = empieza 0.5s después del final anterior</li>
      </ul>
    `,
    code: `
animationFunction: () => {
  const boxes = [
    document.getElementById("box3a"),
    document.getElementById("box3b"),
    document.getElementById("box3c"),
];

if (boxes.every((box) => box)) {
  // Reset inicial
  gsap.set(".box3", {
    x: 0,
    scale: 1,
    rotation: 0,
    backgroundColor: "#3b82f6",
  });
    
// Timeline con múltiples animaciones secuenciales
const tl = gsap.timeline();

tl.to("#box3a", {duration: 1, x: 100, backgroundColor: "#ff6b6b"})
  .to("#box3b", {duration: 1, x: 100, backgroundColor: "#4ecdc4"}, "-=0.5")
  .to("#box3c", {duration: 1, x: 100, backgroundColor: "#45b7d1"}, "-=0.5")
  .to(".box3", {duration: 0.5, scale: 1.2, rotation: 360}, "-=0.2");`,
    animationFunction: () => {
      const boxes = [
        document.getElementById("box3a"),
        document.getElementById("box3b"),
        document.getElementById("box3c"),
      ];

      if (boxes.every((box) => box)) {
        // Reset inicial
        gsap.set(".box3", {
          x: 0,
          scale: 1,
          rotation: 0,
          backgroundColor: "#3b82f6",
        });

        // Timeline
        const tl = gsap.timeline();

        tl.to("#box3a", { duration: 1, x: 100, backgroundColor: "#ff6b6b" })
          .to(
            "#box3b",
            { duration: 1, x: 100, backgroundColor: "#4ecdc4" },
            "-=0.5"
          )
          .to(
            "#box3c",
            { duration: 1, x: 100, backgroundColor: "#45b7d1" },
            "-=0.5"
          )
          .to(".box3", { duration: 0.5, scale: 1.2, rotation: 360 }, "-=0.2");
      }
    },
  },
];

export const navigationItems = chapters.map((chapter) => ({
  id: chapter.id,
  title: chapter.title,
  href: `/${chapter.id}`,
  difficulty: chapter.difficulty,
}));
