import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { getBlogPostBySlug } from '@/data/content';
import { formatDate, getReadingTime, extractHeadings } from '@/lib/utils';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight, Github, Twitter, Linkedin, FileText } from 'lucide-react';
import { MotionDiv, MotionH1, MotionP, MotionArticle } from '@/components/animations/ClientMotion';
import Link from 'next/link';
import { ShareButton } from '@/components/ShareButton';

// MDX Components
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypeShiki from '@/lib/rehype-shiki';

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className="text-4xl font-bold tracking-tight text-foreground mt-12 mb-6 first:mt-0 pb-2 border-b border-border" />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="text-3xl font-bold tracking-tight text-foreground mt-12 mb-4" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="text-2xl font-bold tracking-tight text-foreground mt-10 mb-3" />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props} className="text-xl font-bold tracking-tight text-foreground mt-8 mb-2" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="text-body text-muted-foreground leading-relaxed mb-6" />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="text-primary hover:text-primary/80 underline underline-offset-2 hover:no-underline transition-colors" target="_blank" rel="noopener noreferrer" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc list-inside space-y-2 text-body text-muted-foreground mb-6 ml-4" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="list-decimal list-inside space-y-2 text-body text-muted-foreground mb-6 ml-4" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="leading-relaxed" />
  ),
  blockquote: (props: React.QuoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground/80 bg-primary/5 rounded-r-lg" />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-primary font-medium" />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="my-8 rounded-xl overflow-hidden bg-muted border border-border">
      <pre {...props} className="p-4 overflow-x-auto font-mono text-sm !bg-transparent !border-0" />
    </div>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-8">
      <img {...props} className="rounded-xl w-full h-auto shadow-lg" loading="lazy" />
      {props.alt && <figcaption className="text-center text-sm text-muted-foreground mt-2">{props.alt}</figcaption>}
    </figure>
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 overflow-x-auto">
      <table {...props} className="w-full border-collapse" />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} className="border border-border px-4 py-2 font-semibold text-left bg-muted" />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className="border border-border px-4 py-2 text-left" />
  ),
  hr: () => <hr className="my-12 border-border" />,
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { slug } = params;
  return {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    description: `Artículo técnico: ${slug.replace(/-/g, ' ')}`,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = post.content || '';
  const headings = extractHeadings(content);

  return (
    <PublicLayout>
      <article className="min-h-screen">
        {/* Hero */}
        <header className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" aria-hidden="true" />
          {post.cover_image && (
            <div className="absolute inset-0 z-0">
              <img
                src={post.cover_image}
                alt=""
                className="w-full h-full object-cover opacity-30"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            </div>
          )}
          <div className="container-custom relative z-10">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="badge-outline text-sm"
                  >
                    <Tag className="h-3 w-3 mr-1" aria-hidden="true" />
                    {tag}
                  </Link>
                ))}
              </div>
              <MotionH1
                className="text-display-lg lg:text-display-xl font-bold tracking-tight text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {post.title}
              </MotionH1>
              <MotionDiv
                className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={post.published_at ?? ''}>
                    {post.published_at ? formatDate(post.published_at) : 'Fecha desconocida'}
                  </time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {post.reading_time || getReadingTime(content)} min de lectura
                </span>
              </MotionDiv>
            </MotionDiv>
          </div>
        </header>

        {/* Content */}
        <div className="container-custom py-12 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="max-w-4xl">
              {/* Share & Back */}
              <MotionDiv
                className="flex items-center justify-between mb-8 pb-6 border-b border-border"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/blog"
                  className="btn-ghost btn-sm gap-2"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Volver al blog
                </Link>
                <div className="flex items-center gap-2">
                  <ShareButton url={`/blog/${post.slug}`} title={post.title} />
                </div>
              </MotionDiv>

              {/* MDX Content */}
              <MotionDiv
                className="prose prose-lg max-w-none dark:prose-invert"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <MDXRemote
                  source={content}
                  components={components}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [rehypeShiki, { theme: 'github-dark', keepBackground: true }],
                      ],
                    },
                  }}
                />
              </MotionDiv>

              {/* Footer Tags */}
              <MotionDiv
                className="mt-16 pt-8 border-t border-border flex flex-wrap items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="font-medium text-muted-foreground">Etiquetas:</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="badge-outline text-sm"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </MotionDiv>
            </div>

            {/* Sidebar - Table of Contents */}
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <MotionDiv
                  className="sticky top-28 space-y-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                      En este artículo
                    </h3>
                    <nav className="space-y-2" aria-label="Tabla de contenidos">
                      <ul className="space-y-1">
                        {headings.map((heading) => (
                          <li key={heading.slug}>
                            <a
                              href={`#${heading.slug}`}
                              className={`block text-sm transition-colors ${
                                heading.level === 2 ? 'font-medium' : 'text-muted-foreground ml-4'
                              } hover:text-primary`}
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="bg-gradient-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                    <h4 className="font-semibold text-lg mb-2">¿Te gustó el artículo?</h4>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Recibe los nuevos artículos directamente en tu email. Sin spam, solo contenido técnico de calidad.
                    </p>
                    <Link
                      href="/contact"
                      className="btn-primary btn-sm"
                    >
                      Suscribirme
                    </Link>
                  </div>
                </MotionDiv>
              </aside>
            )}
          </div>
        </div>

        {/* Related Posts */}
        <section className="section bg-muted/30">
          <div className="container-custom">
            <h2 className="text-heading-lg font-bold text-center text-foreground mb-12">Más artículos</h2>
            <RelatedPosts currentSlug={slug} />
          </div>
        </section>
      </article>
    </PublicLayout>
  );
}

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  // Mock related posts
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
            <FileText className="h-16 w-16 text-muted-foreground/30" aria-hidden="true" />
          </div>
          <div className="p-6">
            <h3 className="text-heading-md font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Artículo relacionado {i}
            </h3>
            <p className="text-body text-muted-foreground mb-4 line-clamp-2">
              Descripción breve del artículo relacionado que sería interesante para el visitante.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['React', 'TypeScript', 'Next.js'].map((tech) => (
                <span key={tech} className="badge-outline text-xs">{tech}</span>
              ))}
            </div>
            <Link
              href="/blog/articulo-relacionado"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
            >
              Leer artículo
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </MotionArticle>
      ))}
    </div>
  );
}
