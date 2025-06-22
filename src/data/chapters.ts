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
  {
    id: "capitulo-4",
    title: "Tipos de Easing",
    subtitle: "Curvas de animación naturales",
    description:
      "Domina las curvas de aceleración para crear animaciones más naturales y atractivas.",
    difficulty: "intermediate",
    duration: "18 min",
    tags: ["easing", "timing", "curves", "naturalidad"],
    theory: `
      <h3>¿Qué es el Easing?</h3>
      <p>El easing (aceleración) controla la velocidad de cambio de una animación a lo largo del tiempo. Sin easing, las animaciones se ven robóticas y antinaturales.</p>
      
      <h3>Tipos de Easing en GSAP</h3>
      <ul>
        <li><strong>power1, power2, power3, power4:</strong> Curvas de potencia (suaves a extremas)</li>
        <li><strong>back:</strong> Se mueve más allá del punto final y regresa</li>
        <li><strong>elastic:</strong> Efecto de resorte elástico</li>
        <li><strong>bounce:</strong> Efecto de rebote al final</li>
        <li><strong>sine:</strong> Movimiento suave basado en función seno</li>
        <li><strong>expo:</strong> Aceleración exponencial</li>
        <li><strong>circ:</strong> Aceleración circular</li>
      </ul>

      <h3>Variaciones</h3>
      <ul>
        <li><strong>.in:</strong> Inicia lento, acelera al final</li>
        <li><strong>.out:</strong> Inicia rápido, desacelera al final</li>
        <li><strong>.inOut:</strong> Lento al inicio y final, rápido en el medio</li>
      </ul>

      <h3>Easing Personalizado</h3>
      <p>También puedes crear curvas personalizadas con <code>CustomEase</code>:</p>
      <pre><code>ease: "M0,0 C0.25,0.46 0.45,0.94 1,1"</code></pre>
    `,
    code: `
// Reset inicial
gsap.set(".easing-box", {
  x: -120,
  backgroundColor: "#3b82f6",
});

// Crear timeline para mostrar diferentes easings
const tl = gsap.timeline({repeat: -1, yoyo: true});

tl.to("#ease1", {duration: 1, x: 120, ease: "power2.out"})
  .to("#ease2", {duration: 1, x: 120, ease: "back.out(1.7)"}, 0)
  .to("#ease3", {duration: 1, x: 120, ease: "bounce.out"}, 0)
  .to("#ease4", {duration: 1, x: 120, ease: "elastic.out(1, 0.3)"}, 0);`,
    animationFunction: () => {
      const boxes = [
        document.getElementById("ease1"),
        document.getElementById("ease2"),
        document.getElementById("ease3"),
        document.getElementById("ease4"),
      ];

      if (boxes.every((box) => box)) {
        // Reset inicial
        gsap.set(".easing-box", {
          x: -120,
          backgroundColor: "#3b82f6",
        });

        // Timeline con diferentes easings
        const tl = gsap.timeline();

        tl.to("#ease1", { duration: 1, x: 120, ease: "power2.out" })
          .to("#ease2", { duration: 1, x: 120, ease: "back.out(1.7)" }, 0)
          .to("#ease3", { duration: 1, x: 120, ease: "bounce.out" }, 0)
          .to(
            "#ease4",
            { duration: 1, x: 120, ease: "elastic.out(1, 0.3)" },
            0
          );
      }
    },
  },
  {
    id: "capitulo-5",
    title: "From, FromTo y Set",
    subtitle: "Controlando el inicio y fin",
    description:
      "Aprende los diferentes métodos para definir valores iniciales y finales en tus animaciones.",
    difficulty: "beginner",
    duration: "12 min",
    tags: ["from", "fromTo", "set", "valores iniciales"],
    theory: `
      <h3>Métodos de Control de Valores</h3>
      <p>GSAP ofrece varios métodos para controlar los valores iniciales y finales de tus animaciones:</p>
      
      <h3>gsap.to()</h3>
      <p>Anima desde el estado actual hacia los valores especificados:</p>
      <pre><code>gsap.to(element, {x: 100, duration: 1})</code></pre>
      
      <h3>gsap.from()</h3>
      <p>Establece valores iniciales y anima hacia el estado actual:</p>
      <pre><code>gsap.from(element, {x: -100, duration: 1})</code></pre>
      
      <h3>gsap.fromTo()</h3>
      <p>Define tanto valores iniciales como finales:</p>
      <pre><code>gsap.fromTo(element, {x: -100}, {x: 100, duration: 1})</code></pre>
      
      <h3>gsap.set()</h3>
      <p>Establece valores inmediatamente sin animación:</p>
      <pre><code>gsap.set(element, {x: 0, opacity: 1})</code></pre>

      <h3>Casos de Uso</h3>
      <ul>
        <li><strong>from():</strong> Efectos de entrada, elementos que aparecen</li>
        <li><strong>fromTo():</strong> Control total, animaciones complejas</li>
        <li><strong>set():</strong> Estados iniciales, resets, posicionamiento instantáneo</li>
      </ul>
    `,
    code: `
// gsap.set() - Posicionamiento inicial instantáneo
gsap.set(".method-box", {
  scale: 0.5,
  opacity: 0,
  backgroundColor: "#3b82f6"
});

// gsap.from() - Desde valores especificados al estado actual
gsap.from("#method1", {
  duration: 1, 
  x: -150, 
  rotation: -180,
  delay: 0.5
});

// gsap.to() - Del estado actual a valores especificados  
gsap.to("#method2", {
  duration: 1,
  x: 150,
  scale: 1.5,
  delay: 1
});

// gsap.fromTo() - Control total de inicio y fin
gsap.fromTo("#method3", 
  {y: -100, rotation: 0}, 
  {y: 100, rotation: 360, duration: 1.5, delay: 1.5}
);`,
    animationFunction: () => {
      const boxes = [
        document.getElementById("method1"),
        document.getElementById("method2"),
        document.getElementById("method3"),
      ];

      if (boxes.every((box) => box)) {
        // Reset con gsap.set()
        gsap.set(".method-box", {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: 0,
          backgroundColor: "#3b82f6",
        });

        // Diferentes métodos
        gsap.from("#method1", {
          duration: 1,
          x: -150,
          rotation: -180,
          delay: 0.2,
        });

        gsap.to("#method2", {
          duration: 1,
          x: 150,
          scale: 1.5,
          delay: 0.7,
        });

        gsap.fromTo(
          "#method3",
          { y: -100, rotation: 0 },
          { y: 100, rotation: 360, duration: 1.5, delay: 1.2 }
        );
      }
    },
  },
  {
    id: "capitulo-6",
    title: "Animaciones de Texto",
    subtitle: "Efectos tipográficos impresionantes",
    description:
      "Crea efectos de texto dinámicos: escritura, desvanecimiento, morfing y más.",
    difficulty: "intermediate",
    duration: "25 min",
    tags: ["texto", "tipografía", "split", "chars", "words"],
    theory: `
      <h3>Animaciones de Texto en GSAP</h3>
      <p>GSAP permite crear efectos de texto increíbles dividiendo el texto en caracteres, palabras o líneas individuales para animarlos por separado.</p>
      
      <h3>Técnicas Principales</h3>
      <ul>
        <li><strong>Split Text:</strong> Dividir texto en elementos animables</li>
        <li><strong>Stagger:</strong> Animar elementos en secuencia</li>
        <li><strong>TextPlugin:</strong> Plugin para efectos de escritura</li>
        <li><strong>Morphing:</strong> Transformar entre diferentes textos</li>
      </ul>

      <h3>SplitText (Plugin Premium)</h3>
      <p>El plugin SplitText divide automáticamente el texto:</p>
      <pre><code>
const split = new SplitText(".text", {type: "chars"});
gsap.from(split.chars, {duration: 1, y: 50, stagger: 0.1});
      </code></pre>

      <h3>Alternativa Manual</h3>
      <p>Sin plugins, puedes dividir texto manualmente:</p>
      <pre><code>
text.innerHTML = text.textContent.split('').map(
  char => \`&lt;span&gt;\${char}&lt;/span&gt;\`
).join('');
      </code></pre>

      <h3>Efectos Comunes</h3>
      <ul>
        <li><strong>Máquina de escribir:</strong> Revelar caracteres uno por uno</li>
        <li><strong>Fade in por palabras:</strong> Aparecer palabra por palabra</li>
        <li><strong>Bounce chars:</strong> Caracteres que rebotan</li>
        <li><strong>Wave effect:</strong> Efecto de onda en el texto</li>
      </ul>
    `,
    code: `
// Función para dividir texto en caracteres
function splitTextToChars(element) {
  const text = element.textContent;
  element.innerHTML = text.split('').map(
    char => \`<span class="char">\${char === ' ' ? '&nbsp;' : char}</span>\`
  ).join('');
  return element.querySelectorAll('.char');
}

// Obtener elementos
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

// Dividir en caracteres
const chars1 = splitTextToChars(text1);
const chars2 = splitTextToChars(text2);

// Reset inicial
gsap.set(chars1, {y: 50, opacity: 0});
gsap.set(chars2, {rotationY: 90, opacity: 0});

// Animaciones
gsap.to(chars1, {
  duration: 0.8,
  y: 0,
  opacity: 1,
  stagger: 0.05,
  ease: "back.out(1.7)"
});

gsap.to(chars2, {
  duration: 0.6,
  rotationY: 0,
  opacity: 1,
  stagger: 0.03,
  delay: 1,
  ease: "power2.out"
});`,
    animationFunction: () => {
      const text1 = document.getElementById("text1");
      const text2 = document.getElementById("text2");

      if (text1 && text2) {
        // Función para dividir texto
        function splitTextToChars(element: HTMLElement) {
          const text = element.textContent;
          element.innerHTML = text!
            .split("")
            .map(
              (char: string) =>
                `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
            )
            .join("");
          return element.querySelectorAll(".char");
        }

        // Dividir textos
        const chars1 = splitTextToChars(text1);
        const chars2 = splitTextToChars(text2);

        // Reset inicial
        gsap.set(chars1, { y: 50, opacity: 0 });
        gsap.set(chars2, { rotationY: 90, opacity: 0 });

        // Animaciones con stagger
        gsap.to(chars1, {
          duration: 0.8,
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "back.out(1.7)",
        });

        gsap.to(chars2, {
          duration: 0.6,
          rotationY: 0,
          opacity: 1,
          stagger: 0.03,
          delay: 1,
          ease: "power2.out",
        });
      }
    },
  },
  {
    id: "capitulo-7",
    title: "ScrollTrigger Básico",
    subtitle: "Animaciones activadas por scroll",
    description:
      "Aprende a crear animaciones que se activan al hacer scroll, sincronizadas con la posición de la página.",
    difficulty: "intermediate",
    duration: "30 min",
    tags: ["scrolltrigger", "scroll", "viewport", "parallax"],
    theory: `
      <h3>¿Qué es ScrollTrigger?</h3>
      <p>ScrollTrigger es un plugin de GSAP que permite crear animaciones activadas por el scroll. Es una de las herramientas más poderosas para crear experiencias web inmersivas.</p>
      
      <h3>Instalación</h3>
      <pre><code>
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
      </code></pre>

      <h3>Conceptos Básicos</h3>
      <ul>
        <li><strong>trigger:</strong> Elemento que activa la animación</li>
        <li><strong>start:</strong> Cuándo inicia la animación (ej: "top 80%")</li>
        <li><strong>end:</strong> Cuándo termina (ej: "bottom 20%")</li>
        <li><strong>scrub:</strong> Vincula la animación con el scroll</li>
        <li><strong>pin:</strong> Fija un elemento durante la animación</li>
      </ul>

      <h3>Sintaxis Básica</h3>
      <pre><code>
gsap.to(".box", {
  x: 100,
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
});
      </code></pre>

      <h3>Valores de Start/End</h3>
      <ul>
        <li><strong>"top 80%":</strong> Cuando el top del elemento esté al 80% del viewport</li>
        <li><strong>"center center":</strong> Cuando el centro del elemento esté en el centro del viewport</li>
        <li><strong>"bottom top":</strong> Cuando el bottom del elemento toque el top del viewport</li>
      </ul>

      <h3>Casos de Uso</h3>
      <ul>
        <li><strong>Parallax scrolling:</strong> Elementos que se mueven a diferentes velocidades</li>
        <li><strong>Fade in al scroll:</strong> Elementos que aparecen al entrar en vista</li>
        <li><strong>Progress bars:</strong> Barras que se llenan según el scroll</li>
        <li><strong>Section pinning:</strong> Secciones que se quedan fijas</li>
      </ul>
    `,
    code: `
// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animación básica con ScrollTrigger
gsap.fromTo(".scroll-box", 
  {
    x: -100,
    opacity: 0,
    rotation: -180
  },
  {
    x: 100,
    opacity: 1,
    rotation: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".scroll-box",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      toggleActions: "play none none reverse"
    }
  }
);

// Parallax effect
gsap.to(".parallax-bg", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-container",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});`,
    animationFunction: () => {
      // Nota: Esta es una simulación del efecto ScrollTrigger
      // En un entorno real, se activaría con el scroll
      const scrollBox = document.getElementById("scroll-box");

      if (scrollBox) {
        // Reset inicial
        gsap.set(scrollBox, {
          x: -100,
          opacity: 0,
          rotation: -180,
        });

        // Simular activación por scroll
        gsap.to(scrollBox, {
          x: 100,
          opacity: 1,
          rotation: 0,
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
        });
      }
    },
  },
  {
    id: "capitulo-8",
    title: "Timeline Avanzado",
    subtitle: "Control total de secuencias complejas",
    description:
      "Domina las características avanzadas de Timeline: callbacks, labels, repeat, yoyo y más.",
    difficulty: "advanced",
    duration: "35 min",
    tags: ["timeline", "labels", "callbacks", "repeat", "yoyo"],
    theory: `
      <h3>Timeline Avanzado</h3>
      <p>Los Timelines de GSAP ofrecen control sofisticado sobre secuencias complejas de animaciones. Permiten crear narrativas visuales precisas y reutilizables.</p>
      
      <h3>Características Avanzadas</h3>
      <ul>
        <li><strong>Labels:</strong> Marcadores nombrados para posicionamiento preciso</li>
        <li><strong>Callbacks:</strong> Funciones que se ejecutan en momentos específicos</li>
        <li><strong>Repeat/Yoyo:</strong> Repetición y reversión automática</li>
        <li><strong>TimeScale:</strong> Control de velocidad en tiempo real</li>
        <li><strong>Progress:</strong> Saltar a cualquier punto de la timeline</li>
      </ul>

      <h3>Labels y Posicionamiento</h3>
      <pre><code>
const tl = gsap.timeline();
tl.addLabel("start")
  .to(".box1", {x: 100})
  .addLabel("middle")
  .to(".box2", {y: 100})
  .to(".box3", {rotation: 360}, "middle+=0.5");
      </code></pre>

      <h3>Callbacks Útiles</h3>
      <ul>
        <li><strong>onStart:</strong> Se ejecuta al iniciar</li>
        <li><strong>onUpdate:</strong> Se ejecuta en cada frame</li>
        <li><strong>onComplete:</strong> Se ejecuta al completar</li>
        <li><strong>onRepeat:</strong> Se ejecuta en cada repetición</li>
        <li><strong>onReverseComplete:</strong> Se ejecuta al completar la reversión</li>
      </ul>

      <h3>Control de Reproducción</h3>
      <pre><code>
tl.play();        // Reproducir
tl.pause();       // Pausar
tl.reverse();     // Invertir
tl.restart();     // Reiniciar
tl.progress(0.5); // Ir al 50%
tl.timeScale(2);  // Doble velocidad
      </code></pre>
    `,
    code: `
// Timeline avanzado con múltiples características
const tl = gsap.timeline({
  repeat: 2,
  yoyo: true,
  onStart: () => console.log("Timeline iniciado"),
  onComplete: () => console.log("Timeline completado"),
  onRepeat: () => console.log("Repetición")
});

// Agregar labels para posicionamiento preciso
tl.addLabel("inicio")
  .set(".advanced-box", {x: 0, y: 0, rotation: 0, scale: 1})
  .to("#adv1", {duration: 0.5, x: 80, rotation: 180})
  .addLabel("medio")
  .to("#adv2", {duration: 0.5, y: 60, scale: 1.3}, "medio")
  .to("#adv3", {duration: 0.5, x: -80, rotation: -180}, "medio+=0.2")
  .addLabel("final")
  .to(".advanced-box", {
    duration: 0.8, 
    y: 0, 
    rotation: 360, 
    scale: 0.8,
    stagger: 0.1
  }, "final");

// Control de timeline
setTimeout(() => tl.timeScale(1.5), 2000); // Acelerar después de 2s`,
    animationFunction: () => {
      const boxes = [
        document.getElementById("adv1"),
        document.getElementById("adv2"),
        document.getElementById("adv3"),
      ];

      if (boxes.every((box) => box)) {
        const tl = gsap.timeline({
          onStart: () => console.log("Timeline avanzado iniciado"),
          onComplete: () => console.log("Timeline avanzado completado"),
        });

        // Timeline con labels
        tl.addLabel("inicio")
          .set(".advanced-box", { x: 0, y: 0, rotation: 0, scale: 1 })
          .to("#adv1", { duration: 0.5, x: 80, rotation: 180 })
          .addLabel("medio")
          .to("#adv2", { duration: 0.5, y: 60, scale: 1.3 }, "medio")
          .to("#adv3", { duration: 0.5, x: -80, rotation: -180 }, "medio+=0.2")
          .addLabel("final")
          .to(
            ".advanced-box",
            {
              duration: 0.8,
              y: 0,
              rotation: 360,
              scale: 0.8,
              stagger: 0.1,
            },
            "final"
          );
      }
    },
  },
  {
    id: "capitulo-9",
    title: "ScrollTrigger Avanzado",
    subtitle: "Efectos complejos con scroll",
    description:
      "Domina técnicas avanzadas de ScrollTrigger: pin, batch, refresh y efectos complejos.",
    difficulty: "advanced",
    duration: "40 min",
    tags: ["scrolltrigger", "pin", "batch", "refresh", "parallax"],
    theory: `
      <h3>ScrollTrigger Avanzado</h3>
      <p>ScrollTrigger ofrece funcionalidades avanzadas para crear efectos de scroll sofisticados y experiencias interactivas complejas.</p>
      
      <h3>Pin - Elementos Fijos</h3>
      <p>Pin permite fijar elementos durante el scroll para crear secciones que se mantienen en vista:</p>
      <pre><code>
ScrollTrigger.create({
  trigger: ".panel",
  pin: true,
  start: "top top",
  end: "bottom bottom",
  pinSpacing: false
});
      </code></pre>

      <h3>Batch - Animaciones en Grupo</h3>
      <p>Batch permite animar múltiples elementos de forma eficiente:</p>
      <pre><code>
ScrollTrigger.batch(".fade-in", {
  onEnter: elements => gsap.from(elements, {
    opacity: 0,
    y: 50,
    stagger: 0.1
  }),
  onLeave: elements => gsap.to(elements, {
    opacity: 0,
    y: -50,
    stagger: 0.1
  })
});
      </code></pre>

      <h3>Refresh y Actualización</h3>
      <ul>
        <li><strong>ScrollTrigger.refresh():</strong> Recalcular posiciones</li>
        <li><strong>invalidateOnRefresh:</strong> Resetear valores en resize</li>
        <li><strong>onRefresh callback:</strong> Ejecutar código al actualizar</li>
      </ul>

      <h3>Efectos Avanzados</h3>
      <ul>
        <li><strong>Parallax multicapa:</strong> Diferentes velocidades por capa</li>
        <li><strong>Horizontal scroll:</strong> Scroll horizontal con rueda vertical</li>
        <li><strong>Progress indicators:</strong> Barras de progreso del scroll</li>
        <li><strong>Snap scrolling:</strong> Scroll con puntos de anclaje</li>
      </ul>

      <h3>Performance y Optimización</h3>
      <ul>
        <li><strong>Anticipate pin:</strong> Optimizar pin spacing</li>
        <li><strong>Batch processing:</strong> Procesar elementos en lotes</li>
        <li><strong>Throttling:</strong> Limitar frecuencia de updates</li>
        <li><strong>Will-change:</strong> Optimizar rendimiento CSS</li>
      </ul>
    `,
    code: `
// ScrollTrigger Avanzado - Simulación de batch y efectos complejos
gsap.registerPlugin(ScrollTrigger);

// Simulación de ScrollTrigger.batch()
const batchElements = document.querySelectorAll('.batch-item');

// Reset inicial
gsap.set(batchElements, {
  y: 50,
  opacity: 0,
  scale: 0.8,
  rotation: -45
});

// Timeline que simula efectos de scroll avanzados
const tl = gsap.timeline();

// Simular batch animation con stagger
tl.to(batchElements, {
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  duration: 0.8,
  stagger: {
    amount: 1.2,
    from: "start",
    ease: "power2.out"
  },
  ease: "back.out(1.4)"
})
// Efecto de parallax simulado
.to('.batch-item:nth-child(even)', {
  y: -20,
  duration: 2,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
}, "-=1")
.to('.batch-item:nth-child(odd)', {
  y: 20,
  duration: 2.5,
  ease: "power1.inOut", 
  repeat: -1,
  yoyo: true
}, "-=3");`,
    animationFunction: () => {
      const batchElements = document.querySelectorAll(".batch-item");

      if (batchElements.length > 0) {
        // Reset inicial
        gsap.set(batchElements, {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotation: -45,
        });

        const tl = gsap.timeline();

        // Simular batch animation con stagger
        tl.to(batchElements, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: {
            amount: 1.2,
            from: "start",
            ease: "power2.out",
          },
          ease: "back.out(1.4)",
        })
          // Efecto de parallax simulado
          .to(
            ".batch-item:nth-child(even)",
            {
              y: -20,
              duration: 2,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true,
            },
            "-=1"
          )
          .to(
            ".batch-item:nth-child(odd)",
            {
              y: 20,
              duration: 2.5,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true,
            },
            "-=3"
          );
      }
    },
  },
  {
    id: "capitulo-10",
    title: "Parallax y Efectos 3D",
    subtitle: "Profundidad y perspectiva",
    description:
      "Crea efectos de parallax sofisticados y transformaciones 3D para añadir profundidad a tus animaciones.",
    difficulty: "advanced",
    duration: "45 min",
    tags: ["parallax", "3d", "transform3d", "perspective", "layers"],
    theory: `
      <h3>Efectos de Parallax</h3>
      <p>El parallax crea la ilusión de profundidad haciendo que elementos en diferentes "capas" se muevan a velocidades distintas.</p>
      
      <h3>Transformaciones 3D en GSAP</h3>
      <ul>
        <li><strong>z:</strong> Posición en el eje Z (profundidad)</li>
        <li><strong>rotationX, rotationY, rotationZ:</strong> Rotación en cada eje</li>
        <li><strong>perspective:</strong> Punto de vista 3D</li>
        <li><strong>transformPerspective:</strong> Perspectiva del elemento</li>
        <li><strong>force3D:</strong> Forzar aceleración de hardware</li>
      </ul>

      <h3>Configuración de Perspectiva</h3>
      <pre><code>
// CSS
.container {
  perspective: 1000px;
}

// GSAP
gsap.set(".container", {perspective: 1000});
gsap.set(".card", {transformPerspective: 400});
      </code></pre>

      <h3>Parallax con ScrollTrigger</h3>
      <pre><code>
gsap.to(".bg-layer", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
      </code></pre>

      <h3>Efectos 3D Comunes</h3>
      <ul>
        <li><strong>Card flip:</strong> Voltear cartas en 3D</li>
        <li><strong>Cube rotation:</strong> Rotación de cubos</li>
        <li><strong>Floating elements:</strong> Elementos flotantes</li>
        <li><strong>Depth layers:</strong> Capas con profundidad</li>
      </ul>

      <h3>Optimización de Performance</h3>
      <ul>
        <li><strong>will-change:</strong> Preparar elementos para animación</li>
        <li><strong>transform3d():</strong> Activar aceleración por hardware</li>
        <li><strong>force3D:</strong> Control manual de GPU</li>
      </ul>
    `,
    code: `
// Configurar perspectiva 3D
gsap.set(".parallax-container", {perspective: 1000});

// Reset inicial de elementos 3D
gsap.set(".layer-1", {z: 0, rotationY: 0});
gsap.set(".layer-2", {z: -100, rotationY: 0});  
gsap.set(".layer-3", {z: -200, rotationY: 0});

// Timeline para efectos parallax 3D
const tl = gsap.timeline({repeat: -1, yoyo: true});

tl.to(".layer-1", {
  duration: 3,
  rotationY: 360,
  z: 100,
  ease: "power2.inOut"
})
.to(".layer-2", {
  duration: 3,
  rotationY: -180,
  z: 50,
  ease: "power2.inOut"
}, 0)
.to(".layer-3", {
  duration: 3,
  rotationY: 180,
  z: -50,
  ease: "power2.inOut"  
}, 0);

// Efectos de mouse parallax
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  
  gsap.to(".parallax-mouse", {
    duration: 1,
    rotationY: x,
    rotationX: -y,
    ease: "power2.out"
  });
});`,
    animationFunction: () => {
      const layers = [
        document.getElementById("layer-1"),
        document.getElementById("layer-2"),
        document.getElementById("layer-3"),
      ];

      if (layers.every((layer) => layer)) {
        // Configurar 3D
        gsap.set(".parallax-container", { perspective: 1000 });
        gsap.set(".layer-1", { z: 0, rotationY: 0 });
        gsap.set(".layer-2", { z: -100, rotationY: 0 });
        gsap.set(".layer-3", { z: -200, rotationY: 0 });

        // Animación 3D
        const tl = gsap.timeline();

        tl.to(".parallax-layer", {
          duration: 3,
          rotationY: 360,
          z: 100,
          stagger: 0.2,
          ease: "power2.inOut",
        }).to(".parallax-layer", {
          duration: 2,
          rotationY: 0,
          z: 0,
          stagger: 0.1,
          ease: "power2.inOut",
        });
      }
    },
  },
  {
    id: "capitulo-11",
    title: "Stagger y Secuencias",
    subtitle: "Animaciones escalonadas profesionales",
    description:
      "Crea efectos visuales impresionantes con animaciones escalonadas y secuencias complejas.",
    difficulty: "intermediate",
    duration: "25 min",
    tags: ["stagger", "sequence", "delay", "from", "random"],
    theory: `
      <h3>¿Qué es Stagger?</h3>
      <p>Stagger permite crear animaciones escalonadas donde múltiples elementos se animan con pequeños retrasos entre ellos, creando efectos fluidos y elegantes.</p>
      
      <h3>Tipos de Stagger</h3>
      <ul>
        <li><strong>Número simple:</strong> <code>stagger: 0.1</code> - Retraso fijo entre elementos</li>
        <li><strong>Objeto avanzado:</strong> Control total sobre la distribución</li>
        <li><strong>From:</strong> Dirección del stagger (start, end, center, edges)</li>
        <li><strong>Grid:</strong> Para elementos en cuadrícula</li>
        <li><strong>Random:</strong> Orden aleatorio</li>
      </ul>

      <h3>Configuración Avanzada</h3>
      <pre><code>
stagger: {
  amount: 1.5,        // Tiempo total de distribución
  from: "center",     // Punto de inicio
  grid: [4, 4],       // Para cuadrículas
  axis: "y",          // Eje de distribución
  ease: "power2.out"  // Curva para el stagger
}
      </code></pre>

      <h3>Casos de Uso</h3>
      <ul>
        <li><strong>Listas animadas:</strong> Elementos que aparecen en secuencia</li>
        <li><strong>Galerías:</strong> Imágenes que se revelan progresivamente</li>
        <li><strong>Menús:</strong> Navegación con efectos escalonados</li>
        <li><strong>Cards:</strong> Tarjetas que aparecen una tras otra</li>
      </ul>
    `,
    code: `
// Stagger básico con dirección
gsap.from(".stagger-item", {
  duration: 0.8,
  y: 50,
  opacity: 0,
  stagger: {
    amount: 1,
    from: "start"
  },
  ease: "back.out(1.7)"
});

// Stagger con configuración avanzada
gsap.to(".stagger-advanced", {
  duration: 1,
  scale: 1.2,
  rotation: 360,
  stagger: {
    amount: 2,
    from: "center",
    ease: "power2.inOut"
  }
});`,
    animationFunction: () => {
      const staggerItems = document.querySelectorAll(".stagger-demo");

      if (staggerItems.length > 0) {
        // Reset inicial
        gsap.set(staggerItems, {
          y: 30,
          opacity: 0,
          scale: 0.8,
          rotation: 0,
        });

        // Stagger animation
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
      }
    },
  },
  {
    id: "capitulo-12",
    title: "Performance y Optimización",
    subtitle: "Animaciones fluidas y eficientes",
    description:
      "Aprende las mejores prácticas para crear animaciones de alto rendimiento que funcionen en todos los dispositivos.",
    difficulty: "advanced",
    duration: "30 min",
    tags: ["performance", "optimization", "gpu", "will-change", "force3d"],
    theory: `
      <h3>Performance en Animaciones Web</h3>
      <p>Crear animaciones fluidas requiere entender cómo el navegador renderiza y optimizar en consecuencia. GSAP ofrece herramientas específicas para maximizar el rendimiento.</p>
      
      <h3>Propiedades Eficientes</h3>
      <ul>
        <li><strong>Transform:</strong> translate, scale, rotate (no afectan el layout)</li>
        <li><strong>Opacity:</strong> Cambios de transparencia</li>
        <li><strong>Filter:</strong> blur, brightness, contrast</li>
      </ul>

      <h3>Técnicas de Optimización GSAP</h3>
      <pre><code>
// Forzar aceleración por hardware
gsap.set(".element", {force3D: true});

// Preparar elementos para animación
gsap.set(".element", {willChange: "transform"});

// Limpiar después de la animación
gsap.to(".element", {
  x: 100,
  onComplete: () => {
    gsap.set(".element", {clearProps: "all"});
  }
});
      </code></pre>

      <h3>Mejores Prácticas</h3>
      <ul>
        <li><strong>Batch updates:</strong> Agrupa múltiples cambios</li>
        <li><strong>RequestAnimationFrame:</strong> GSAP lo usa automáticamente</li>
        <li><strong>Reduce repaints:</strong> Anima transform en lugar de position</li>
        <li><strong>Lazy loading:</strong> Solo anima elementos visibles</li>
      </ul>
    `,
    code: `
// Configuración optimizada para performance
gsap.config({
  force3D: "auto",
  nullTargetWarn: false
});

// Animación optimizada
const optimizedAnimation = (elements) => {
  // Preparar elementos
  gsap.set(elements, {
    force3D: true,
    willChange: "transform"
  });

  // Animación eficiente
  return gsap.to(elements, {
    duration: 1,
    x: 100,
    rotation: 360,
    scale: 1.2,
    ease: "power2.out",
    stagger: 0.1,
    onComplete: () => {
      // Limpiar optimizaciones
      gsap.set(elements, {
        clearProps: "all"
      });
    }
  });
};`,
    animationFunction: () => {
      const perfElements = document.querySelectorAll(".perf-demo");

      if (perfElements.length > 0) {
        // Configuración optimizada
        gsap.set(perfElements, {
          force3D: true,
          transformOrigin: "center center",
        });

        // Reset inicial
        gsap.set(perfElements, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
        });

        // Animación optimizada
        const tl = gsap.timeline();

        tl.to(perfElements, {
          duration: 1,
          x: 80,
          rotation: 360,
          scale: 1.2,
          stagger: 0.1,
          ease: "power2.out",
        }).to(perfElements, {
          duration: 0.8,
          x: 0,
          rotation: 0,
          scale: 1,
          stagger: 0.05,
          ease: "power2.inOut",
          onComplete: () => {
            // Limpiar optimizaciones
            gsap.set(perfElements, {
              clearProps: "transform",
            });
          },
        });
      }
    },
  },
];

// Crear elementos de navegación para el navbar
export const navigationItems = chapters.map((chapter) => ({
  id: chapter.id,
  title: chapter.title,
  href: `/${chapter.id}`,
  difficulty: chapter.difficulty,
}));
