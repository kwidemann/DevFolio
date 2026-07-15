'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useProjects } from '@/hooks/useApi';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, ArrowRight, Star, Tag } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] } },
};

export function Projects() {
  const { data: projects, isLoading, error } = useProjects();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (isLoading) {
    return (
      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="container-custom">
          <div className="animate-pulse space-y-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="h-8 bg-muted rounded w-1/4" />
            </div>
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-muted rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="container-custom text-center py-16">
          <p className="text-muted-foreground">Error cargando proyectos</p>
        </div>
      </section>
    );
  }

  const allProjects = projects?.projects || [];
  const featuredProjects = allProjects.filter(p => p.featured);
  const uniqueCategories = [...new Set(allProjects.map(p => p.category))].sort();
  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : activeCategory === 'featured'
      ? featuredProjects
      : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4"
          >
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            Proyectos destacados
          </motion.span>
          <motion.h2
            id="projects-title"
            variants={itemVariants}
            className="text-display-lg font-bold tracking-tight text-foreground mb-6"
          >
            Trabajo seleccionado
          </motion.h2>
          <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground leading-relaxed">
            Una muestra de productos digitales que he construido: desde plataformas SaaS hasta herramientas CLI.
            Cada proyecto resuelve un problema real con código limpio y arquitectura escalable.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="group"
          aria-label="Filtrar proyectos por categoría"
        >
          <FilterButton
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          >
            Todos
          </FilterButton>
          <FilterButton
            active={activeCategory === 'featured'}
            onClick={() => setActiveCategory('featured')}
          >
            Destacados
          </FilterButton>
          {uniqueCategories.map((cat) => (
            <FilterButton
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </FilterButton>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label={`${activeCategory === 'all' ? 'Todos los' : activeCategory === 'featured' ? 'Proyectos destacados' : activeCategory} proyectos`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        {/* View all CTA */}
        {activeCategory !== 'all' && (
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-outline btn-lg"
            >
              Ver todos los proyectos
              <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
        active
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={active}
    >
      {children}
    </motion.button>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    slug: string;
    title: string;
    short_description: string;
    thumbnail_url: string | null;
    tech_stack: string[];
    category: string;
    featured: boolean;
    live_url: string | null;
    repo_url: string | null;
    case_study_url: string | null;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.15)' }}
      layout
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        {project.thumbnail_url ? (
          <motion.img
            src={project.thumbnail_url}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-mesh flex items-center justify-center">
            <Code2 className="h-16 w-16 text-muted-foreground/30" aria-hidden="true" />
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            className="absolute top-3 left-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">
              <Star className="h-3 w-3" aria-hidden="true" />
              Destacado
            </span>
          </motion.div>
        )}

        {/* Category badge */}
        <motion.div
          className="absolute top-3 right-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="badge-primary text-xs">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </motion.div>

        {/* Overlay actions */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
        >
          <div className="w-full flex flex-col sm:flex-row gap-3">
            {project.live_url && (
              <motion.a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-sm flex-1 justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Ver demo de ${project.title}`}
              >
                <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                Demo
              </motion.a>
            )}
            {project.repo_url && (
              <motion.a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-sm flex-1 justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Ver código de ${project.title}`}
              >
                <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                Código
              </motion.a>
            )}
            {project.case_study_url && (
              <motion.a
                href={project.case_study_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm flex-1 justify-center text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Leer caso de estudio de ${project.title}`}
              >
                Caso de estudio
                <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/projects/${project.slug}`}>
          <motion.h3
            className="text-heading-md font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
          >
            {project.title}
          </motion.h3>
        </Link>

        <motion.p className="text-body text-muted-foreground mb-4 line-clamp-3">
          {project.short_description}
        </motion.p>

        {/* Tech stack */}
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {project.tech_stack.slice(0, 6).map((tech, i) => (
            <motion.span
              key={tech}
              className="badge-outline text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.tech_stack.length > 6 && (
            <motion.span
              className="badge-outline text-xs text-muted-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              +{project.tech_stack.length - 6} más
            </motion.span>
          )}
        </motion.div>

        {/* View detail link */}
        <motion.div
          className="pt-4 border-t border-border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
          >
            Ver caso de estudio
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

import { Code2 } from 'lucide-react';