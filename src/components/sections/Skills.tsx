'use client';

import { motion } from 'framer-motion';
import { useSkills, useSkillCategories } from '@/hooks/useApi';
import { cn } from '@/lib/utils';
import { Star, TrendingUp, Target, Code2, Server, Database, Cpu, Wrench, Users } from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  devops: Cpu,
  tools: Wrench,
  soft: Users,
  default: Target,
};

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de Datos',
  devops: 'DevOps & Cloud',
  tools: 'Herramientas',
  soft: 'Habilidades Blandas',
};

export function Skills() {
  const { data: skills, isLoading, error } = useSkills();
  const { data: categories } = useSkillCategories();

  if (isLoading) {
    return (
      <section id="skills" className="section bg-muted/30" aria-labelledby="skills-title">
        <div className="container-custom">
          <div className="animate-pulse space-y-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="h-8 bg-muted rounded w-1/4" />
            </div>
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-muted rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !skills) {
    return (
      <section id="skills" className="section bg-muted/30" aria-labelledby="skills-title">
        <div className="container-custom text-center py-16">
          <p className="text-muted-foreground">Error cargando habilidades</p>
        </div>
      </section>
    );
  }

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || 'default';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Sort categories: frontend, backend, database, devops, tools, soft, others
  const categoryOrder = ['frontend', 'backend', 'database', 'devops', 'tools', 'soft'];
  const sortedCategories = [
    ...categoryOrder.filter(cat => grouped[cat]),
    ...Object.keys(grouped).filter(cat => !categoryOrder.includes(cat)),
  ];

  return (
    <section id="skills" className="section bg-muted/30" aria-labelledby="skills-title">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            Stack tecnológico
          </span>
          <h2 id="skills-title" className="text-display-lg font-bold tracking-tight text-foreground mb-6">
            Habilidades y tecnologías que domino
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Aprendizaje continuo aplicado a proyectos reales. Cada tecnología aquí la he usado en producción
            o en proyectos personales significativos.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {sortedCategories.map((category) => {
            const categorySkills = grouped[category];
            const Icon = categoryIcons[category] || categoryIcons.default;
            const label = categoryLabels[category] || category;

            return (
              <motion.div
                key={category}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08 } },
                }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 transition-all hover:border-primary/30"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-primary/10 text-primary"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: 'backOut' }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-heading-lg font-bold text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {label}
                    </motion.h3>
                    <motion.p className="text-sm text-muted-foreground">
                      {categorySkills.length} tecnolog{categorySkills.length === 1 ? 'ía' : 'ías'}
                    </motion.p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills
                    .sort((a, b) => b.proficiency - a.proficiency)
                    .map((skill, index) => (
                      <SkillCard key={skill.id} skill={skill} index={index} Icon={Icon} />
                    ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Skills Highlight */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-primary text-primary-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, ease: 'backOut' }}
            >
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
              En aprendizaje activo
            </motion.div>
            <motion.h3 className="text-display-sm font-bold mb-4">
              Actualmente explorando
            </motion.h3>
            <motion.p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Magíster en Inteligencia Artificial, TypeScript y Next.js avanzados, arquitectura de sistemas distribuidos,
              y optimización de rendimiento en el navegador. ¿Tienes un proyecto interesante? <Link href="#contact" className="underline hover:no-underline">Hablemos</Link>.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-2">
              {['TypeScript', 'Next.js 14', 'Rust', 'WebAssembly', 'gRPC', 'Kubernetes'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.08, ease: 'backOut' }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: {
    id: number;
    name: string;
    category: string;
    proficiency: number;
    icon: string | null;
    sort_order: number;
  };
  index: number;
  Icon: React.ComponentType<{ className?: string }>;
}

function SkillCard({ skill, index, Icon }: SkillCardProps) {
  const proficiency = skill.proficiency;
  const isHigh = proficiency >= 4;

  return (
    <motion.div
      className="group relative p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-muted transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08 }}
      whileHover={{ y: -4, boxShadow: '0 10px 25px -5px hsl(var(--primary) / 0.1)' }}
      layout
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <motion.h4 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
              {skill.name}
            </motion.h4>
            <motion.div
              className="text-xs text-muted-foreground"
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
            >
              {isHigh ? 'Experto' : proficiency >= 3 ? 'Avanzado' : 'Intermedio'}
            </motion.div>
          </div>
        </div>
        {isHigh && (
          <motion.div
            className="flex-shrink-0 p-1.5 rounded-full bg-yellow-500/20 text-yellow-500"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 + index * 0.05, ease: 'backOut' }}
            whileHover={{ rotate: 360, scale: 1.1 }}
          >
            <Star className="h-4 w-4" aria-hidden="true" />
          </motion.div>
        )}
      </div>

      {/* Proficiency Bar */}
      <div className="relative">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-muted-foreground">Nivel</span>
          <span className="font-medium text-foreground">{proficiency}/5</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(proficiency / 5) * 100}%` }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.05, ease: 'easeOut' }}
          />
        </div>

        {/* Proficiency dots */}
        <div className="flex items-center justify-end gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((level) => (
            <motion.div
              key={level}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                level <= proficiency
                  ? 'bg-primary'
                  : 'bg-muted-foreground/20'
              )}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.05 + level * 0.03, ease: 'backOut' }}
            />
          ))}
        </div>
      </div>

    </motion.div>
  );
}

import Link from 'next/link';
import { Calendar } from 'lucide-react';