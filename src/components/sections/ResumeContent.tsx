'use client';

import { motion } from 'framer-motion';
import { ResumeIntro } from '@/components/sections/ResumeIntro';
import type {
  ResumeContactInfoItem,
  ResumeEducation,
  ResumeExperienceItem,
  ResumeSkillGroup,
} from '@/data/resume';
import {
  resumeAchievements,
  resumeContactInfo,
  resumeEducation,
  resumeExperience,
  resumeHighlightItems,
  resumeLanguages,
  resumeSkillGroups,
  resumeSummary,
} from '@/data/resume';

type ResumeContentProps = {
  summary?: string;
  highlightItems?: string[];
  experience?: ResumeExperienceItem[];
  contactInfo?: ResumeContactInfoItem[];
  skillGroups?: ResumeSkillGroup[];
  achievements?: string[];
  education?: ResumeEducation;
  languages?: string[];
};

export function ResumeContent({
  summary = resumeSummary,
  highlightItems = resumeHighlightItems,
  experience = resumeExperience,
  contactInfo = resumeContactInfo,
  skillGroups = resumeSkillGroups,
  achievements = resumeAchievements,
  education = resumeEducation,
  languages = resumeLanguages,
}: ResumeContentProps) {
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
                <p className="text-body-lg text-muted-foreground leading-relaxed">{resumeSummary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {resumeHighlightItems.map((item) => (
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
              {resumeExperience.map((item) => (
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
              {resumeContactInfo.map((item) => (
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
              {resumeSkillGroups.map((group) => (
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
              {resumeAchievements.map((item) => (
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
              <p className="font-semibold text-foreground">{resumeEducation.school}</p>
              <p>{resumeEducation.degree}</p>
              <p>{resumeEducation.location}</p>
              <p className="text-sm text-muted-foreground">{resumeEducation.period}</p>
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
              {resumeLanguages.map((language) => (
                <p key={language}>{language}</p>
              ))}
            </div>
          </motion.section>
        </aside>
      </div>
    </>
  );
}
