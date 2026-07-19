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

### Tabla resumen

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

### Explicación detallada de cada tecnología

#### **Next.js 14 (App Router)** — *Framework principal*
- **Qué es:** Framework React full-stack con renderizado híbrido (SSR, SSG, ISR, RSC).
- **Rol en el proyecto:** Motor de la aplicación. Usa **App Router** (no Pages Router) para aprovechar **React Server Components** por defecto, **Server Actions**, y **Streaming SSR**.
- **Por qué aquí:** Permite pre-renderizar páginas estáticas (SSG) para máximo rendimiento SEO, mientras mantiene interactividad del lado del cliente donde se necesita (ThemeToggle, formularios, animaciones). Turbopack acelera el dev server y builds.

#### **TypeScript 5 (strict mode)** — *Lenguaje base*
- **Qué es:** Superset tipado de JavaScript que compila a JS plano.
- **Rol en el proyecto:** Todo el código (componentes, hooks, tipos API, datos) está tipado. `strict: true` en `tsconfig.json` obliga a tipado exhaustivo: `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`, etc.
- **Por qué aquí:** Elimina clases enteras de bugs en tiempo de desarrollo. Los tipos `ProjectRead`, `BlogPostRead`, `SkillRead`, `ProfileRead` en `src/types/api.ts` son el contrato único de datos — si cambian, TypeScript avisa en todos los consumidores.

#### **Tailwind CSS + PostCSS** — *Sistema de estilos*
- **Qué es:** Framework CSS utility-first + procesador PostCSS (autoprefixer, nesting).
- **Rol en el proyecto:** **Diseño token-driven** — colores, espaciados, tipografía, breakpoints y **dark mode** definidos en `tailwind.config.ts` y `globals.css` como variables CSS (`--color-primary`, `--radius`, etc.). No hay CSS arbitrario: todo viene del design system.
- **Por qué aquí:** Consistencia visual garantizada, bundle CSS mínimo (solo utilities usadas), dark mode nativo con `class` strategy (`next-themes` togglea `html.dark`), responsive mobile-first sin media queries manuales.

#### **@tanstack/react-query v5 (TanStack Query)** — *Capa de datos y cache*
- **Qué es:** Librería de *server state management* — fetching, caching, sincronización, invalidación.
- **Rol en el proyecto:** Abstracción en `src/hooks/useApi.ts`. Aunque el portfolio es **standalone** (datos en `content.ts`), React Query provee: `staleTime` para evitar refetch innecesarios, `queryKey` tipados, `prefetch` en Server Components, y la **misma interfaz** que tendría con un backend real.
- **Por qué aquí:** Preparado para migrar a API externa sin tocar componentes. Devtools en desarrollo para inspeccionar cache. Tipado end-to-end con los tipos de `api.ts`.

#### **Framer Motion 11** — *Animaciones y transiciones*
- **Qué es:** Librería de animaciones declarativa para React (spring, keyframes, layout animations, exit animations).
- **Rol en el proyecto:** Transiciones de página (`AnimatePresence` + `motion.div` en layout), micro-interacciones en botones (hover/tap scale), entrada escalonada de listas (`staggerChildren`), y animaciones de scroll (`whileInView`).
- **Por qué aquí:** API simple y performante (usa `transform`/`opacity` para 60fps), reduce boilerplate vs CSS animations, y maneja *layout shift* automático con `layout` prop.

#### **Zod + react-hook-form** — *Validación de formularios tipada*
- **Qué es:** Zod = schema validation TypeScript-first. react-hook-form = form state management performante (uncontrolled inputs, minimal re-renders).
- **Rol en el proyecto:** Formulario de contacto (`ContactForm.tsx`). Schema Zod define `ContactSchema` → infiere `ContactFormData` type → `useForm<ContactFormData>({ resolver: zodResolver(ContactSchema) })`.
- **Por qué aquí:** **Single source of truth** — el schema Zod *es* el tipo TypeScript. Validación en cliente + servidor (si hubiera API) con el mismo schema. Mensajes de error tipados y localizables.

#### **lucide-react + sonner** — *UI primitives*
- **lucide-react:** Set de iconos SVG optimizados (tree-shakeable, ~400 icons, 0 deps). Usados en Hero, Skills, Projects, Footer, ThemeToggle.
- **sonner:** Toast notifications accesibles, animadas, sin portal hell. Usado en formulario de contacto (éxito/error) y botón compartir (copiado).
- **Por qué aquí:** Ligeros, consistentes, accesibles (ARIA), y sonner no requiere `Toaster` wrapper global — se auto-monta.

#### **next-mdx-remote** — *Renderizado MDX*
- **Qué es:** Compila MDX (Markdown + JSX) a React components en build time o runtime, sin `next-mdx` plugin (que requiere configuración compleja).
- **Rol en el proyecto:** Renderiza `src/data/resume.md` en la página `/resume`. Permite componentes React dentro del MDX (ej. `<SkillBadge />`, `<ProjectCard />`) via `components` prop.
- **Por qué aquí:** CV versionable en Markdown, extensible con componentes interactivos, y SSG-friendly (se compila en build).

#### **pnpm** — *Gestor de paquetes*
- **Qué es:** Package manager rápido, disk-efficient (content-addressable store), con workspaces nativos.
- **Rol en el proyecto:** `pnpm install` → `node_modules` con hardlinks/symlinks al store global (~70% menos espacio). `pnpm-workspace.yaml` habilita monorepo si se añade backend/shared packages.
- **Por qué aquí:** Velocidad de install en CI/CD, `pnpm dlx` para tooling sin instalar globalmente, `pnpm audit` / `pnpm outdated` integrados.

#### **Vitest + Playwright** — *Testing*
- **Vitest:** Test runner nativo Vite (compatible Jest API). Unit/integration tests para hooks (`useApi`), utils (`clsx`, `formatDate`), componentes aislados. `jsdom` environment, coverage con `v8`.
- **Playwright:** E2E cross-browser (Chromium, Firefox, WebKit). Tests de flujos críticos: navegación, theme toggle, form submit, responsive breakpoints. Corre en CI headless.
- **Por qué aquí:** Vitest comparte config Vite/TS del proyecto (zero-config). Playwright prueba *lo que ve el usuario* en navegadores reales. Juntos cubren unidad + integración + E2E.

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
