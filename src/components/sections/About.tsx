'use client';

import { motion } from 'framer-motion';
import { useProfile } from '@/hooks/useApi';
import { cn } from '@/lib/utils';
import { Target, Heart, Zap, Users, BookOpen, Globe } from 'lucide-react';

const stats = [
  { label: 'Proyectos completados', value: '15+', icon: Target },
  { label: 'Años de experiencia', value: '5+', icon: Zap },
  { label: 'Tecnologías dominadas', value: '20+', icon: Heart },
  { label: 'Clientes satisfechos', value: '2 clientes satisfechos', icon: Users },
  { label: 'Artículos técnicos', value: '12+', icon: BookOpen },
  { label: 'Países trabajados', value: '4+', icon: Globe },
];

const values = [
  {
    title: 'Código limpio',
    description: 'Escribo código legible, tipado y mantenible. Siguiendo principios SOLID, Clean Architecture y testing automatizado.',
    icon: Heart,
  },
  {
    title: 'Experiencia de usuario',
    description: 'Cada interacción importa. Accesibilidad WCAG 2.1 AA, rendimiento Core Web Vitals, y animaciones respetuosas.',
    icon: Target,
  },
  {
    title: 'Aprendizaje continuo',
    description: 'Tecnologías nuevas cada semana. Rust, WebAssembly, arquitectura distribuida, y lo que venga después.',
    icon: BookOpen,
  },
  {
    title: 'Colaboración efectiva',
    description: 'Comunicación clara, code reviews constructivos, mentoring, y documentación que se lee y se usa.',
    icon: Users,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] } },
};

export function About() {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <section id="about" className="section bg-muted/30" aria-labelledby="about-title">
        <div className="container-custom">
          <div className="animate-pulse space-y-8 max-w-4xl mx-auto">
            <div className="h-8 bg-muted rounded w-1/4" />
            <div className="h-64 bg-muted rounded-xl" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-24 bg-muted rounded-lg" />
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-48 bg-muted rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const bio = profile?.bio || '';
  const shortBio = profile?.short_bio || '';
  const location = profile?.location;
  const website = profile?.website || 'devfolio.example.com';
  const email = profile?.email || 'klaus@devfolio.example.com';

  return (
    <section id="about" className="section bg-muted/30" aria-labelledby="about-title">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4"
          >
            <Heart className="h-3.5 w-3.5" aria-hidden="true" />
            Sobre mí
          </motion.span>
          <motion.h2
            id="about-title"
            variants={itemVariants}
            className="text-display-lg font-bold tracking-tight text-foreground mb-6"
          >
            Conoce al desarrollador detrás del código
          </motion.h2>
          <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground leading-relaxed">
            {shortBio || 'Full Stack Developer apasionado por crear productos digitales que marcan la diferencia.'}
          </motion.p>
        </motion.div>

        {/* Bio content */}
        <motion.div
          className="prose prose-lg max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-muted-foreground leading-relaxed space-y-6">
            {bio
              .split('\n\n')
              .filter((p) => p.trim())
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-16">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -4, boxShadow: '0 20px 40px -10px hsl(var(--primary) / 0.1)' }}
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" aria-hidden="true" />
                  <div className="relative flex items-center gap-4">
                    <div className="relative p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            variants={itemVariants}
            className="text-heading-lg font-bold text-center text-foreground mb-10"
          >
            Lo que me guía
          </motion.h3>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative flex items-start gap-4">
                    <div className="relative flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-heading-sm font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-body text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* Quick facts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <QuickFact label="Ubicación" value={location || 'Santiago, Chile'} icon="📍" />
            <QuickFact label="Email" value={email} icon="✉️" isEmail />
            <QuickFact label="Sitio web" value={website || 'devfolio.example.com'} icon="🌐" isLink />
            <QuickFact label="Disponibilidad" value="Open to work" icon="💼" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickFact({ label, value, icon, isEmail, isLink }: { label: string; value: string; icon: string; isEmail?: boolean; isLink?: boolean }) {
  return (
    <div className="p-5 rounded-2xl bg-card border border-border">
      <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
      <p className="text-caption text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      {isEmail ? (
        <a href={`mailto:${value}`} className="text-body font-medium text-foreground hover:text-primary transition-colors link-underline">
          {value}
        </a>
      ) : isLink ? (
        <a href={value.startsWith('http') ? value : `https://${value}`} target="_blank" rel="noopener noreferrer" className="text-body font-medium text-foreground hover:text-primary transition-colors link-underline">
          {value}
        </a>
      ) : (
        <p className="text-body font-medium text-foreground">{value}</p>
      )}
    </div>
  );
}