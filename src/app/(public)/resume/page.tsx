import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ResumeContent } from '@/components/sections/ResumeContent';

export const metadata: Metadata = {
  title: 'CV | Klaus Widemann',
  description: 'Currículum vitae de Klaus Widemann, con experiencia profesional, habilidades y formación.',
};

export default function ResumePage() {
  return (
    <PublicLayout>
      <section className="section py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <ResumeContent />
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
