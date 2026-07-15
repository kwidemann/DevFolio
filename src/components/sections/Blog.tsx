'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useBlogPosts, useBlogTags } from '@/hooks/useApi';
import { cn, formatDate, formatRelativeTime, getReadingTime } from '@/lib/utils';
import { Calendar, Clock, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] } },
};

export function Blog() {
  const [activeTag, setActiveTag] = useState<string | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data: postsData, isLoading, error } = useBlogPosts({
    page: currentPage,
    page_size: pageSize,
    tag: activeTag === 'all' ? undefined : activeTag,
  });

  const { data: tags, isLoading: tagsLoading } = useBlogTags();

  if (isLoading) {
    return (
      <section id="blog" className="section bg-muted/30" aria-labelledby="blog-title">
        <div className="container-custom">
          <div className="animate-pulse space-y-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="h-8 bg-muted rounded w-1/4" />
            </div>
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-muted rounded-xl" />
              ))}
            </div>
            <div className="h-12 bg-muted rounded w-1/4 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="section bg-muted/30" aria-labelledby="blog-title">
        <div className="container-custom text-center py-16">
          <p className="text-muted-foreground">Error cargando artículos</p>
        </div>
      </section>
    );
  }

  const posts = postsData?.posts || [];
  const totalPages = postsData?.total_pages || 1;

  return (
    <section id="blog" className="section bg-muted/30" aria-labelledby="blog-title">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4"
          >
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            Artículos técnicos
          </motion.span>
          <motion.h2
            id="blog-title"
            variants={itemVariants}
            className="text-display-lg font-bold tracking-tight text-foreground mb-6"
          >
            Escribo sobre lo que aprendo
          </motion.h2>
          <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground leading-relaxed">
            Tutoriales, deep-dives, y reflexiones sobre desarrollo de software, arquitectura, y herramientas.
            Todo probado en producción.
          </motion.p>
        </motion.div>

        {/* Tag Filter */}
        {!tagsLoading && tags && tags.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            role="group"
            aria-label="Filtrar artículos por etiqueta"
          >
            <TagButton
              active={activeTag === 'all'}
              onClick={() => { setActiveTag('all'); setCurrentPage(1); }}
            >
              Todas
            </TagButton>
            {tags.map((tag) => (
              <TagButton
                key={tag}
                active={activeTag === tag}
                onClick={() => { setActiveTag(tag); setCurrentPage(1); }}
              >
                {tag}
              </TagButton>
            ))}
          </motion.div>
        )}

        {/* Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label={`${activeTag === 'all' ? 'Todos los' : `Artículos etiquetados: ${activeTag}`} artículos`}
        >
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </motion.div>

        {/* Empty state */}
        {posts.length === 0 && (
          <motion.div
            className="text-center py-16"
            variants={itemVariants}
          >
            <div className="text-6xl mb-4" aria-hidden="true">📭</div>
            <h3 className="text-heading-md font-semibold text-foreground mb-2">
              {activeTag === 'all' ? 'No hay artículos aún' : `No hay artículos con la etiqueta "${activeTag}"`}
            </h3>
            <p className="text-muted-foreground">
              {activeTag === 'all' ? 'Pronto habrá contenido técnico aquí.' : 'Prueba con otra etiqueta.'}
            </p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.nav
            className="flex items-center justify-center gap-2 mt-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            aria-label="Paginación"
          >
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="btn-outline btn-sm"
              aria-label="Página anterior"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  'w-10 h-10 rounded-lg text-sm font-medium transition-all',
                  currentPage === page
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                )}
                aria-label={`Página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="btn-outline btn-sm"
              aria-label="Página siguiente"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.nav>
        )}

        {/* View all / Subscribe CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="/blog" className="btn-outline btn-lg">
            Ver todos los artículos
            <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            ¿Quieres recibir los nuevos artículos por email?
            <Link href="#contact" className="text-primary hover:underline ml-1">
              Suscríbete
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TagButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
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

interface BlogCardProps {
  post: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    cover_image: string | null;
    tags: string[];
    published_at: string | null;
    reading_time: number;
  };
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.1)' }}
      layout
    >
      {/* Cover image */}
      <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
        {post.cover_image ? (
          <motion.img
            src={post.cover_image}
            alt={`Portada de ${post.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-mesh flex items-center justify-center">
            <motion.div
              className="text-muted-foreground/30"
              animate={{ rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FileText className="h-16 w-16" aria-hidden="true" />
            </motion.div>
          </div>
        )}

        {/* Reading time badge */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-medium text-foreground shadow-md border border-border/50">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {post.reading_time || getReadingTime(post.excerpt)} min
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {post.tags.slice(0, 3).map((tag, i) => (
            <motion.span
              key={tag}
              className="badge-outline text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
          {post.tags.length > 3 && (
            <motion.span
              className="badge-outline text-xs text-muted-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              +{post.tags.length - 3}
            </motion.span>
          )}
        </motion.div>

        <Link href={`/blog/${post.slug}`}>
          <motion.h3
            className="text-heading-md font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2"
          >
            {post.title}
          </motion.h3>
        </Link>

        <motion.p className="text-body text-muted-foreground mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </motion.p>

        {/* Meta */}
        <motion.div
          className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <time dateTime={post.published_at ?? ''}>
            <Calendar className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
            {post.published_at ? formatDate(post.published_at) : 'Próximamente'}
          </time>
          <span className="hidden sm:inline">
            <Clock className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
            {post.reading_time || getReadingTime(post.excerpt)} min
          </span>
        </motion.div>

        {/* Read more link */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
        >
          Leer artículo
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

import { FileText } from 'lucide-react';