import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Blog } from '@/components/sections/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos técnicos, tutoriales y reflexiones sobre desarrollo de software, arquitectura y herramientas.',
};

export default function BlogPage() {
  return (
    <PublicLayout>
      <Blog />
    </PublicLayout>
  );
}