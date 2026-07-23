'use client';

import { motion } from 'framer-motion';
import { useProfile } from '@/hooks/useApi';
import { Mail, Send, MessageSquare, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] } },
};

export function Contact() {
  const { data: profile } = useProfile();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile?.email || 'klaus@devfolio.example.com',
      href: `mailto:${profile?.email || 'klaus@devfolio.example.com'}`,
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: profile?.location || 'Santiago, Chile',
    },
    {
      icon: Globe,
      label: 'Sitio web',
      value: profile?.website || 'devfolio.example.com',
      href: profile?.website ? `https://${profile.website}` : undefined,
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: profile?.github_url || 'https://github.com/klauswidemann' },
    { icon: Linkedin, label: 'LinkedIn', href: profile?.linkedin_url || 'https://linkedin.com/in/klauswidemann' },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4"
          >
            <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
            Contacto
          </motion.span>
          <motion.h2
            id="contact-title"
            variants={itemVariants}
            className="text-display-lg font-bold tracking-tight text-foreground mb-6"
          >
            Hablemos de tu proyecto
          </motion.h2>
          <motion.p variants={itemVariants} className="text-body-lg text-muted-foreground leading-relaxed">
            ¿Tienes un proyecto en mente? ¿Buscas a alguien para tu equipo? ¿Solo quieres saludar?
            Escríbeme y te responderé personalmente.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="space-y-8">
              <motion.div className="p-6 rounded-2xl bg-card border border-border" variants={itemVariants}>
                <h3 className="text-heading-md font-bold text-foreground mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href || '#'}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                      target={item.href ? '_blank' : undefined}
                      rel={item.href ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div className="p-6 rounded-2xl bg-card border border-border" variants={itemVariants}>
                <h3 className="text-heading-md font-bold text-foreground mb-4">Redes sociales</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all group"
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground" variants={itemVariants}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/20">
                    <Send className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Respuesta garantizada</h4>
                    <p className="opacity-90 text-sm">Respondo todos los mensajes en 24-48h. Sin bots, sin plantillas.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div className="bg-card border border-border rounded-2xl p-6 md:p-8" variants={itemVariants}>
              <h3 className="text-heading-md font-bold text-foreground mb-6">Contacto directo</h3>
              <p className="text-body text-muted-foreground leading-relaxed mb-6">
                El formulario ha sido deshabilitado. Escríbeme directamente por email o usando las redes sociales.
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${profile?.email || 'klaus@devfolio.example.com'}`}
                  className="block rounded-2xl bg-muted p-4 text-foreground hover:bg-muted/80 transition-colors"
                >
                  {profile?.email || 'klaus@devfolio.example.com'}
                </a>
                {profile?.website && (
                  <a
                    href={`https://${profile.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl bg-muted p-4 text-foreground hover:bg-muted/80 transition-colors"
                  >
                    {profile.website}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
