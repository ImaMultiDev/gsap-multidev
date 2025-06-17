# GSAPMultidev

Una plataforma educativa moderna para aprender **GSAP (GreenSock Animation Platform)** de forma visual y estructurada. Construida con las últimas tecnologías web para ofrecer la mejor experiencia de aprendizaje.

## Características

- **Aprendizaje Visual**: Cada concepto viene con demos interactivos en tiempo real
- **Código Real**: Ve el código exacto que produce cada animación
- **Teoría Clara**: Explicaciones detalladas organizadas por nivel de dificultad
- **Navegación Intuitiva**: Dropdown de capítulos con scroll y indicadores de dificultad
- **Responsive**: Diseño adaptativo que funciona en todos los dispositivos
- **Dark Mode**: Tema oscuro por defecto con opción de cambio
- **Performance**: Optimizado con Next.js 15 y Turbopack
- **Espaciado Mejorado**: Diseño con márgenes y padding optimizados para mejor legibilidad

## Tecnologías

- **Next.js 15** con App Router
- **Turbopack** como bundler
- **Tailwind CSS 4** para estilos
- **TypeScript** para type safety
- **GSAP** para animaciones
- **React Syntax Highlighter** para mostrar código

## Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/ImaMultiDev/gsap-multidev.git
   cd gsap_multidev
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abre en el navegador**
   ```
   http://localhost:3000
   ```

## Estructura del Proyecto

```
gsap_multidev/
├── app/                    # Páginas de Next.js (App Router)
│   ├── instalacion/        # Página de instalación de GSAP
│   ├── capitulo-1/
│   ├── capitulo-2/
│   ├── capitulo-3/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             # Componentes reutilizables
│   ├── AnimationDemo.tsx
│   ├── ChapterLayout.tsx
│   ├── CodeBlock.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx         # Navbar con dropdown de capítulos
├── contexts/              # Contextos de React
│   └── ThemeContext.tsx
├── data/                  # Datos de los capítulos
│   ├── chapters.ts
│   └── installation.ts    # Datos del capítulo de instalación
├── types/                 # Tipos de TypeScript
│   └── index.ts
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Navegación Mejorada

### Navbar con Dropdown

- **Inicio**: Lleva a la página principal
- **Capítulos**: Dropdown con scroll que muestra todos los capítulos disponibles
- **Indicadores de Dificultad**: Cada capítulo muestra su nivel (Principiante, Intermedio, Avanzado)
- **Tema**: Toggle entre modo oscuro y claro
- **Responsive**: Menú adaptativo para móviles

## Capítulos Disponibles

### 0. Instalación de GSAP

- **Nivel**: Principiante
- **Duración**: 5 min
- **Conceptos**: NPM, CDN, configuración en frameworks

### 1. Introducción a GSAP

- **Nivel**: Principiante
- **Duración**: 10 min
- **Conceptos**: `gsap.to()`, transformaciones básicas

### 2. Propiedades Transforms

- **Nivel**: Principiante
- **Duración**: 15 min
- **Conceptos**: scale, rotate, x, y, skew

### 3. Timeline Básico

- **Nivel**: Intermedio
- **Duración**: 20 min
- **Conceptos**: `gsap.timeline()`, secuencias

## Agregar Nuevos Capítulos

Para agregar un nuevo capítulo:

1. **Crea la página**

   ```typescript
   // app/capitulo-X/page.tsx
   "use client";

   import { chapters } from "../../data/chapters";
   import ChapterLayout from "../../components/ChapterLayout";

   export default function CapituloX() {
     const chapter = chapters.find((ch) => ch.id === "capitulo-X")!;
     return <ChapterLayout chapter={chapter} />;
   }
   ```

2. **Agrega los datos**

   ```typescript
   // data/chapters.ts
   {
     id: 'capitulo-X',
     title: 'Título del capítulo',
     subtitle: 'Subtítulo',
     description: 'Descripción breve',
     difficulty: 'beginner' | 'intermediate' | 'advanced',
     duration: 'X min',
     tags: ['tag1', 'tag2'],
     theory: `HTML con la teoría del capítulo`,
     code: `// Código de ejemplo
     gsap.to(".element", {duration: 1, x: 100});`,
     animationFunction: () => {
       // Función que ejecuta la animación
     }
   }
   ```

3. **Actualiza el componente AnimationDemo**
   Agrega el caso para renderizar los elementos del nuevo capítulo en la función `renderAnimationElements()`.

## Capítulo de Instalación

El capítulo de instalación incluye:

- **Múltiples métodos de instalación**: NPM, CDN, descarga manual
- **Compatibilidad con frameworks**: React, Vue, Angular, Svelte
- **Configuración específica**: Ejemplos para diferentes entornos
- **Verificación**: Cómo confirmar que GSAP está funcionando
- **Plugins**: Información sobre plugins adicionales

## Personalización

### Colores

Los colores principales se pueden cambiar en `tailwind.config.ts`:

```typescript
primary: {
  50: '#f0f9ff',
  500: '#3b82f6',
  600: '#2563eb',
  // ...
}
```

### Temas

El sistema de temas está en `contexts/ThemeContext.tsx` y usa:

- Variables CSS para colores dinámicos
- Class `dark` para modo oscuro
- LocalStorage para persistencia

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linting con ESLint

## Configuración

### Next.js

- **Turbopack**: Habilitado por defecto en desarrollo
- **TypeScript**: Configuración estricta
- **App Router**: Utilizando la nueva estructura de carpetas

### Tailwind CSS

- **Versión 4**: Última versión con nuevas características
- **Dark Mode**: Configurado con class strategy
- **Customización**: Colores y animaciones personalizadas

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Soporte

Si tienes preguntas o necesitas ayuda:

- Abre un issue en GitHub
- Visita la [documentación oficial de GSAP](https://gsap.com/docs/)
- Visita la [documentación oficial de Next.js](https://nextjs.org/)

---

**GSAPMultidev** - Hecho con ❤️ para la comunidad de desarrolladores
