import { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypeShiki from '@/lib/rehype-shiki';

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className="text-display-lg font-bold tracking-tight text-foreground mt-12 mb-6 first:mt-0 pb-2 border-b border-border" />
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
    <a
      {...props}
      className="text-primary hover:text-primary/80 underline underline-offset-2 hover:no-underline transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    />
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

export const metadata: Metadata = {
  title: 'CV | Klaus Widemann',
  description: 'Currículum vitae de Klaus Widemann, con experiencia profesional, habilidades y formación.',
};

async function getResumeMarkdown() {
  const resumePath = path.join(process.cwd(), 'src', 'data', 'resume.md');
  return fs.readFile(resumePath, 'utf-8');
}

export default async function ResumePage() {
  const resumeMarkdown = await getResumeMarkdown();

  return (
    <PublicLayout>
      <section className="section py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
                CV
              </span>
              <h1 className="text-display-lg font-bold tracking-tight text-foreground mb-4">Currículum Vitae</h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Experiencia profesional, habilidades, formación y logros de Klaus Christopher Widemann Müller.
              </p>
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <MDXRemote
                source={resumeMarkdown}
                components={components}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug, [rehypeShiki, { theme: 'github-dark' }]],
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
