import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con Klaus Widemann: Full Stack Developer. Disponible para proyectos freelance, consultoría y oportunidades laborales.',
};

export default function ContactPage() {
  return (
    <PublicLayout>
      <Contact />
    </PublicLayout>
  );
}