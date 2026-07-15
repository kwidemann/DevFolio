import type { ProfileRead, ProjectRead, BlogPostRead, SkillRead } from '@/types';

export const profile: ProfileRead = {
  id: 1,
  name: 'Klaus Christopher Widemann Müller',
  title: 'Backend Engineer / Head of Control & Procedures',
  tagline: 'Backend engineer con experiencia en ERP, automatización de procesos y despliegues de producción.',
  bio: 'Ingeniero backend con más de 4 años de experiencia diseñando, construyendo, desplegando y manteniendo software de producción con Python. Construí y operé un ERP a medida para una escuela de conducción profesional, soportando administración, reportes, control de procesos y workflows de atención al cliente. Trabajo con FastAPI, Oracle SQL, Docker, GitHub Actions, Linux y despliegues en la nube. Mi foco es traducir requerimientos de negocio en soluciones técnicas confiables, automatizar tareas repetitivas y garantizar continuidad operativa.',
  short_bio: 'Backend engineer especializado en ERP, APIs y automatización. Experto en Python, FastAPI, Oracle SQL y despliegues productivos.',
  avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=klaus',
  email: 'kwidemann@gmail.com',
  location: 'Valdivia, Chile',
  website: 'https://devfolio.example.com',
  github_url: 'https://github.com/kwidemann',
  linkedin_url: 'https://www.linkedin.com/in/klaus-widemann-774b9496',
  twitter_url: null,
  cv_url: '/resume',
  social_links: [
    { platform: 'GitHub', url: 'https://github.com/kwidemann', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/klaus-widemann-774b9496', icon: 'linkedin' },
    { platform: 'Email', url: 'mailto:kwidemann@gmail.com', icon: 'mail' },
  ],
  created_at: '2024-01-01T00:00:00.000Z',
  updated_at: '2024-01-01T00:00:00.000Z',
};

export const skills: SkillRead[] = [
  { id: 1, name: 'Python', category: 'backend', proficiency: 5, icon: 'code', sort_order: 1, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 2, name: 'FastAPI', category: 'backend', proficiency: 5, icon: 'zap', sort_order: 2, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 3, name: 'Oracle SQL', category: 'database', proficiency: 5, icon: 'database', sort_order: 3, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 4, name: 'Relational Database Design', category: 'database', proficiency: 4, icon: 'database', sort_order: 4, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 5, name: 'SQL Query Optimization', category: 'database', proficiency: 4, icon: 'activity', sort_order: 5, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 6, name: 'Data Validation', category: 'backend', proficiency: 5, icon: 'shield', sort_order: 6, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 7, name: 'Backend Architecture', category: 'backend', proficiency: 4, icon: 'server', sort_order: 7, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 8, name: 'Business Logic Implementation', category: 'backend', proficiency: 5, icon: 'settings', sort_order: 8, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 9, name: 'Docker', category: 'devops', proficiency: 5, icon: 'box', sort_order: 9, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 10, name: 'GitHub Actions', category: 'devops', proficiency: 4, icon: 'git-branch', sort_order: 10, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 11, name: 'CI/CD Pipelines', category: 'devops', proficiency: 4, icon: 'repeat', sort_order: 11, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 12, name: 'Linux/CLI', category: 'tools', proficiency: 4, icon: 'terminal', sort_order: 12, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 13, name: 'Cloud Virtual Machines', category: 'devops', proficiency: 4, icon: 'cloud', sort_order: 13, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 14, name: 'Deployment Automation', category: 'devops', proficiency: 4, icon: 'rocket', sort_order: 14, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 15, name: 'Production Support', category: 'soft', proficiency: 5, icon: 'life-buoy', sort_order: 15, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 16, name: 'Git', category: 'tools', proficiency: 5, icon: 'git-branch', sort_order: 16, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 17, name: 'GitHub', category: 'tools', proficiency: 5, icon: 'github', sort_order: 17, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 18, name: 'VS Code', category: 'tools', proficiency: 5, icon: 'code', sort_order: 18, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 19, name: 'Google Workspace Administration', category: 'tools', proficiency: 4, icon: 'globe', sort_order: 19, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 20, name: 'Flet', category: 'tools', proficiency: 3, icon: 'layout', sort_order: 20, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 21, name: 'VBA', category: 'tools', proficiency: 3, icon: 'file-text', sort_order: 21, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 22, name: 'C# (Basic)', category: 'tools', proficiency: 3, icon: 'file-code', sort_order: 22, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 23, name: 'GitHub Copilot', category: 'tools', proficiency: 4, icon: 'robot', sort_order: 23, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 24, name: 'Proceso de automatización', category: 'soft', proficiency: 5, icon: 'settings', sort_order: 24, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 25, name: 'Workflow Optimization', category: 'soft', proficiency: 4, icon: 'trending-up', sort_order: 25, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 26, name: 'Comunicación con stakeholders', category: 'soft', proficiency: 4, icon: 'message-square', sort_order: 26, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
  { id: 27, name: 'Documentación y soporte', category: 'soft', proficiency: 4, icon: 'book-open', sort_order: 27, created_at: '2024-01-01T00:00:00.000Z', updated_at: '2024-01-01T00:00:00.000Z' },
];

export const projects: ProjectRead[] = [
  {
    id: 1,
    slug: 'erp-platform-todo-transporte',
    title: 'ERP Personalizado para Escuela de Conducción',
    short_description: 'ERP operativo para gestionar administración, reportes, control de procesos y atención al cliente.',
    description: 'Desarrollé y operé un ERP completo para una escuela de conducción profesional en Chile. La solución centralizó operaciones de administración, control de procesos, generación de reportes, gestión de clientes y automatización de flujos internos. Tecnologías principales: Python, FastAPI, Oracle SQL, Docker, GitHub Actions, Linux y despliegues en la nube. Impacto: reducción de tareas manuales, mayor control de datos operativos y continuidad de servicio en producción con soporte diario.',
    thumbnail_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200'],
    tech_stack: ['Python', 'FastAPI', 'Oracle SQL', 'Docker', 'GitHub Actions', 'Linux', 'CI/CD', 'Automatización', 'Reporting'],
    category: 'backend',
    featured: true,
    live_url: null,
    repo_url: null,
    case_study_url: null,
    start_date: '2020-05-01T00:00:00.000Z',
    end_date: '2024-09-01T00:00:00.000Z',
    is_current: true,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    slug: 'realtime-collab-editor',
    title: 'Editor Colaborativo en Tiempo Real',
    short_description: 'Editor de documentos estilo Notion/Google Docs con sincronización en tiempo real, comentarios y control de versiones.',
    description: 'Implementación de un editor colaborativo usando CRDTs (Conflict-free Replicated Data Types) para sincronización en tiempo real sin servidor central de sincronización. Soporta rich text, comentarios inline, sugerencias, historial de versiones y presencia de usuarios. Stack: Yjs, WebRTC, WebSocket, React, Slate.js, IndexedDB. Aprendizajes: resolución de conflictos distribuidos, optimización de rendimiento para documentos grandes y arquitectura offline-first con sincronización eventual.',
    thumbnail_url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    images: ['https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200'],
    tech_stack: ['React', 'TypeScript', 'Yjs', 'WebRTC', 'WebSocket', 'Slate.js', 'IndexedDB', 'Node.js'],
    category: 'web',
    featured: true,
    live_url: 'https://collab-editor.devfolio.example.com',
    repo_url: 'https://github.com/klauswidemann/realtime-collab-editor',
    case_study_url: 'https://devfolio.example.com/case-studies/realtime-collab-editor',
    start_date: '2023-09-01T00:00:00.000Z',
    end_date: '2024-02-15T00:00:00.000Z',
    is_current: false,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 3,
    slug: 'devfolio-portfolio',
    title: 'DevFolio - Este Portfolio',
    short_description: 'Portfolio personal dinámico con Next.js 14, FastAPI, SQLite, animaciones Framer Motion y dark mode.',
    description: 'Mi portfolio personal construido como proyecto de aprendizaje y showcase técnico. Monorepo con Turborepo, pnpm workspaces, Next.js App Router, FastAPI async, SQLModel, SQLite, Docker y CI/CD con GitHub Actions. Características: contenido dinámico desde API, animaciones fluidas con Framer Motion, dark mode persistente, responsive mobile-first, SEO optimizado y accesibilidad WCAG 2.1 AA. Objetivo: demostrar competencias full stack modernas.',
    thumbnail_url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    images: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200'],
    tech_stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'SQLModel', 'SQLite', 'Docker', 'Turborepo', 'pnpm'],
    category: 'web',
    featured: true,
    live_url: 'https://devfolio.example.com',
    repo_url: 'https://github.com/klauswidemann/devfolio',
    case_study_url: null,
    start_date: '2024-01-01T00:00:00.000Z',
    end_date: null,
    is_current: true,
    sort_order: 3,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    slug: 'taskflow-automation',
    title: 'TaskFlow - Automatización de Flujos de Trabajo',
    short_description: 'Motor de workflows visual tipo Zapier/n8n autoalojado, con editor visual y ejecución asíncrona.',
    description: 'Plataforma de automatización low-code para conectar APIs, bases de datos y servicios. Editor visual de flujos, motor de ejecución basado en DAG, sandbox seguro para código personalizado y marketplace de integraciones. Arquitectura: frontend React Flow, backend FastAPI, Celery, Redis y PostgreSQL. Estado: MVP funcional con integraciones nativas en desarrollo.',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    images: [],
    tech_stack: ['React', 'React Flow', 'TypeScript', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Pyodide', 'Docker', 'Kong', 'GitHub Actions'],
    category: 'web',
    featured: false,
    live_url: null,
    repo_url: 'https://github.com/klauswidemann/taskflow',
    case_study_url: null,
    start_date: '2024-01-01T00:00:00.000Z',
    end_date: null,
    is_current: true,
    sort_order: 4,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 5,
    slug: 'rust-cli-tools',
    title: 'Herramientas CLI en Rust',
    short_description: 'Colección de herramientas CLI de alto rendimiento escritas en Rust para grep paralelo, análisis de logs y generación de configs.',
    description: 'Proyecto de aprendizaje de Rust aplicado a herramientas de desarrollo reales. Incluye grep paralelo con regex, analizador de logs estructurados y generador de configs tipo Helm para Docker Compose. Enfoque: zero-cost abstractions, manejo de errores con Result/Option, testing property-based con proptest y benchmarks con criterion.',
    thumbnail_url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    images: [],
    tech_stack: ['Rust', 'Clap', 'Rayon', 'Serde', 'Regex', 'Criterion', 'Proptest'],
    category: 'tools',
    featured: false,
    live_url: null,
    repo_url: 'https://github.com/klauswidemann/rust-cli-tools',
    case_study_url: null,
    start_date: '2024-01-01T00:00:00.000Z',
    end_date: null,
    is_current: true,
    sort_order: 5,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
];

export const blogPosts: BlogPostRead[] = [
  {
    id: 1,
    slug: 'typescript-strict-mode-guide',
    title: 'TypeScript Strict Mode: Guía Completa para Equipos',
    excerpt: 'Por qué activar strict mode desde día uno, qué errores previene y cómo migrar un codebase existente.',
    content: `# TypeScript Strict Mode: Guía Completa para Equipos

## Por qué Strict Mode

El modo estricto de TypeScript (\`"strict": true\` en tsconfig.json) activa un conjunto de comprobaciones que capturan categorías enteras de bugs en tiempo de compilación.

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

Esto habilita:

- \`noImplicitAny\` - Evita \`any\` implícito
- \`strictNullChecks\` - Null/undefined checking
- \`strictFunctionTypes\` - Contravarianza correcta en funciones
- \`strictBindCallApply\` - Bind/call/apply typeados
- \`strictPropertyInitialization\` - Propiedades inicializadas en clases
- \`noImplicitThis\` - \`this\` tipado
- \`useUnknownInCatchVariables\` - \`unknown\` en catch

## Migración gradual

1. Activa una flag a la vez
2. Usa \`// @ts-expect-error\` temporalmente
3. Tipar boundary points (APIs externas, librerías sin tipos)
4. Habilita \`strict\` al final

## Beneficios medidos

- 15-25% menos bugs en producción
- Refactoring seguro
- Autocompletado inteligente
- Documentación viva

## Conclusión

Strict mode no es opcional para código profesional. El costo inicial de migración se paga con creces en mantenibilidad y confianza.`,
    cover_image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200',
    tags: ['TypeScript', 'Best Practices', 'Developer Experience'],
    published: true,
    published_at: '2024-01-15T10:00:00.000Z',
    reading_time: 8,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    slug: 'react-server-components-deep-dive',
    title: 'React Server Components: Deep Dive Práctico',
    excerpt: 'Entendiendo RSC desde los fundamentos: streaming, suspense y patrones de data fetching en Next.js 14.',
    content: `# React Server Components: Deep Dive Práctico

## El cambio de paradigma

RSC no es solo "renderizado en servidor". Es una **nueva primitiva de composición** que cambia cómo pensamos la arquitectura de aplicaciones React.

\`\`\`tsx
// Server Component (por defecto en App Router)
async function ProjectList() {
  const projects = await fetchProjects() // Direct DB access!
  return <ul>{projects.map(p => <ProjectCard key={p.id} {...p} />)}</ul>
}
\`\`\`

## Streaming & Suspense

\`\`\`tsx
// layout.tsx
export default function Layout({ children }) {
  return (
    <Suspense fallback={<ProjectListSkeleton />}>
      {children}
    </Suspense>
  )
}
\`\`\`

El HTML se streamea progresivamente. El usuario ve contenido antes de que todo termine.

## Data Fetching Patterns

### Parallel (Promise.all)

\`\`\`tsx
const [projects, skills, profile] = await Promise.all([
  fetchProjects(),
  fetchSkills(),
  fetchProfile(),
])
\`\`\`

### Sequential (waterfall intencional)

\`\`\`tsx
const profile = await fetchProfile()
const projects = await fetchProjects(profile.id) // depende de profile
\`\`\`

## Server Actions

\`\`\`tsx
'use server'
export async function createProject(formData: FormData) {
  const data = validateProject(formData)
  await db.project.create({ data })
  revalidatePath('/projects')
}
\`\`\`

## Conclusión

RSC + Next.js 14 = Full stack React real. Menos JavaScript en cliente, mejor SEO, mejor rendimiento, DX superior.`,
    cover_image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200',
    tags: ['React', 'Next.js', 'RSC', 'Architecture'],
    published: true,
    published_at: '2024-02-20T14:30:00.000Z',
    reading_time: 12,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 3,
    slug: 'docker-multi-stage-builds',
    title: 'Docker Multi-stage Builds: Imágenes 10x Más Pequeñas',
    excerpt: 'Técnicas avanzadas de multi-stage builds, cache layers, distroless y security hardening.',
    content: `# Docker Multi-stage Builds: Imágenes 10x Más Pequeñas

## El problema

Una imagen Node.js típica: **1.2 GB**. La misma app optimizada: **45 MB**.

## Patrón multi-stage

\`\`\`dockerfile
# Base stage - dependencias
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Builder - compile/build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner - producción mínima
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
USER node
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

## Distroless

\`\`\`dockerfile
FROM gcr.io/distroless/nodejs20-debian12
COPY --from=builder /app /app
WORKDIR /app
USER nonroot
CMD ["server.js"]
\`\`\`

## Cache Optimization

- Ordena COPY de menos a más frecuente
- \`package*.json\` antes que código fuente
- Usa \`--mount=type=cache\` para npm/yarn/pnpm cache

## Security Hardening

- Non-root user (USER node / USER 1000)
- Read-only filesystem (--read-only)
- Drop capabilities (--cap-drop=ALL)
- No shell (distroless / scratch)

## Resultados

| Stage | Size |
|-------|------|
| node:20 | 1.2 GB |
| node:20-alpine | 180 MB |
| Multi-stage alpine | 65 MB |
| Distroless | 45 MB |

45 MB = despliegues más rápidos, menos superficie de ataque, menos costo de transferencia.`,
    cover_image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200',
    tags: ['Docker', 'DevOps', 'Optimization', 'Security'],
    published: true,
    published_at: '2024-03-10T09:00:00.000Z',
    reading_time: 10,
    sort_order: 3,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    slug: 'sqlmodel-fastapi-async-patterns',
    title: 'Patrones Async con SQLModel + FastAPI',
    excerpt: 'Mejores prácticas para operaciones asíncronas con SQLModel y FastAPI.',
    content: `# Patrones Async con SQLModel + FastAPI

## Configuración Base

\`\`\`python
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlmodel import SQLModel

engine = create_async_engine(
    "sqlite+aiosqlite:///./app.db",
    echo=True,
)

async_session = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

async def get_session() -> AsyncSession:
    async with async_session() as session:
        yield session
\`\`\`

## Dependency Injection en FastAPI

\`\`\`python
from fastapi import Depends

@app.get("/projects/")
async def list_projects(
    session: AsyncSession = Depends(get_session),
    offset: int = 0,
    limit: int = 10,
):
    result = await session.exec(
        select(Project).offset(offset).limit(limit)
    )
    return result.all()
\`\`\`

## Transacciones Explícitas

\`\`\`python
async def transfer_funds(from_id: int, to_id: int, amount: float):
    async with async_session() as session:
        async with session.begin():
            from_account = await session.get(Account, from_id)
            to_account = await session.get(Account, to_id)
            
            if from_account.balance < amount:
                raise InsufficientFunds()
            
            from_account.balance -= amount
            to_account.balance += amount
            
            session.add(from_account)
            session.add(to_account)
\`\`\`

## Conclusión

Async SQLModel + FastAPI = código limpio, type-safe y performante. La clave: \`expire_on_commit=False\` y transacciones explícitas.`,
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    tags: ['Python', 'FastAPI', 'SQLModel', 'Async', 'Database'],
    published: true,
    published_at: '2024-04-05T16:45:00.000Z',
    reading_time: 15,
    sort_order: 4,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
];

export function getProjects(params?: { featured?: boolean; category?: string }) {
  let items = projects;
  if (params?.featured) items = items.filter((project) => project.featured);
  if (params?.category) items = items.filter((project) => project.category === params.category);
  return {
    projects: items,
    total: items.length,
    page: 1,
    page_size: items.length,
    total_pages: 1,
  };
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) || null;
}

export function getBlogPosts(params?: { tag?: string; page?: number; page_size?: number }) {
  const posts = params?.tag
    ? blogPosts.filter((post) => post.tags.includes(params.tag!))
    : blogPosts;

  const page = params?.page ?? 1;
  const page_size = params?.page_size ?? posts.length;
  const start = (page - 1) * page_size;
  const pagedPosts = posts.slice(start, start + page_size);

  return {
    posts: pagedPosts,
    total: posts.length,
    page,
    page_size,
    total_pages: Math.max(1, Math.ceil(posts.length / page_size)),
  };
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getBlogTags() {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getSkills(params?: { category?: string }) {
  return params?.category ? skills.filter((skill) => skill.category === params.category) : skills;
}

export function getSkillCategories() {
  return Array.from(new Set(skills.map((skill) => skill.category))).sort();
}

export function getProjectCategories() {
  return Array.from(new Set(projects.map((project) => project.category))).sort();
}

export function submitContactMessage(data: { name: string; email: string; subject: string; message: string }) {
  return new Promise<{ success: boolean; message: string }>((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Mensaje enviado correctamente. Responderé lo antes posible.' });
    }, 500);
  });
}
