'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Code2, Zap, Rocket } from 'lucide-react';
import { useProfile } from '@/hooks/useApi';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.5 + custom * 0.08, duration: 0.4, ease: 'backOut' },
  }),
};

export function Hero() {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return (
      <section className="section min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4 max-w-3xl mx-auto px-4 text-center">
          <div className="h-8 bg-muted rounded w-3/4 mx-auto" />
          <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
          <div className="h-4 bg-muted rounded w-1/3 mx-auto" />
        </div>
      </section>
    );
  }

  const name = profile?.name || 'Klaus Widemann';
  const title = profile?.title || 'Full Stack Developer';
  const tagline = profile?.tagline || 'Construyo productos digitales robustos, escalables y bonitos.';
  const shortBio = profile?.short_bio || 'Especializado en React, TypeScript, Python y Cloud.';
  const avatarUrl = profile?.avatar_url;
  const location = profile?.location;
  const socialLinks = [
    { icon: Github, href: profile?.github_url || 'https://github.com/klauswidemann', label: 'GitHub' },
    { icon: Linkedin, href: profile?.linkedin_url || 'https://linkedin.com/in/klauswidemann', label: 'LinkedIn' },
    { icon: Twitter, href: profile?.twitter_url || 'https://twitter.com/klauswidemann', label: 'Twitter' },
    { icon: Mail, href: `mailto:${profile?.email || 'klaus@devfolio.example.com'}`, label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="section min-h-screen relative flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Disponible para contratación</span>
                <span className="sm:hidden">Open to work</span>
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="text-display-xl lg:text-display-md font-bold tracking-tight text-foreground mb-6"
            >
              <span className="block">Hola, soy</span>
              <span className="gradient-text block">{name}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-heading-lg font-medium text-primary mb-4">
              {title}
            </motion.p>

            <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {tagline}
            </motion.p>

            <motion.p variants={itemVariants} className="text-body text-muted-foreground/80 max-w-md mx-auto lg:mx-0 mb-10">
              {shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link
                href="#projects"
                className="btn-primary btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ver proyectos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
              <Link
                href="/resume"
                className="btn-outline btn-lg"
              >
                Ver CV
              </Link>
              <Link
                href="#contact"
                className="btn-outline btn-lg"
              >
                Contactar
              </Link>
            </motion.div>

            {/* Tech highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground/70">
              {['React', 'TypeScript', 'Next.js', 'Python', 'FastAPI', 'Tailwind', 'PostgreSQL', 'Docker', 'AWS'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="badge-outline flex items-center gap-1.5"
                  style={{ animationDelay: `${0.8 + i * 0.05}s` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'backOut' }}
                >
                  <span className="text-xs font-mono text-primary/70">//</span>
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar + Social */}
          <div className="relative flex flex-col items-center lg:items-end">
            <motion.div
              variants={itemVariants}
              className="relative mb-8"
            >
              <div className="relative">
                {/* Glow ring */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-primary rounded-full opacity-30 blur-xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                />
                {/* Avatar */}
                <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-border bg-gradient-mesh shadow-2xl">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={`${name} - Foto de perfil`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-primary">
                      <Code2 className="h-24 w-24 text-primary-foreground/20" aria-hidden="true" />
                    </div>
                  )}
                </div>
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="glass px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                    <span className="font-medium">5+ años</span>
                    <span className="text-muted-foreground">exp.</span>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="glass px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
                    <Rocket className="h-4 w-4 text-green-400" aria-hidden="true" />
                    <span className="font-medium">Open Source</span>
                    <span className="text-muted-foreground">contributor</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  custom={i}
                  className="btn-ghost h-12 w-12 rounded-xl transition-all hover:scale-110"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>

            {/* Location */}
            {location && (
              <motion.p variants={itemVariants} className="mt-8 text-sm text-muted-foreground flex items-center gap-1.5 justify-center lg:justify-end">
                <span className="hidden sm:inline">Basado en </span>
                <span className="font-medium text-foreground">{location}</span>
                <span className="hidden sm:inline"> 🌎</span>
              </motion.p>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Explorar</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}