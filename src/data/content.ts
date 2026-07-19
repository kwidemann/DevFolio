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
    tech_stack: ['Python', 'FastAPI', 'Flet', 'Oracle SQL', 'Docker', 'GitHub Actions', 'Linux', 'CI/CD', 'Automatización', 'Reporting'],
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
    challenges: [
      'Diseñar esquema Oracle normalizado para módulos: alumnos, vehículos, instructores, pagos, exámenes, reportes',
      'Migrar datos legacy de Excel/Access a Oracle sin pérdida de información histórica',
      'Implementar autenticación y autorización por roles (admin, instructor, recepción, gerencia)',
      'Automatizar generación de certificados y reportes oficiales para autoridad de tránsito',
      'Garantizar uptime 99.9% en producción con despliegues zero-downtime via Docker + GitHub Actions',
      'Soporte diario a usuarios no técnicos: capacitación, debugging remoto, mejoras continuas',
    ],
    learnings: [
      'Oracle SQL bien indexado + vistas materializadas = reportes complejos en <500ms',
      'FastAPI + Pydantic validan datos de entrada antes de tocar la BD, evitando corrupción',
      'Docker multi-stage + healthchecks = despliegues confiables sin intervención manual',
      'GitHub Actions matrix strategy permite testear contra Oracle 19c/21c en cada PR',
      'Documentación viva (OpenAPI/Swagger) reduce onboarding de nuevos devs de semanas a días',
      'Escuchar al usuario final (instructores/recepción) descubre edge cases que los specs no cubren',
    ],
  },
  {
    id: 2,
    slug: 'flet-dashboard',
    title: 'Dashboard Multi-API con Flet',
    short_description: 'Dashboard de escritorio y web construido con Flet (Python), integrando 5 APIs externas reales con arquitectura de servicios, testing de contrato y dark mode.',
    description: 'Dashboard multiplataforma (escritorio + web) construido con Flet, el framework de UI de Python basado en Flutter. La aplicación integra 5 APIs externas reales — Chuck Norris, CoinGecko, Open-Meteo (clima), PokéAPI y Open Library — con una arquitectura de servicios limpia que usa httpx async y dataclasses para tipado de respuestas. Incluye testing de contrato con JSON Schema (jsonschema + respx) que valida que las APIs externas mantienen sus contratos antes de cada despliegue. Estructura modular con servicios, páginas, componentes, routers y theme separados. Logging estructurado con niveles configurables, navegación con NavigationRail, y tema oscuro persistente. Este proyecto aplica las mismas prácticas que uso en el ERP de producción: arquitectura limpia, testing riguroso, manejo de errores y documentación de APIs externas.',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'],
    tech_stack: ['Python', 'Flet', 'httpx', 'asyncio', 'dataclasses', 'pytest', 'pytest-asyncio', 'respx', 'jsonschema', 'pytest-cov', 'Logging', 'NavigationRail', 'Dark Mode'],
    category: 'backend',
    featured: true,
    live_url: null,
    repo_url: 'https://github.com/kwidemann/proyecto-flet',
    case_study_url: null,
    start_date: '2024-01-01T00:00:00.000Z',
    end_date: '2025-06-01T00:00:00.000Z',
    is_current: false,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
    challenges: [
      'Integrar 5 APIs heterogéneas (REST, GraphQL-like, sin auth / API key / rate limits) bajo una interfaz unificada',
      'Diseñar arquitectura de servicios desacoplada: cada API tiene su propio servicio, modelo y test de contrato',
      'Implementar contract testing con JSON Schema + respx para mockear respuestas y validar schemas en CI',
      'Manejar rate limits y errores de red con retry exponencial, circuit breaker y fallback graceful',
      'Sincronizar estado entre UI (Flet/Flutter) y servicios async sin bloquear el event loop',
      'Empaquetar como ejecutable standalone (PyInstaller) y servir como web app desde el mismo código',
    ],
    learnings: [
      'httpx.AsyncClient + dataclasses = tipado estricto de respuestas JSON sin boilerplate',
      'jsonschema + respx en pytest detecta breaking changes de APIs externas ANTES de deploy',
      'Flet permite compartir 90% del código entre desktop y web, pero requiere cuidado con assets/paths',
      'Logging estructurado (structlog) con correlation IDs hace debugging en producción trivial',
      'NavigationRail + page routing manual en Flet da control total pero exige disciplina de estado',
      'Dark mode persistente: guardar preferencia en localStorage (web) / JSON config (desktop)',
    ],
  },
  {
    id: 3,
    slug: 'devfolio-portfolio',
    title: 'DevFolio - Este Portfolio',
    short_description: 'Portfolio personal standalone con Next.js 14, TypeScript, Tailwind CSS, Framer Motion y dark mode.',
    description: 'Mi portfolio personal construido como proyecto standalone de alto rendimiento. Next.js 14 App Router con React Server Components, TypeScript strict mode, Tailwind CSS token-driven, Framer Motion para animaciones, dark mode con next-themes, y datos locales tipados en content.ts. Características: SSG para máximo rendimiento SEO, animaciones fluidas, dark mode persistente, responsive mobile-first, SEO optimizado, accesibilidad WCAG 2.1 AA, y arquitectura preparada para migrar a API externa sin tocar componentes. Despliegue en Vercel, Netlify o Docker. Objetivo: demostrar competencias modernas de frontend y arquitectura.',
    thumbnail_url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    images: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200'],
    tech_stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-themes', '@tanstack/react-query', 'Zod', 'react-hook-form', 'lucide-react', 'sonner', 'next-mdx-remote', 'pnpm', 'Vitest', 'Playwright'],
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
    challenges: [
      'Migrar de mentalidad SPA (Client Components) a React Server Components + Server Actions',
      'Implementar SSG con generateStaticParams para 50+ páginas (proyectos, blog, tags) sin build time excesivo',
      'Diseñar sistema de tokens Tailwind (colors, spacing, typography) consistente y extensible',
      'Orquestar animaciones Framer Motion (layout, scroll, exit) sin jank en mobile',
      'Configurar dark mode persistente (next-themes) sin flash de contenido incorrecto (FOUC)',
      'Estructurar content.ts como "headless CMS" local tipado, listo para swap a API real',
    ],
    learnings: [
      'RSC por defecto reduce bundle JS ~40%: solo hidratas lo interactivo (botones, forms, animaciones)',
      'generateStaticParams + revalidate = builds rápidos + contenido fresco sin SSR runtime',
      'Tailwind @theme (v3.4+) centraliza design tokens: un cambio propaga a toda la app',
      'Framer Motion layout animations "just work" si usas keys estables y evitas re-renders innecesarios',
      'next-themes attribute="class" + CSS variables = zero FOUC, zero hydration mismatch',
      'Zod schemas en content.ts = validación en build time + tipos inferidos en componentes',
    ],
  },
  {
    id: 4,
    slug: 'fastapi-rest-api',
    title: 'API REST con FastAPI, SQLModel y Testing',
    short_description: 'API REST completa con FastAPI, validación Pydantic, persistencia SQLModel/SQLite, autenticación HTTP Basic, middleware de logging y 14 tests con pytest.',
    description: 'API REST construida con FastAPI que implementa un CRUD completo de items con persistencia en SQLite vía SQLModel, validación de datos con Pydantic (incluyendo validadores custom para email y longitud de nombre), autenticación con HTTP Basic Credentials, y un middleware personalizado para logging de cada petición HTTP. La arquitectura es modular: routers separados por recurso (items y auth), capa de base de datos con dependency injection (get_session), modelos Pydantic y SQLModel con ConfigDict y field_validators. Incluye 14 tests con pytest cubriendo CRUD, paginación, búsqueda con filtros y ordenamiento, autenticación (casos válidos e inválidos), validación de modelos, middleware y metadatos OpenAPI. Documentación automática con Swagger UI (/docs) y ReDoc (/redoc). Endpoints: GET/POST/PUT/DELETE /items, GET /items/search con name, sort, limit y offset, y GET /secure/ protegido con auth. Este proyecto demuestra las prácticas que uso en producción: arquitectura limpia, validación rigurosa, testing exhaustivo y documentación automática.',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'],
    tech_stack: ['Python', 'FastAPI', 'SQLModel', 'Pydantic', 'SQLite', 'Uvicorn', 'pytest', 'HTTP Basic Auth', 'Middleware', 'OpenAPI', 'Swagger UI', 'Dependency Injection'],
    category: 'backend',
    featured: true,
    live_url: null,
    repo_url: 'https://github.com/kwidemann/proyecto-fastapi',
    case_study_url: null,
    start_date: '2024-01-01T00:00:00.000Z',
    end_date: '2025-06-01T00:00:00.000Z',
    is_current: false,
    sort_order: 4,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
    challenges: [
      'Diseñar modelos SQLModel que sirvan tanto como tablas DB como schemas Pydantic de respuesta',
      'Implementar validadores Pydantic v2 (field_validator, model_validator) para reglas de negocio complejas',
      'Crear middleware de logging que capture request/response sin afectar performance (async, no-blocking)',
      'Configurar Dependency Injection de FastAPI para sesión DB (get_session) con lifecycle correcto',
      'Escribir 14 tests pytest cubriendo: CRUD, paginación, filtros, auth, validación, middleware, OpenAPI',
      'Generar OpenAPI spec completa con ejemplos, códigos de error y security schemes automáticamente',
    ],
    learnings: [
      'SQLModel = SQLAlchemy + Pydantic en una sola definición: DRY real, sin duplicar modelos',
      'Pydantic v2 field_validator(mode="before") transforma input ANTES de validar (ej. email lowercase)',
      'FastAPI middleware + structlog = observabilidad completa con 20 líneas de código',
      'Depends(get_session) con yield = transacción automática: commit en éxito, rollback en excepción',
      'pytest-asyncio + httpx.AsyncClient = tests de integración reales contra app FastAPI viva',
      'OpenAPI generado por FastAPI alimenta Swagger UI, ReDoc, y clientes tipados (openapi-typescript)',
    ],
  },
  {
    id: 5,
    slug: 'twenty-crm-self-hosting',
    title: 'Self-Hosting de Twenty CRM con Docker',
    short_description: 'Despliegue completo del CRM open-source Twenty en Windows con Docker Compose, incluyendo servidor, worker, PostgreSQL y Redis.',
    description: 'Repositorio que documenta el proceso completo de despliegue del CRM open-source Twenty en Windows usando Docker Desktop y Docker Compose. La configuración incluye 4 servicios: servidor (app principal), worker (procesamiento en segundo plano), PostgreSQL 16 (base de datos con healthcheck) y Redis (caché). El docker-compose.yml configura más de 20 variables de entorno incluyendo conexión a base de datos, claves de cifrado, almacenamiento (local o S3), y opciones comentadas para integraciones de Google Calendar, Microsoft y email SMTP. Incluye script PowerShell automatizado (deploy.ps1) con acciones de deploy, clean, logs, stop y status, validación de Docker y archivo .env antes de ejecutar. Documentación completa: README principal, guía rápida de despliegue, checklist previo, guía detallada, troubleshooting con 5 errores comunes (auth, puerto, migraciones, Docker daemon, archivos), e índice de documentación. Plantilla .env.example con todas las variables necesarias. Este proyecto demuestra habilidades en Docker Compose, configuración de servicios con healthchecks, scripts de automatización en PowerShell, documentación técnica profesional y gestión de variables de entorno sensibles.',
    thumbnail_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    images: [],
    tech_stack: ['Docker', 'Docker Compose', 'PostgreSQL', 'Redis', 'PowerShell', 'Twenty CRM', 'Environment Variables', 'Healthchecks', 'Self-Hosting'],
    category: 'devops',
    featured: false,
    live_url: null,
    repo_url: 'https://github.com/kwidemann/self-hosting-de-Twenty-con-Docker',
    case_study_url: null,
    start_date: '2024-01-01T00:00:00.000Z',
    end_date: '2024-06-01T00:00:00.000Z',
    is_current: false,
    sort_order: 5,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
    challenges: [
      'Orquestar 4 servicios interdependientes (app, worker, PostgreSQL, Redis) con healthchecks y orden de inicio correcto',
      'Configurar 20+ variables de entorno sensibles (DB, encryption keys, S3, OAuth providers) sin hardcodear secretos',
      'Adaptar imagen Docker oficial de Twenty (Linux) para correr nativamente en Windows con Docker Desktop',
      'Automatizar migraciones de BD y seed inicial en contenedor efímero antes de levantar la app principal',
      'Escribir script PowerShell robusto (deploy.ps1) con validaciones previas, logging coloreado y manejo de errores',
      'Documentar troubleshooting real: 5 errores comunes con causa raíz y solución verificada',
    ],
    learnings: [
      'Docker Compose depends_on + healthcheck = startup ordenado sin race conditions entre servicios',
      'PostgreSQL 16 + pg_trgm extension = búsquedas full-text rápidas en CRM sin ElasticSearch',
      'PowerShell try/catch/finally + Write-Host -ForegroundColor = CLI profesional en Windows',
      '.env.example versionado + .env en .gitignore = onboarding seguro para nuevos devs',
      'Twenty CRM usa Prisma ORM: migraciones idempotentes, pero requieren DB accesible al build time',
      'Self-hosting real = responsabilidad total: backups, updates, monitoring, security patches son tuyos',
    ],
  },
];

