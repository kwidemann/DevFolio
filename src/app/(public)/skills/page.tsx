import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Skills } from '@/components/sections/Skills';

export const metadata: Metadata = {
  title: 'Habilidades',
  description: 'Stack tecnológico y habilidades de Klaus Widemann: Frontend, Backend, DevOps, Base de datos, Herramientas y Soft Skills.',
};

export default function SkillsPage() {
  return (
    <PublicLayout>
      <Skills />
    </PublicLayout>
  );
}