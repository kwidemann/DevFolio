'use client';

import { motion } from 'framer-motion';
import { ResumeIntro } from '@/components/sections/ResumeIntro';

const contactInfo = [
  { label: 'Ubicación', value: 'Valdivia, Chile' },
  { label: 'Teléfono', value: '+56 9 737 949 21' },
  { label: 'Email', value: 'kwidemann@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/klaus-widemann-774b9496', href: 'https://www.linkedin.com/in/klaus-widemann-774b9496' },
  { label: 'GitHub', value: 'github.com/kwidemann', href: 'https://github.com/kwidemann' },
];

const summary =
  'Backend Engineer con más de 4 años construyendo y desplegando software de producción. Experiencia en ERP personalizado, automatización de procesos, despliegues Docker y pipelines de GitHub Actions. Enfoque en soluciones escalables, continuidad operativa y resultados medibles.';

const highlightItems = [
  'ERP a medida en producción para escuela de conducción',
  'Despliegues Docker y CI/CD automatizado con GitHub Actions',
  'Infraestructura en Linux, monitoreo y soporte de producción',
];

const skillGroups = [
  {
    title: 'Lenguajes y frameworks',
    skills: ['Python', 'FastAPI', 'Flet', 'LaTeX', 'VBA', 'C# (Basic)'],
  },
  {
    title: 'Infra y DevOps',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Cloud VMs', 'Oracle SQL'],
  },
  {
    title: 'Procesos y soporte',
    skills: ['Automatización', 'Reporting', 'Control de procesos', 'Data Validation', 'Workflow Optimization'],
  },
];

const experience = [
  {
    role: 'Backend Engineer / Head of Control & Procedures',
    company: 'Professional Driving School Todo Transporte Ltda.',
    location: 'Valdivia, Chile',
    period: 'May 2020 – September 2024',
    bullets: [
      'Diseñé y desarrollé un ERP personalizado con Python, FastAPI, Oracle SQL y Flet, centralizando administración, reportes y procesos operativos.',
      'Implementé y mantuve pipelines CI/CD con GitHub Actions para builds Docker repetibles en producción.',
      'Automatizé tareas administrativas y operativas, reduciendo tiempos manuales y mejorando la continuidad del negocio.',
      'Administré despliegues Docker en máquinas Linux, backups, correo corporativo y plataformas LMS.',
      'Coordiné con stakeholders para traducir requisitos de negocio en soluciones técnicas efectivas.',
    ],
  },
  {
    role: 'Operational Intern',
    company: 'Entel Ocean',
    location: 'Santiago, Chile',
    period: 'February 2020 – May 2020',
    bullets: [
      'Documenté procesos operativos de postventa y detecté oportunidades de mejora.',
      'Proporcioné análisis para propuestas de optimización y presenté resultados a stakeholders.',
    ],
  },
  {
    role: 'Marketing Intern',
    company: 'HATCH Ingenieros y Consultores Ltda.',
    location: 'Santiago, Chile',
    period: 'January 2018 – February 2018',
    bullets: [
      'Apoyé implementaciones de SAP Cloud for Customers y entrené a usuarios internos.',
      'Desarrollé soluciones VBA para mejorar procesos internos y la eficiencia operativa.',
    ],
  },
];

const achievements = [
  'Implementé un ERP personalizado que permanece en operación activa más de 4 años.',
  'Integré despliegues Docker con GitHub Actions para entregas de producción confiables.',
  'Mejoré la eficiencia operativa mediante automatización y estructuración de datos de negocio.',
];

const education = {
  school: 'Universidad Técnica Federico Santa María',
  location: 'Valparaíso, Chile',
  degree: 'Ingeniería Civil Industrial',
  period: '2012 – 2020',
};

const languages = ['Español: Nativo', 'Inglés: C2 – Fluent', 'Alemán: C1 – Advanced'];

export function ResumeContent() {
  return (
    <>
      <ResumeIntro />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5"
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">Resumen profesional</p>
                <p className="text-body-lg text-muted-foreground leading-relaxed">{summary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlightItems.map((item) => (
                  <div key={item} className="rounded-3xl border border-border bg-muted p-5">
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="grid gap-6">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="group overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground">{item.role}</h2>
                      <p className="text-sm text-muted-foreground">{item.company} · {item.location}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-3 text-body text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <aside className="space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Contacto</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="text-body text-muted-foreground">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Habilidades clave</h3>
            <div className="grid gap-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-3xl border border-border bg-muted p-5">
                  <p className="text-sm font-semibold text-foreground mb-3">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Logros</h3>
            <ul className="space-y-3 text-body text-muted-foreground list-disc list-inside">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Formación</h3>
            <div className="space-y-3 text-body text-muted-foreground">
              <p className="font-semibold text-foreground">{education.school}</p>
              <p>{education.degree}</p>
              <p>{education.location}</p>
              <p className="text-sm text-muted-foreground">{education.period}</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-lg shadow-black/5"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Idiomas</h3>
            <div className="space-y-3 text-body text-muted-foreground">
              {languages.map((language) => (
                <p key={language}>{language}</p>
              ))}
            </div>
          </motion.section>
        </aside>
      </div>
    </>
  );
}