export const blogPosts: BlogPostRead[] = [
  {
    id: 1,
    slug: 'python-pandas-numpy-bit-optimization',
    title: 'Python, Pandas y NumPy: Cómo el Tamaño de Bits Cambia Drásticamente el Rendimiento',
    excerpt: 'Por qué trabajar con int8, int16, float32 vs int64/float64 puede reducir el tiempo de ejecución y memoria en proyectos de datos masivos, y la mecánica detrás de este fenómeno.',
    content: `# Python, Pandas y NumPy: Cómo el Tamaño de Bits Cambia Drásticamente el Rendimiento

## El problema invisible

En Python, \`int\` y \`float\` son objetos de precisión arbitraria (int) y double precision IEEE 754 (float64). En pandas/NumPy, el dtype por defecto suele ser \`int64\` y \`float64\`. Para datasets grandes, esto desperdicia memoria y CPU.

\`\`\`python
import pandas as pd
import numpy as np

# DataFrame típico: 10M filas, 5 columnas numéricas
df = pd.DataFrame({
    'id': np.arange(10_000_000, dtype='int64'),
    'value1': np.random.randn(10_000_000),
    'value2': np.random.randn(10_000_000),
    'category': np.random.randint(0, 100, 10_000_000, dtype='int64'),
    'flag': np.random.randint(0, 2, 10_000_000, dtype='int64'),
})

print(df.memory_usage(deep=True).sum() / 1e9, 'GB')
# ~1.6 GB solo en datos
\`\`\`

## La solución: dtypes adecuados

\`\`\`python
# Optimizando según rango real de valores
df_optimized = pd.DataFrame({
    'id': np.arange(10_000_000, dtype='int32'),        # 4 bytes vs 8
    'value1': np.random.randn(10_000_000).astype('float32'),  # 4 bytes vs 8
    'value2': np.random.randn(10_000_000).astype('float32'),
    'category': np.random.randint(0, 100, 10_000_000, dtype='uint8'),  # 1 byte!
    'flag': np.random.randint(0, 2, 10_000_000, dtype='bool'),       # 1 byte (packed)
})

print(df_optimized.memory_usage(deep=True).sum() / 1e9, 'GB')
# ~0.4 GB = 4x menos memoria
\`\`\`

## Por qué ocurre: la mecánica bajo el capó

### 1. **Ancho de banda de memoria (Memory Bandwidth)**

La CPU mueve datos desde RAM → L3 → L2 → L1 → registros. Cada bit cuenta:

- \`int64\`: 8 bytes por valor → 10M valores = 80 MB por columna
- \`int8\`: 1 byte por valor → 10M valores = 10 MB por columna

**Menos bytes = más datos caben en caché L1/L2 = menos cache misses = velocidad**

### 2. **Vectorización SIMD (AVX/SSE/NEON)**

NumPy/pandas usan instrucciones vectorizadas:

| Instrucción | Registros | Elementos por ciclo (int64) | Elementos por ciclo (int8) |
|-------------|-----------|----------------------------|----------------------------|
| AVX2 (256-bit) | 4 | 4 | 32 |
| AVX-512 | 8 | 8 | 64 |

**Procesar int8 es 8x más rápido por ciclo de CPU** porque caben 8x más elementos en el mismo registro vectorial.

### 3. **Operaciones aritméticas nativas**

\`\`\`python
# int64: instrucción ADD de 64 bits
# int8: instrucción VPADDB (packed byte add) - 32 elementos a la vez

import time
arr64 = np.random.randint(0, 100, 100_000_000, dtype='int64')
arr8  = arr64.astype('int8')

start = time.perf_counter(); arr64.sum(); print(f'int64: {time.perf_counter()-start:.3f}s')
start = time.perf_counter(); arr8.sum();  print(f'int8:  {time.perf_counter()-start:.3f}s')
# int64: ~0.045s
# int8:  ~0.008s  → 5-6x más rápido
\`\`\`

### 4. **Cache line utilization**

Una cache line = 64 bytes.
- \`int64\`: 8 valores por cache line
- \`int8\`: 64 valores por cache line

**8x mejor utilización de cada fetch de memoria**

## Guía práctica de dtypes

| Rango de valores | dtype recomendado | Bytes | Ahorro vs int64 |
|------------------|-------------------|-------|-----------------|
| 0–255 | \`uint8\` | 1 | 87.5% |
| -128–127 | \`int8\` | 1 | 87.5% |
| 0–65,535 | \`uint16\` | 2 | 75% |
| -32,768–32,767 | \`int16\` | 2 | 75% |
| 0–4.2B | \`uint32\` | 4 | 50% |
| -2.1B–2.1B | \`int32\` | 4 | 50% |
| Precisión ~7 dígitos | \`float32\` | 4 | 50% |
| Precisión ~15 dígitos | \`float64\` | 8 | 0% |

## Automático con pandas

\`\`\`python
def optimize_dtypes(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    for col in df.select_dtypes(include=['integer']).columns:
        cmin, cmax = df[col].min(), df[col].max()
        if cmin >= 0:
            if cmax <= 255: df[col] = df[col].astype('uint8')
            elif cmax <= 65535: df[col] = df[col].astype('uint16')
            elif cmax <= 4_294_967_295: df[col] = df[col].astype('uint32')
        else:
            if cmin >= -128 and cmax <= 127: df[col] = df[col].astype('int8')
            elif cmin >= -32768 and cmax <= 32767: df[col] = df[col].astype('int16')
            elif cmin >= -2_147_483_648 and cmax <= 2_147_483_647: df[col] = df[col].astype('int32')
    for col in df.select_dtypes(include=['float']).columns:
        df[col] = pd.to_numeric(df[col], downcast='float')
    return df

# Uso
df_opt = optimize_dtypes(df)
print(f'Memoria: {df.memory_usage().sum()/1e6:.1f} MB → {df_opt.memory_usage().sum()/1e6:.1f} MB')
\`\`\`

## Benchmarks reales típicos

| Operación | int64/float64 | int8/float32 | Speedup |
|-----------|---------------|--------------|---------|
| Suma 100M elementos | 45 ms | 8 ms | **5.6x** |
| GroupBy + agg | 2.3 s | 0.6 s | **3.8x** |
| Join 10M rows | 4.1 s | 1.2 s | **3.4x** |
| Memoria DataFrame | 1.6 GB | 0.4 GB | **4x menos** |

## Cuándo NO reducir bits

- **Riesgo overflow**: IDs únicos > 2.1B → necesitan int64
- **Precisión financiera**: decimales exactos → usa \`Decimal\` o \`float64\`
- **Interoperabilidad**: APIs/DBs que esperan int64
- **Operaciones intermedias**: acumuladores de suma → mantén int64/float64 internamente

## Conclusión

**El tamaño de bits no es un detalle de implementación; es una decisión de arquitectura.**

En datasets de 10M+ filas, elegir \`int8\` vs \`int64\` o \`float32\` vs \`float64\` marca la diferencia entre:
- **Segundos vs minutos** de ejecución
- **GB vs cientos de MB** de RAM
- **Cabe en caché L3** vs **thrashing de memoria**

Perfila tus datos, conoce tus rangos, y elige el dtype mínimo necesario. Tu CPU (y tu factura de cloud) te lo agradecerán.`,
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    tags: ['Python', 'Pandas', 'NumPy', 'Performance', 'Data Engineering', 'Optimization'],
    published: true,
    published_at: '2026-01-15T10:00:00.000Z',
    reading_time: 12,
    sort_order: 1,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    slug: 'transparencia-model-cards-ia-etica',
    title: 'Transparencia en IA: Model Cards, Opacidad y Herramientas Éticas',
    excerpt: 'Por qué la transparencia es requisito central en ML/DL, cómo documentar modelos con Model Cards, niveles de opacidad y herramientas para explicabilidad, medición de impacto y detección de sesgos.',
    content: `# Transparencia en IA: Model Cards, Opacidad y Herramientas Éticas

## Introducción: más allá del desempeño predictivo

En el desarrollo de sistemas de inteligencia artificial, el foco a menudo se coloca en métricas de desempeño: accuracy, F1, AUC. Pero cuando un modelo influye en decisiones que afectan a personas —créditos, salud, políticas públicas— el desempeño predictivo **no es suficiente**. La transparencia y la rendición de cuentas se vuelven requisitos centrales.

Esta guía cubre:
- Por qué la transparencia es fundamental en ML/DL
- Model Cards: documentación estructurada de modelos
- Niveles de opacidad y sus implicancias
- Herramientas para explicabilidad, medición de impacto y detección de sesgos

---

## Transparencia y opacidad en modelos de IA

La **transparencia** es la capacidad de un sistema para que sus acciones, decisiones y resultados sean claros, visibles y comprensibles para quienes se ven afectados y otras partes interesadas.

Conecta directamente con el *pipeline de machine learning*: no basta con entrenar un modelo que optimiza una métrica; también es necesario poder explicar:
- Qué hace el modelo
- Con qué datos se entrenó
- En qué condiciones funciona bien
- Cuándo podría fallar

La **opacidad** aparece cuando este entendimiento se pierde. Los sistemas de IA suelen percibirse como "cajas negras". Sin prácticas de transparencia, no se pueden cuestionar decisiones automatizadas ni identificar sesgos o errores.

### Dos dimensiones complementarias

| Dimensión | Enfoque |
|-----------|---------|
| **Transparencia en organizaciones** | Cómo las instituciones informan sobre objetivos, procesos, responsables, supervisión, políticas de datos, protocolos de validación, canales de reclamo y participación de grupos afectados |
| **Transparencia en sistemas de IA** | Documentación y explicabilidad de modelos: datos, variables influyentes, métricas, monitoreo de riesgos y sesgos en el tiempo |

---

## Model Cards: documentación estructurada de modelos

Las **Model Cards** son documentos que describen un modelo de aprendizaje automático, incluyendo entrenamiento, rendimiento, usos previstos y limitaciones. Su objetivo: ofrecer a personas técnicas y no técnicas un resumen claro de qué puede y no puede hacer el modelo.

### ¿Por qué Model Cards?

No existen procedimientos de documentación estandarizados para muchos modelos de ML/DL. Esto dificulta:
- Comprender sesgos sistemáticos
- Reproducir resultados
- Evaluar si un modelo es adecuado para un nuevo contexto

Las Model Cards acompañan al modelo desde su diseño hasta su despliegue, incluyendo métricas de sesgo y equidad además de desempeño tradicional.

### Estructura de una Model Card

#### 1. **Vista general**
Información básica: organización, fecha, versión, tipo de modelo (árbol de decisión, red neuronal), enlaces a recursos adicionales.

#### 2. **Detalles del modelo**
Arquitectura, algoritmos, hiperparámetros relevantes, librerías/frameworks, decisiones de diseño, evaluación y documentación.

#### 3. **Uso previsto**
Principales usos y usuarios primarios. **Usos fuera del alcance**: aplicaciones en las que el modelo **no debe utilizarse** porque no fue entrenado ni validado para ellas.

#### 4. **Factores**
Factores contextuales: grupos poblacionales, instrumentos, entornos de uso (ej. región específica, tipo de dispositivo de captura).

#### 5. **Métricas**
Medidas de rendimiento: accuracy, F1, AUC, MAE, etc. Umbrales de decisión y enfoques para manejar incertidumbre y variabilidad.

#### 6. **Datos**
Bases de entrenamiento/evaluación, motivación para elegirlas, criterios de inclusión/exclusión, preprocesamiento y anonimización.

#### 7. **Análisis cuantitativo**
Métricas desagregadas por grupo y análisis interseccionales. Objetivo: detectar funcionamiento desigual entre subgrupos poblacionales.

#### 8. **Consideraciones éticas**
Datos sensibles, impacto en vida humana, riesgos y daños, medidas de mitigación. Límites de uso en dominios críticos.

#### 9. **Advertencias y recomendaciones**
Pruebas pendientes, grupos no representados en los datos, características deseables de futuras bases de evaluación.

---

## Niveles de opacidad y explicabilidad

Incluso con Model Cards, no todos los modelos pueden explicarse igual. El nivel de opacidad afecta directamente la calidad de información que se puede entregar.

| Tipo de opacidad | Descripción | Estrategia de mitigación |
|------------------|-------------|---------------------------|
| **Opacidad general** | Mayor complejidad = menor capacidad de transparentar cómo se combinan variables. Relaciones causales difíciles de establecer. | Técnicas de explicabilidad local/global, revisión humana en decisiones de alto impacto |
| **Opacidad intencional** | Organización oculta detalles para proteger efectividad o propiedad intelectual (ej. detección de evasión fiscal). | Transparencia en usos previstos, métricas y gobernanza (no lógica completa) |
| **Opacidad analfabeta** | Modelo podría explicarse, pero usuarios/funcionarios carecen de formación técnica. | Capacitación, materiales en lenguaje claro y accesible |
| **Opacidad intrínseca** | Incluso el equipo técnico tiene dificultades (redes profundas a gran escala). | Técnicas de explicabilidad (SHAP, LIME), revisión humana, Model Cards como mínimo |

> **Objetivo práctico**: No es eliminar toda opacidad (a veces imposible), sino **identificar qué tipo está presente, reducirla cuando sea viable y diseñar salvaguardas apropiadas**.

---

## Herramientas complementarias para ética y equidad en IA

Las Model Cards se insertan en un ecosistema más amplio:

### Transparencia y explicabilidad

| Herramienta | Propósito |
|-------------|-----------|
| **Model Cards** | Documentan qué hace el modelo, datos de entrenamiento, métricas, condiciones de uso apropiado |
| **What-If Tool** | Exploración interactiva: rendimiento en situaciones hipotéticas, importancia de características, comportamiento por subgrupos |

### Medición de impacto

| Herramienta | Propósito |
|-------------|-----------|
| **Algorithm Impact Assessment** | Marco para identificar nivel de impacto según área de aplicación, riesgos y mitigaciones. Se usa *antes del despliegue* para decidir: usar tal cual, ajustar, o no implementar. |

### Identificación y mitigación de sesgos

| Herramienta | Propósito |
|-------------|-----------|
| **Aequitas** | Audita sesgos calculando métricas de equidad y señalando disparidades entre grupos |
| **AI Fairness 360** (IBM) | Detecta sesgos en modelos/datasets + ofrece técnicas de mitigación (reponderación, ajustes en funciones de pérdida) |
| **Fairlearn** (Microsoft) | Similar a AI Fairness 360: detección + mitigación de sesgos |

---

## Síntesis y referencias clave

Al trabajar con modelos de ML/DL:

1. **La transparencia es un requisito central** — no opcional cuando hay impacto en personas
2. **Model Cards** estandarizan la documentación: propósito, datos, métricas, usos, limitaciones
3. **Identifica el tipo de opacidad** (general, intencional, analfabeta, intrínseca) y aplica mitigaciones
4. **Usa herramientas complementarias**: What-If Tool para exploración, Algorithm Impact Assessment para decisión de despliegue, Aequitas/AI Fairness 360/Fairlearn para auditoría y mitigación de sesgos

### Referencias fundamentales

- **Mitchell et al. (2019)** — *Model Cards for Model Reporting* (FAT 2019)
- **Gebru et al. (2021)** — *Datasheets for Datasets* (CACM)
- **Bellamy et al. (2019)** — *AI Fairness 360* (IBM J. Res. Dev.)
- **Burrell (2016)** — *How the machine thinks?: Understanding opacity in ML* (Big Data & Society)
- **NIST (2023)** — *AI Risk Management Framework (AI RMF 1.0)*
- **UNESCO (2021)** — *Recomendación sobre la ética de la inteligencia artificial`,
    cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    tags: ['IA Ética', 'Transparencia', 'Model Cards', 'Sesgos', 'Explicabilidad', 'Gobernanza de IA', 'Responsible AI'],
    published: true,
    published_at: '2026-02-20T14:30:00.000Z',
    reading_time: 15,
    sort_order: 2,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },  {
    id: 3,
    slug: 'sqlalchemy-2-fastapi-async-patterns',
    title: 'SQLAlchemy 2.0 + FastAPI: Patrones Async Modernos',
    excerpt: 'La nueva API async de SQLAlchemy 2.0 con FastAPI: AsyncSession, async_sessionmaker, expire_on_commit=False, dependency injection, transacciones explícitas, patrones de repositorio y testing con rollback automático.',
    content: `# SQLAlchemy 2.0 + FastAPI: Patrones Async Modernos

## Por qué SQLAlchemy 2.0 cambia el juego

SQLAlchemy 2.0 (lanzado 2023) introduce una **API unificada y tipada** para async/await, eliminando la ambigüedad de la 1.x. La nueva interfaz \`AsyncSession\`, \`async_sessionmaker\` y \`create_async_engine\` son now *first-class citizens*, no wrappers sobre código sync.

\`\`\`python
# requirements.txt
sqlalchemy>=2.0
fastapi>=0.109
asyncpg>=0.29  # o aiosqlite para dev
pydantic>=2.5
\`\`\`

---

## Configuración Base: Engine + Session Factory

\`\`\`python
# database.py
from sqlalchemy.ext.asyncio import (
    create_async_engine,
    AsyncSession,
    async_sessionmaker,
    AsyncEngine,
)
from sqlalchemy.pool import NullPool
from sqlmodel import SQLModel  # o declarative_base() puro
from contextlib import asynccontextmanager
from typing import AsyncGenerator
import os

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql+asyncpg://user:pass@localhost:5432/dbname"
)

# Engine: pool_pre_ping evita conexiones rotas; NullPool para serverless
engine: AsyncEngine = create_async_engine(
    DATABASE_URL,
    echo=os.getenv("SQL_ECHO", "false").lower() == "true",
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
    # poolclass=NullPool,  # descomentar para AWS Lambda / Cloud Run
)

# Session factory: expire_on_commit=False evita SELECT extra tras commit
async_session_maker = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,  # control manual de flush
)


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    """Dependency para FastAPI: una sesión por request."""
    async with async_session_maker() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()


# Lifespan para crear/cerrar engine (FastAPI 0.109+)
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: crear tablas si no existen (solo dev)
    if os.getenv("ENV") == "development":
        async with engine.begin() as conn:
            await conn.run_sync(SQLModel.metadata.create_all)
    yield
    # Shutdown
    await engine.dispose()
\`\`\`

---

## Dependency Injection en FastAPI

\`\`\`python
# main.py
from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
sqlalchemy import select
from typing import Annotated
from models import Project, ProjectCreate, ProjectRead
from database import get_session, lifespan

app = FastAPI(title="Projects API", lifespan=lifespan)

SessionDep = Annotated[AsyncSession, Depends(get_session)]


@app.post("/projects/", response_model=ProjectRead, status_code=201)
async def create_project(
    project_in: ProjectCreate,
    session: SessionDep,
):
    project = Project.model_validate(project_in)
    session.add(project)
    await session.flush()  # obtiene ID sin commit
    await session.refresh(project)
    return project


@app.get("/projects/", response_model=list[ProjectRead])
async def list_projects(
    session: SessionDep,
    offset: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
):
    result = await session.exec(
        select(Project).offset(offset).limit(limit)
    )
    return result.all()


@app.get("/projects/{project_id}", response_model=ProjectRead)
async def get_project(project_id: int, session: SessionDep):
    project = await session.get(Project, project_id)
    if not project:
        raise HTTPException(404, "Project not found")
    return project
\`\`\`

---

## Transacciones Explícitas: El Patrón Correcto

\`\`\`python
# services/project_service.py
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from models import Project, Task
from schemas import ProjectCreate, TaskCreate


class ProjectService:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def create_with_tasks(
        self, project_in: ProjectCreate, tasks_in: list[TaskCreate]
    ) -> Project:
        """
        Crea proyecto + tareas en una sola transacción atómica.
        Si falla cualquier parte, todo se revierte.
        """
        project = Project.model_validate(project_in)
        self.session.add(project)
        await self.session.flush()  # project.id disponible

        tasks = [
            Task(**task.model_dump(), project_id=project.id)
            for task in tasks_in
        ]
        self.session.add_all(tasks)

        # NO hacemos commit aquí; el dependency get_session() lo hace
        # o usamos session.begin() para transacción anidada (savepoint)
        return project

    async def transfer_ownership(
        self, project_id: int, new_owner_id: int
    ) -> Project:
        """Transacción explícita con savepoint para lógica compleja."""
        async with self.session.begin():  # transacción explícita
            project = await self.session.get(Project, project_id)
            if not project:
                raise ValueError("Project not found")

            # Lógica de negocio: validaciones, eventos, etc.
            project.owner_id = new_owner_id
            project.updated_at = datetime.utcnow()

            # Flush forzado para detectar constraints early
            await self.session.flush()

            # Si algo falla aquí, rollback automático
            return project
\`\`\`

**Regla de oro**: Usa \`async with session.begin()\` cuando la operación es *una unidad de trabajo atómica* (múltiples writes, validaciones cross-entity). El dependency \`get_session()\` ya maneja commit/rollback por request.

---

## Patrones de Repositorio (Opcional pero Escalable)

\`\`\`python
# repositories/base.py
from abc import ABC, abstractmethod
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import Generic, TypeVar, Sequence
from sqlmodel import SQLModel

T = TypeVar("T", bound=SQLModel)


class BaseRepository(Generic[T], ABC):
    def __init__(self, session: AsyncSession, model: type[T]):
        self.session = session
        self.model = model

    async def get(self, id: int) -> T | None:
        return await self.session.get(self.model, id)

    async def get_all(
        self, offset: int = 0, limit: int = 100
    ) -> Sequence[T]:
        result = await self.session.exec(
            select(self.model).offset(offset).limit(limit)
        )
        return result.all()

    async def create(self, obj: T) -> T:
        self.session.add(obj)
        await self.session.flush()
        await self.session.refresh(obj)
        return obj

    async def delete(self, obj: T) -> None:
        await self.session.delete(obj)
        await self.session.flush()


# repositories/project_repo.py
from repositories.base import BaseRepository
from models import Project


class ProjectRepository(BaseRepository[Project]):
    def __init__(self, session: AsyncSession):
        super().__init__(session, Project)

    async def get_by_owner(self, owner_id: int) -> Sequence[Project]:
        result = await self.session.exec(
            select(Project).where(Project.owner_id == owner_id)
        )
        return result.all()
\`\`\`

---

## Relaciones y Carga Eficiente (Evitar N+1)

\`\`\`python
# models.py
from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
from datetime import datetime


class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=255)
    owner_id: int = Field(foreign_key="user.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)

    # Relación: selectinload evita N+1
    tasks: List["Task"] = Relationship(back_populates="project")


class Task(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    project_id: Optional[int] = Field(default=None, foreign_key="project.id")
    completed: bool = False

    project: Optional[Project] = Relationship(back_populates="tasks")
\`\`\`

\`\`\`python
# Carga eager con selectinload (ideal para colecciones)
from sqlalchemy.orm import selectinload

@app.get("/projects/{project_id}/with-tasks", response_model=ProjectWithTasks)
async def get_project_with_tasks(project_id: int, session: SessionDep):
    from sqlalchemy import select
    from sqlalchemy.orm import selectinload

    result = await session.exec(
        select(Project)
        .where(Project.id == project_id)
        .options(selectinload(Project.tasks))
    )
    project = result.first()
    if not project:
        raise HTTPException(404, "Project not found")
    return project
\`\`\`

| Estrategia | Cuándo usar | SQL generado |
|------------|-------------|--------------|
| \`selectinload\` | Colecciones (1-N, M-N) | 2 queries: parent + WHERE IN (ids) |
| \`joinedload\` | Relaciones 1-1, 1-N (pocos hijos) | 1 query con JOIN |
| \`lazyload\` (default) | Solo si accedes SIEMPRE | N+1 queries (¡evitar!) |

---

## Testing: Rollback Automático por Test

\`\`\`python
# conftest.py
import pytest
import pytest_asyncio
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.pool import StaticPool
from sqlmodel import SQLModel
from database import get_session
from main import app
from httpx import AsyncClient


@pytest_asyncio.fixture(scope="function")
async def test_engine():
    """Engine en memoria para tests - rápido y aislado."""
    engine = create_async_engine(
        "sqlite+aiosqlite:///:memory:",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)
    yield engine
    await engine.dispose()


@pytest_asyncio.fixture(scope="function")
async def session(test_engine):
    """Sesión con rollback automático al final del test."""
    async with AsyncSession(test_engine, expire_on_commit=False) as session:
        yield session
        await session.rollback()  # ¡Limpia todo!


@pytest_asyncio.fixture(scope="function")
async def client(session):
    """Cliente HTTP con override de dependency."""
    def override_get_session():
        yield session

    app.dependency_overrides[get_session] = override_get_session
    async with AsyncClient(app=app, base_url="http://test") as ac:
        yield ac
    app.dependency_overrides.clear()


# tests/test_projects.py
import pytest
from models import Project


@pytest.mark.asyncio
async def test_create_project(client):
    response = await client.post(
        "/projects/", json={"name": "Test Project", "owner_id": 1}
    )
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "Test Project"
    assert "id" in data


@pytest.mark.asyncio
async def test_list_projects(client):
    # Crear 3 proyectos
    for i in range(3):
        await client.post("/projects/", json={"name": f"Project {i}", "owner_id": 1})

    response = await client.get("/projects/")
    assert response.status_code == 200
    assert len(response.json()) == 3
\`\`\`

**Ventaja clave**: Cada test corre en su propia transacción que se hace *rollback* al final. **No necesitas limpiar la BD manualmente** — es instantáneo y aislado.

---

## Migraciones con Alembic (Async)

\`\`\`ini
# alembic.ini
[alembic]
script_location = migrations
sqlalchemy.url = postgresql+asyncpg://user:pass@localhost/dbname
# ...
\`\`\`

\`\`\`python
# migrations/env.py
import asyncio
from alembic import context
from sqlalchemy.ext.asyncio import create_async_engine
from models import SQLModel

config = context.config
target_metadata = SQLModel.metadata


def run_migrations_offline():
    context.configure(url=config.get_main_option("sqlalchemy.url"), target_metadata=target_metadata)
    with context.begin_transaction():
        context.run_migrations()


def do_run_migrations(connection):
    context.configure(connection=connection, target_metadata=target_metadata)
    with context.begin_transaction():
        context.run_migrations()


async def run_migrations_online():
    connectable = create_async_engine(config.get_main_option("sqlalchemy.url"))
    async with connectable.connect() as connection:
        await connection.run_sync(do_run_migrations)
    await connectable.dispose()


if context.is_offline_mode():
    run_migrations_offline()
else:
    asyncio.run(run_migrations_online())
\`\`\`

\`\`\`bash
# Generar migración
alembic revision --autogenerate -m "create projects table"

# Aplicar
alembic upgrade head

# En CI/CD (GitHub Actions)
- name: Run migrations
  run: alembic upgrade head
  env:
    DATABASE_URL: \${{ secrets.DATABASE_URL }}
\`\`\`

---

## Checklist de Producción

| ✅ | Práctica |
|---|----------|
| **Pool sizing** | \`pool_size=10, max_overflow=20\` ajustado a CPU cores |
| **Pre-ping** | \`pool_pre_ping=True\` evita conexiones muertas |
| **Timeouts** | \`connect_args={"command_timeout": 30}\` en engine |
| **Read replicas** | Segundo engine \`create_async_engine(READ_REPLICA_URL)\` para GET |
| **Prepared statements** | SQLAlchemy 2.0 los usa por defecto en asyncpg |
| **Health check** | Endpoint \`GET /health\` que hace \`SELECT 1\` |
| **Observabilidad** | \`echo=True\` en dev; \`sqlalchemy.engine\` logging en prod |

---

## Conclusión

SQLAlchemy 2.0 + FastAPI = **async nativo, type-safe, y performante**.

| Clave | Por qué importa |
|-------|-----------------|
| \`AsyncSession\` + \`async_sessionmaker\` | API unificada, sin \`sync_session\` wrappers |
| \`expire_on_commit=False\` | Evita SELECTs fantasmas tras commit |
| \`async with session.begin()\` | Transacciones atómicas explícitas |
| \`selectinload\` / \`joinedload\` | Elimina N+1 en relaciones |
| Test con rollback | Tests rápidos, aislados, sin cleanup manual |
| Alembic async | Migraciones versionadas en CI/CD |

**Stack recomendado 2024**: FastAPI 0.109+ + SQLAlchemy 2.0 + asyncpg + Pydantic 2 + Alembic + pytest-asyncio.`,
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    tags: ['Python', 'SQLAlchemy', 'FastAPI', 'Async', 'Database', 'SQLAlchemy 2.0', 'Backend'],
    published: true,
    published_at: '2026-03-10T09:00:00.000Z',
    reading_time: 18,
    sort_order: 3,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 4,
    slug: 'docker-proyectos-practico-despliegue',
    title: 'Docker para Proyectos: Por Qué y Cómo Desplegar en Contenedores',
    excerpt: 'La guía práctica para contenedorizar aplicaciones: consistencia entre entornos, Docker Compose, multi-stage builds, networking, volúmenes, CI/CD y patrones de producción.',
    content: `# Docker para Proyectos: Por Qué y Cómo Desplegar en Contenedores

## El problema real: "En mi máquina funciona"

Cada desarrollador conoce la frustración:
- Dependencias distintas entre dev/staging/prod
- Versiones de runtime (Python, Node, Java) que divergen
- Variables de entorno hardcodeadas
- "Works on my machine" → falla en producción

**Docker resuelve esto empaquetando la aplicación + dependencias + configuración en una unidad inmutable: la imagen.**

---

## Por qué Docker para despliegue (no solo para dev)

| Beneficio | Explicación práctica |
|-----------|---------------------|
| **Consistencia absoluta** | Misma imagen en laptop, CI, staging, prod. Zero drift. |
| **Aislamiento de dependencias** | App A usa Python 3.11, App B usa 3.9 → sin conflictos en el mismo host. |
| **Rollback instantáneo** | \`docker tag\` + \`docker run\` imagen anterior = rollback en segundos. |
| **Escalado horizontal** | \`docker compose up --scale web=3\` o Kubernetes HPA. |
| **Density** | 10-50 contenedores en un host vs 1-2 VMs. Menos costo cloud. |
| **Inmutable** | No hay "config drift": la imagen ES el artefacto deployable. |
| **Reproducibilidad** | \`docker build\` determinista = mismo hash = misma ejecución. |

---

## Flujo práctico: De código a producción

### 1. Dockerfile multi-stage (estándar 2024)

\`\`\`dockerfile
# ---- Base: dependencias del sistema ----
FROM python:3.11-slim AS base
RUN apt-get update && apt-get install -y --no-install-recommends     gcc libpq-dev curl &&     rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1

# ---- Deps: solo dependencias Python ----
FROM base AS deps
COPY requirements.txt requirements.lock.txt* ./
RUN pip install --no-cache-dir -r requirements.txt

# ---- Builder: compile/build assets ----
FROM deps AS builder
COPY . .
RUN python -m compileall .  # bytecode precompilado

# ---- Runner: imagen final mínima ----
FROM base AS runner
COPY --from=builder /app /app
COPY --from=deps /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Usuario no-root (seguridad)
RUN useradd --create-home --shell /bin/bash app && chown -R app:app /app
USER app

EXPOSE 8000
CMD ["gunicorn", "main:app", "--workers", "4", "--bind", "0.0.0.0:8000"]
\`\`\`

**Resultado típico**: 1.2 GB → **85 MB** (Python slim + multi-stage).

---

### 2. Docker Compose: Dev + Staging + Prod con un archivo

\`\`\`yaml
# docker-compose.yml (base)
services:
  web:
    build:
      context: .
      target: runner
    ports: ["8000:8000"]
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/app
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: user
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d app"]
      interval: 5s
      timeout: 3s
      retries: 10
    secrets:
      - db_password

  redis:
    image: redis:7-alpine
    volumes:
      - redisdata:/data

volumes:
  pgdata:
  redisdata:

secrets:
  db_password:
    file: ./secrets/db_password.txt
\`\`\`

\`\`\`yaml
# docker-compose.prod.yml (override para prod)
services:
  web:
    build:
      target: runner
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
  db:
    deploy:
      resources:
        limits:
          memory: 1G
    command: ["postgres", "-c", "max_connections=200"]
\`\`\`

**Uso:**
\`\`\`bash
# Dev local
docker compose up -d

# Staging (con variables de entorno)
docker compose -f docker-compose.yml -f docker-compose.staging.yml up -d

# Prod
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
\`\`\`

---

### 3. Variables de entorno y secretos: La forma correcta

| Tipo | Dónde | Ejemplo |
|------|-------|---------|
| **Config no sensible** | \`.env\` (gitignored) o \`environment:\` en compose | \`LOG_LEVEL=info\` |
| **Secrets (prod)** | Docker Secrets / Kubernetes Secrets / Vault | \`POSTGRES_PASSWORD_FILE=/run/secrets/db_pass\` |
| **Build args** | \`ARG\` en Dockerfile, \`--build-arg\` en build | \`ARG PYTHON_VERSION=3.11\` |

\`\`\`dockerfile
# Build args para flexibilidad
ARG PYTHON_VERSION=3.11
FROM python:\${PYTHON_VERSION}-slim AS base
\`\`\`

\`\`\`bash
docker build --build-arg PYTHON_VERSION=3.12 -t miapp:latest .
\`\`\`

---

### 4. Networking: Comunicación entre servicios

\`\`\`yaml
services:
  web:
    networks: [frontend, backend]
  api:
    networks: [backend]
  db:
    networks: [backend]

networks:
  frontend:  # expuesto a internet (reverse proxy)
  backend:   # interno, sin salida externa
\`\`\`

- **Service discovery**: \`web\` habla con \`api\` via \`http://api:8000\` (DNS interno de Docker)
- **Aislamiento**: \`db\` solo en red \`backend\` → no accesible desde fuera
- **Reverse proxy**: Traefik/Nginx en red \`frontend\` termina TLS y enruta

---

### 5. Volúmenes: Persistencia y performance

| Caso | Volumen | Config |
|------|---------|--------|
| **DB data** | Named volume | \`volumes: [pgdata:/var/lib/postgresql/data]\` |
| **Archivos subidos** | Bind mount / Named volume | \`volumes: [uploads:/app/media]\` |
| **Cache/Build** | Tmpfs (memoria) | \`tmpfs: /app/.cache\` |
| **Logs** | json-file driver + rotation | \`logging: {driver: json-file, options: {max-size: 10m}}\` |

\`\`\`yaml
volumes:
  pgdata:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/storage/postgres  # disco dedicado en prod
\`\`\`

---

### 6. CI/CD: Build → Test → Push → Deploy

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build image
        run: docker build -t ghcr.io/user/app:\${{ github.sha }} .
      - name: Run tests in container
        run: |
          docker run --rm ghcr.io/user/app:\${{ github.sha }} pytest
      - name: Push to registry
        run: |
          echo \${{ secrets.GHCR_TOKEN }} | docker login ghcr.io -u \${{ github.actor }} --password-stdin
          docker push ghcr.io/user/app:\${{ github.sha }}

  deploy-staging:
    needs: build-test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
        run: |
          ssh staging "docker compose pull && docker compose up -d"

  deploy-prod:
    needs: deploy-staging
    environment: production
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to prod (blue-green)
        run: |
          ssh prod "./deploy.sh ghcr.io/user/app:\${{ github.sha }}"
\`\`\`

**Patrón Blue-Green deploy script:**
\`\`\`bash
#!/bin/bash
# deploy.sh
NEW_IMAGE=$1
CURRENT=$(docker compose ps -q web)

docker compose pull $NEW_IMAGE
docker tag $NEW_IMAGE miapp:new
docker compose up -d --no-deps web  # healthcheck valida antes de switch
sleep 10
if curl -f http://localhost/health; then
  docker tag $NEW_IMAGE miapp:current
  echo "Deploy OK"
else
  docker compose up -d --no-deps web  # rollback automático
  echo "Deploy FAILED, rolled back"
  exit 1
fi
\`\`\`

---

### 7. Observabilidad en contenedores

\`\`\`yaml
services:
  web:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
        labels: "service=web,env=prod"
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: "512M"
\`\`\`

- **Logs**: stdout/stderr → Docker JSON driver → Loki/ELK/Datadog
- **Métricas**: \`docker stats\` → Prometheus node-exporter + cAdvisor
- **Tracing**: OpenTelemetry sidecar o lib en app
- **Healthchecks**: \`HEALTHCHECK CMD curl -f http://localhost:8000/health || exit 1\`

---

### 8. Checklist de producción (copia y pega)

\`\`\`markdown
# Pre-deploy checklist
- [ ] Multi-stage build (< 200MB final image)
- [ ] Non-root USER en Dockerfile
- [ ] HEALTHCHECK definido
- [ ] No secrets en imagen (usar secrets/files/env)
- [ ] Resource limits (CPU/RAM) en compose/k8s
- [ ] Read-only root filesystem donde sea posible
- [ ] Drop capabilities: \`cap_drop: [ALL]\` + \`cap_add: [NET_BIND_SERVICE]\` si puerto < 1024
- [ ] Security scanning: \`docker scout cves miapp:latest\` o \`trivy image miapp\`
- [ ] Healthchecks pasan en staging antes de prod
- [ ] Rollback probado (tag anterior funciona)
- [ ] Logs estructurados (JSON) a stdout
- [ ] Backup/restore de volúmenes documentado y probado
\`\`\`

---

## Patrones comunes por tipo de proyecto

| Tipo | Base image | Compose profile | Escalado |
|------|------------|-----------------|----------|
| **API FastAPI/Flask** | python:3.11-slim | web + db + redis | Horizontal (stateless) |
| **Worker/Celery** | python:3.11-slim | worker | Horizontal (cola) |
| **Next.js/React** | node:20-alpine (standalone) | web | Horizontal + CDN |
| **PostgreSQL** | postgres:16-alpine | db | Vertical + read replicas |
| **Redis** | redis:7-alpine | cache | Cluster mode |
| **Nginx/Traefik** | nginx:alpine / traefik:v3 | proxy | 1-2 réplicas |

---

## Errores comunes que evitas con Docker

| Error | Sin Docker | Con Docker |
|-------|------------|------------|
| "Falta libpq-dev en prod" | Horas debug | En Dockerfile base |
| "Python 3.10 vs 3.11" | Virtualenv roto | \`FROM python:3.11\` fijo |
| "Migración BD falla" | Manual, riesgoso | \`alembic upgrade head\` en entrypoint |
| "Config distinta staging/prod" | Archivos .env divergentes | Compose override + secrets |
| "Deploy viernes 6pm" | Riesgo alto | Blue-green + healthcheck = seguro |
| "Rollback 30 min" | Git revert + rebuild | \`docker tag old:latest\` = 30 seg |

---

## Conclusión: Docker no es opcional para proyectos serios

| Antes de Docker | Con Docker |
|-----------------|------------|
| "Funciona en mi máquina" | "Funciona en cualquier máquina" |
| Deploy manual, propenso a errores | Deploy automatizado, reproducible |
| Escalado = nueva VM + config | \`docker compose up --scale web=3\` |
| Rollback = horas | Rollback = segundos |
| Dependencias en host = conflictos | Aislamiento total por contenedor |

**La curva de aprendizaje vale la pena**: 1 día aprendiendo Docker = años de dolores de cabeza evitados.

**Stack recomendado 2024**:
- **Build**: Dockerfile multi-stage + BuildKit (\`DOCKER_BUILDKIT=1\`)
- **Orquestación local**: Docker Compose v2
- **Orquestación prod**: Kubernetes (EKS/GKE/AKS) o Docker Swarm / Nomad para simples
- **Registry**: GHCR / Docker Hub / ECR / Harbor
- **Seguridad**: Trivy/Docker Scout + cosign para signing
- **Observabilidad**: Loki + Prometheus + Grafana + Tempo

> **Regla de oro**: Si no puedes \`docker build && docker run\` y tener tu app funcionando en < 2 min, el Dockerfile necesita trabajo.`,
    cover_image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200',
    tags: ['Docker', 'DevOps', 'Deployment', 'Containers', 'Docker Compose', 'CI/CD', 'Production'],
    published: true,
    published_at: '2026-04-05T16:45:00.000Z',
    reading_time: 20,
    sort_order: 4,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },];

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
