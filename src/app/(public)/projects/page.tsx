import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Projects } from '@/components/sections/Projects';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Proyectos y casos de estudio de Klaus Widemann: plataformas SaaS, herramientas CLI, editores colaborativos y más.',
};

export default function ProjectsPage() {
  return (
    <PublicLayout>
      <Projects />
    </PublicLayout>
  );
}