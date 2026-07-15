import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { About } from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Klaus Widemann: Full Stack Developer, experiencia, valores y tecnologías.',
};

export default function AboutPage() {
  return (
    <PublicLayout>
      <About />
    </PublicLayout>
  );
}