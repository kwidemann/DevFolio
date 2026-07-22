'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { resumeIntroHighlights } from '@/data/resume';

type ResumeIntroProps = {
  highlights?: string[];
};

export function ResumeIntro({ highlights = resumeIntroHighlights }: ResumeIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mb-16"
    >
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-start">
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            CV
          </span>
          <h1 className="text-display-lg font-bold tracking-tight text-foreground mb-4">Currículum Vitae</h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
            Experiencia profesional, habilidades, formación y logros de Klaus Christopher Widemann Müller.
            Este perfil destaca lo técnico, lo estratégico y lo operativo para proyectos de software de alta confianza.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-muted p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Años de experiencia</p>
              <p className="text-3xl font-semibold text-foreground">4+</p>
            </div>
            <div className="rounded-3xl border border-border bg-muted p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Impacto</p>
              <p className="text-3xl font-semibold text-foreground">ERP en producción</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-primary/5 p-6 shadow-lg shadow-primary/5">
          <h2 className="text-xl font-semibold text-foreground mb-4">Lo que encontrarás aquí</h2>
          <ul className="space-y-4 text-body text-muted-foreground">
            {resumeIntroHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Contactar para proyectos
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
