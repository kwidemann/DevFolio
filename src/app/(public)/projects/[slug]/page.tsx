import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { getProjectBySlug } from '@/data/content';
import { formatDate, cn } from '@/lib/utils';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft, ArrowRight, Clock, Calendar, Tag, Star, Code2, Server, Database, Cpu, Wrench, Users } from 'lucide-react';
import { MotionDiv, MotionH1, MotionP, MotionArticle, MotionSpan } from '@/components/animations/ClientMotion';

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;
  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
    description: `Caso de estudio: ${slug.replace(/-/g, ' ')} - Proyecto de Klaus Widemann`,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PublicLayout>
      <article className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          {project.thumbnail_url && (
            <MotionDiv
              className="absolute inset-0 z-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <img
                src={project.thumbnail_url}
                alt={`Portada de ${project.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            </MotionDiv>
          )}

          <div className="container-custom relative z-10 py-20 lg:py-32">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Back link */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 link-underline"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver a proyectos
              </Link>

              {/* Badges */}
              <MotionDiv
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">
                    <Star className="h-3 w-3" aria-hidden="true" />
                    Destacado
                  </span>
                )}
                <span className="badge-primary text-sm">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </MotionDiv>

              <MotionH1
                className="text-display-lg lg:text-display-xl font-bold tracking-tight text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {project.title}
              </MotionH1>

              <MotionP
                className="text-body-lg lg:text-heading-sm text-muted-foreground leading-relaxed mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {project.short_description}
              </MotionP>

              {/* Meta */}
              <MotionDiv
                className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {project.start_date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={project.start_date}>{formatDate(project.start_date)}</time>
                    {project.end_date && (
                      <>
                        <span aria-hidden="true">–</span>
                        <time dateTime={project.end_date}>{formatDate(project.end_date)}</time>
                      </>
                    )}
                    {project.is_current && <span className="text-primary font-medium">(Actual)</span>}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {project.tech_stack.length} tecnologías
                </span>
              </MotionDiv>

              {/* Action Links */}
              <MotionDiv
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {project.live_url && (
                  <Link
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                    Ver Demo
                  </Link>
                )}
                {project.repo_url && (
                  <Link
                    href={project.repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                    Código Fuente
                  </Link>
                )}
                {project.case_study_url && (
                  <Link
                    href={project.case_study_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Caso de Estudio
                    <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                  </Link>
                )}
              </MotionDiv>
            </MotionDiv>
          </div>
        </section>

        {/* Content Sections */}
        <section className="section bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Description */}
                <MotionDiv
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-heading-lg font-bold text-foreground mb-6">Descripción del proyecto</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    {project.description?.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </MotionDiv>

                {/* Tech Stack Detail */}
                <MotionDiv
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-heading-lg font-bold text-foreground mb-6">Stack Tecnológico</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.tech_stack.map((tech, i) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <MotionSpan
                          key={tech}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/30 transition-colors"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.03 }}
                        >
                          {Icon && <Icon className="h-4 w-4 text-primary" aria-hidden="true" />}
                          {tech}
                        </MotionSpan>
                      );
                    })}
                  </div>
                </MotionDiv>

                {/* Images Gallery */}
                {project.images && project.images.length > 0 && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-heading-lg font-bold text-foreground mb-6">Capturas</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {project.images.map((image, i) => (
                        <MotionDiv
                          key={image}
                          className="relative aspect-video rounded-xl overflow-hidden bg-muted"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <img
                            src={image}
                            alt={`Captura ${i + 1} de ${project.title}`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        </MotionDiv>
                      ))}
                    </div>
                  </MotionDiv>
                )}

                {/* Challenges & Learnings */}
                <MotionDiv
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h3 className="text-heading-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
                        Retos técnicos
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">✓ Arquitectura multi-tenant con aislamiento de datos (RLS)</li>
                        <li className="flex items-start gap-2">✓ Sincronización en tiempo real con CRDTs (Yjs)</li>
                        <li className="flex items-start gap-2">✓ Optimización de consultas N+1 con DataLoader</li>
                        <li className="flex items-start gap-2">✓ Migración zero-downtime de base de datos</li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h3 className="text-heading-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-500" aria-hidden="true" />
                        Aprendizajes clave
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">✓ TypeScript strict mode previene clases enteras de bugs</li>
                        <li className="flex items-start gap-2">✓ Server Components reducen bundle JS en 40%</li>
                        <li className="flex items-start gap-2">✓ Observabilidad temprana ahorra horas de debugging</li>
                        <li className="flex items-start gap-2">✓ DX invierte en productividad del equipo a largo plazo</li>
                      </ul>
                    </div>
                  </div>
                </MotionDiv>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                <MotionDiv
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="sticky top-24 space-y-6"
                >
                  {/* Quick Info */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-heading-sm font-semibold text-foreground mb-4">Info rápida</h3>
                    <dl className="space-y-4">
                      {project.start_date && (
                        <div>
                          <dt className="text-caption text-muted-foreground uppercase tracking-wider">Inicio</dt>
                          <dd className="text-body font-medium text-foreground">{formatDate(project.start_date)}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-caption text-muted-foreground uppercase tracking-wider">Estado</dt>
                        <dd className="text-body font-medium text-foreground flex items-center gap-2">
                          {project.is_current ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                              <Circle className="h-1.5 w-1.5" aria-hidden="true" />
                              En desarrollo
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium border border-blue-500/20">
                              Completado
                            </span>
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-caption text-muted-foreground uppercase tracking-wider">Categoría</dt>
                        <dd className="text-body font-medium text-foreground capitalize">{project.category}</dd>
                      </div>
                      <div>
                        <dt className="text-caption text-muted-foreground uppercase tracking-wider">Tecnologías</dt>
                        <dd className="text-body font-medium text-foreground">{project.tech_stack.length}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Links */}
                  <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
                    <h3 className="text-heading-sm font-semibold text-foreground mb-2">Enlaces</h3>
                    {project.live_url && (
                      <Link
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">Demo en vivo</span>
                      </Link>
                    )}
                    {project.repo_url && (
                      <Link
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <Github className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">Repositorio</span>
                      </Link>
                    )}
                    {project.case_study_url && (
                      <Link
                        href={project.case_study_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <FileText className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">Caso de estudio</span>
                      </Link>
                    )}
                  </div>

                  {/* Share */}
                  <div className="bg-gradient-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">¿Te gusta este proyecto?</p>
                    <div className="flex justify-center gap-3">
                      <button className="btn-ghost btn-sm" aria-label="Compartir en Twitter">
                        <Twitter className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button className="btn-ghost btn-sm" aria-label="Compartir en LinkedIn">
                        <Linkedin className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button className="btn-ghost btn-sm" aria-label="Copiar enlace">
                        <Copy className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </MotionDiv>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="section">
          <div className="container-custom">
            <h2 className="text-heading-lg font-bold text-center text-foreground mb-12">Más proyectos</h2>
            <RelatedProjects currentSlug={slug} />
          </div>
        </section>
      </article>
    </PublicLayout>
  );
}

function getTechIcon(tech: string): React.ComponentType<{ className?: string }> | null {
  const techLower = tech.toLowerCase();
  if (['react', 'next.js', 'nextjs', 'typescript', 'javascript', 'tailwind', 'css', 'html'].some(t => techLower.includes(t))) return Code2;
  if (['python', 'fastapi', 'django', 'flask', 'node.js', 'nodejs', 'express', 'nestjs'].some(t => techLower.includes(t))) return Server;
  if (['postgresql', 'postgres', 'mysql', 'sqlite', 'redis', 'mongodb', 'prisma', 'sqlalchemy'].some(t => techLower.includes(t))) return Database;
  if (['docker', 'kubernetes', 'k8s', 'aws', 'gcp', 'azure', 'terraform', 'github actions', 'ci/cd'].some(t => techLower.includes(t))) return Cpu;
  if (['git', 'vscode', 'figma', 'postman', 'linux', 'bash', 'vim'].some(t => techLower.includes(t))) return Wrench;
  return null;
}

function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  // This would fetch from API in a real implementation
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <MotionArticle
          key={i}
          className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          whileHover={{ y: -8, boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.1)' }}
          layout
        >
          <div className="aspect-video bg-gradient-mesh flex items-center justify-center">
            <Code2 className="h-16 w-16 text-muted-foreground/30" aria-hidden="true" />
          </div>
          <div className="p-6">
            <h3 className="text-heading-md font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Proyecto relacionado {i}
            </h3>
            <p className="text-body text-muted-foreground mb-4 line-clamp-2">
              Descripción breve del proyecto relacionado que sería interesante para el visitante.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['React', 'TypeScript', 'Node.js'].map((tech) => (
                <span key={tech} className="badge-outline text-xs">{tech}</span>
              ))}
            </div>
            <Link
              href="/projects/proyecto-relacionado"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
            >
              Ver proyecto
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </MotionArticle>
      ))}
    </div>
  );
}

import { Circle, TrendingUp, FileText, Twitter, Linkedin, Copy } from 'lucide-react';