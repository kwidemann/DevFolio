import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Blog } from '@/components/sections/Blog';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Klaus Widemann | Full Stack Developer',
  description: 'Full Stack Developer especializado en React, TypeScript, Python y Cloud. Construyo productos digitales robustos, escalables y bonitos.',
  openGraph: {
    title: 'Klaus Widemann | Full Stack Developer',
    description: 'Full Stack Developer especializado en React, TypeScript, Python y Cloud.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
    </PublicLayout>
  );
}