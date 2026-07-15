# DevFolio

> Portfolio profesional de Klaus Widemann — Backend Engineer & Head of Control & Procedures

**DevFolio** es mi portfolio personal, construido como una aplicación web standalone de alto rendimiento. Demuestra dominio práctico de las tecnologías que uso en producción: Next.js, TypeScript, React, Tailwind CSS, arquitectura de componentes y despliegue en la nube.

---

## 🏗️ Arquitectura del proyecto

```
DevFolio/
├── src/
│   ├── app/                    # Next.js 14 App Router (rutas con Server & Client Components)
│   │   └── (public)/           # Grupo de rutas públicas
│   │       ├── page.tsx        # Home (secciones: Hero, About, Projects, Skills, Blog, Contact)
│   │       ├── about/
│   │       ├── blog/          # Blog con paginación y tags
│   │       ├── projects/      # Portafolio de proyectos
│   │       ├── skills/        # Grid de habilidades por categoría
│   │       └── resume/        # CV renderizado desde MDX
│   ├── components/
│   │   ├── layout/            # Header, Footer, ThemeProvider, ThemeToggle
│   │   ├── sections/          # Secciones reutilizables (Hero, About, Projects, etc.)
│   │   └── animations/        # Componentes animados con Framer Motion
│   ├── data/
│   │   ├── content.ts         # Fuente de datos local (profile, projects, skills, blog)
│   │   └── resume.md          # CV en formato MDX
│   ├── hooks/
│   │   └── useApi.ts          # Capa de hooks con React Query (@tanstack/react-query v5)
│   ├── types/
│   │   ├── api.ts             # Tipos TypeScript (ProjectRead, BlogPostRead, SkillRead...)
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts           # Utilidades (clsx + tailwind-merge)
│   └── styles/
│       └── globals.css         # Variables CSS (modo claro/oscuro)
├── tailwind.config.ts          # Tailwind CSS con diseño token-driven
├── tsconfig.json               # TypeScript 5 (strict mode)
└── package.json                # pnpm como package manager
```

---

## ⚡ Tech Stack

| Categoría | Tecnología | Propósito |
|---|---|---|
| **Framework** | Next.js 14.2 (App Router) | SSR, SSG, Turbopack, RSC |
| **Lenguaje** | TypeScript 5 | Tipado estático, strict mode |
| **Estilos** | Tailwind CSS + PostCSS | Diseño token-driven, dark mode |
| **Data fetching** | @tanstack/react-query v5 | Cacheo, invalidación, tipado |
| **Animaciones** | Framer Motion 11 | Transiciones y micro-interacciones |
| **Validación** | Zod + react-hook-form | Validación de formularios tipada |
| **UI** | lucide-react + sonner | Iconos y notificaciones toast |
| **Contenido** | next-mdx-remote | Renderizado de MDX (CV) |
| **Package manager** | pnpm | Gestión de dependencias |
| **Testing** | Vitest + Playwright | Tests unitarios y E2E |

---

## 🎯 Características implementadas

- **🌙 Dark / Light Mode** — Cambio de tema con `next-themes`, variables CSS y transición suave
- **📱 Diseño responsive** — Mobile-first con Tailwind, breakpoints personalizados
- **🔍 SEO optimizado** — Metadata dinámica, Open Graph, Twitter cards, sitemap
- **⚡ Carga rápida** — Static Site Generation (SSG) para la mayoría de las rutas
- **🎨 Animaciones** — Framer Motion para transiciones de página y elementos
- **📄 CV interactivo** — Resume page que renderiza MDX con `next-mdx-remote`
- **📝 Blog con tags y paginación** — Filtrado por tag, paginación, rutas dinámicas
- **🔗 Compartir proyectos** — Botón de compartir con Web Share API
- **📊 Portfolio de proyectos** — Grid filtrable por categoría, páginas individuales
- **🛠️ Formulario de contacto** — Validación con Zod + react-hook-form
- **☁️ Despliegue listo** — Compatible con Vercel, Netlify y Docker

---

## 🚀 Despliegue

### Vercel (recomendado)

```bash
# Clona y despliega en un clic
git clone https://github.com/kwidemann/DevFolio.git
cd DevFolio
pnpm install
pnpm build
```

### Docker

```bash
docker build -t devfolio .
docker run -p 3000:3000 devfolio
```

---

## 🧩 Decisiones de arquitectura

### ¿Por qué standalone (sin backend)?

El portfolio es **standalone** por diseño. Toda la información vive en `src/data/content.ts`, lo que significa:

- **Cero dependencias externas** en runtime — no necesito mantener un servidor API ni base de datos
- **Despliegue en hosting estático** — Vercel, Netlify, GitHub Pages, o cualquier CDN
- **Velocidad máxima** — páginas pre-renderizadas en build time
- **Simplicidad operativa** — si el día de mañana quiero migrar a un CMS o API, la capa de hooks (`useApi.ts`) ya está diseñada para eso

### Capa de hooks con React Query

Aunque no hay backend, uso `@tanstack/react-query` como abstracción. Esto me permite:

- **Cachear datos** con `staleTime` configurado
- **Invalidar y refrescar** datos cuando sea necesario
- **Mantener la misma interfaz** que tendría con un API real
- **Preparado para migrar** a un backend sin cambiar los componentes

### TypeScript strict mode

Todo el proyecto usa TypeScript en modo estricto (`strict: true`). Los tipos `ProjectRead`, `BlogPostRead`, `SkillRead`, `ProfileRead` definen la forma exacta de cada dato, eliminando errores en tiempo de desarrollo.

---

## 📂 Datos locales

El contenido del portfolio vive en `src/data/content.ts`:

```typescript
// Profile, skills, projects y blog posts — todo tipado y en memoria
export const profile: ProfileRead = { ... }
export const skills: SkillRead[] = [...]
export const projects: ProjectRead[] = [...]
export const blogPosts: BlogPostRead[] = [...]

// Funciones de consulta con soporte para filtros y paginación
export function getProjects(params?: ProjectFilters): ProjectListRead
export function getBlogPosts(params?: BlogFilters): BlogPostListRead
export function getProjectBySlug(slug: string): ProjectRead | null
export function getBlogPostBySlug(slug: string): BlogPostRead | null
```

---

## 📸 Stack visual

- **Avatar dinámico** — Generado con [DiceBear](https://www.dicebear.com/) (API de avatares)
- **Imágenes de Unsplash** — Fotos de alta calidad para proyectos
- **Iconos Lucide** — Iconografía consistente y ligera
- **Tipografía** — Sistema de fuentes de Next.js (optimizado con `next/font`)

---

## 📬 Contacto

- **Email:** [kwidemann@gmail.com](mailto:kwidemann@gmail.com)
- **GitHub:** [github.com/kwidemann](https://github.com/kwidemann)
- **LinkedIn:** [linkedin.com/in/klaus-widemann](https://www.linkedin.com/in/klaus-widemann-774b9496)
- **Ubicación:** Valdivia, Chile

---

*Construido con Next.js, TypeScript y Tailwind CSS · Desplegado en Vercel* 
