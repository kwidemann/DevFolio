'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useProjects } from '@/hooks/useApi';
import { ArrowRight, Star, Github, ExternalLink } from 'lucide-react';

interface RelatedProjectsProps {
  currentSlug: string;
}

export function RelatedProjects({ currentSlug }: RelatedProjectsProps) {
  const { data: projectsData } = useProjects({ page_size: 10 });
  const projects = projectsData?.projects || [];

  const relatedProjects = projects
    .filter(p => p.slug !== currentSlug)
    .slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <motion.div
      className="grid gap-6 md:grid-cols-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {relatedProjects.map((project, index) => (
        <motion.article
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.1 }}
          className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          whileHover={{ y: -8, boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.15)' }}
          layout
        >
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

            <div className="absolute top-3 right-3">
              <span className="badge-primary text-xs">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>
          </div>

          <div className="p-6">
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-heading-md font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </Link>

            <p className="text-body text-muted-foreground mb-4 line-clamp-3">
              {project.short_description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech_stack.slice(0, 5).map((tech) => (
                <span key={tech} className="badge-outline text-xs">
                  {tech}
                </span>
              ))}
              {project.tech_stack.length > 5 && (
                <span className="badge-outline text-xs text-muted-foreground">
                  +{project.tech_stack.length - 5} más
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
              {project.live_url && (
                <Link
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sm flex-1 justify-center"
                  aria-label={`Ver demo de ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                  Demo
                </Link>
              )}
              {project.repo_url && (
                <Link
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-sm flex-1 justify-center"
                  aria-label={`Ver código de ${project.title}`}
                >
                  <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                  Código
                </Link>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="btn-ghost btn-sm flex-1 justify-center text-sm"
              >
                Detalles
                <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

import { Code2 } from 'lucide-react';