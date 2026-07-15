'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { useContactForm } from '@/hooks/useApi';
import { useProfile } from '@/hooks/useApi';
import { cn } from '@/lib/utils';
import { Mail, Send, CheckCircle, AlertCircle, Loader2, MessageSquare, MapPin, Globe, Linkedin, Github, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] } },
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { data: profile } = useProfile();
  const submitContact = useContactForm();

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es obligatorio';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';
    else if (formData.message.trim().length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContact.mutateAsync(formData);
      setSubmitStatus('success');
      toast.success('¡Mensaje enviado!', {
        description: 'Te responderé lo antes posible.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Error al enviar', {
        description: 'Intenta de nuevo o escríbeme directamente por email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile?.email || 'klaus@devfolio.example.com', href: `mailto:${profile?.email || 'klaus@devfolio.example.com'}` },
    { icon: MapPin, label: 'Ubicación', value: profile?.location || 'Santiago, Chile' },
    { icon: Globe, label: 'Sitio web', value: profile?.website || 'devfolio.example.com', href: profile?.website ? `https://${profile.website}` : undefined },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: profile?.github_url || 'https://github.com/klauswidemann' },
    { icon: Linkedin, label: 'LinkedIn', href: profile?.linkedin_url || 'https://linkedin.com/in/klauswidemann' },
    { icon: Twitter, label: 'Twitter', href: profile?.twitter_url || 'https://twitter.com/klauswidemann' },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-custom">
        {/* Header */}
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

        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact Info */}
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

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            noValidate
          >
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 md:p-8"
              variants={itemVariants}
            >
              <h3 className="text-heading-md font-bold text-foreground mb-6">Envíame un mensaje</h3>

              {/* Success/Error Messages */}
              <motion.div
                className={cn(
                  'mb-6 p-4 rounded-xl flex items-center gap-3',
                  submitStatus === 'success' && 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20',
                  submitStatus === 'error' && 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                )}
                initial={false}
                animate={{ opacity: submitStatus !== 'idle' ? 1 : 0, height: submitStatus !== 'idle' ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                role="alert"
              >
                {submitStatus === 'success' && (
                  <>
                    <CheckCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <p>¡Mensaje enviado correctamente! Te responderé pronto.</p>
                  </>
                )}
                {submitStatus === 'error' && (
                  <>
                    <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <p>Error al enviar. Intenta de nuevo o escríbeme directamente por email.</p>
                  </>
                )}
              </motion.div>

              {/* Form Fields */}
              <div className="space-y-5">
                <FormField
                  name="name"
                  label="Nombre"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  icon={<MessageSquare className="h-4 w-4" />}
                  required
                />

                <FormField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  icon={<Mail className="h-4 w-4" />}
                  required
                />

                <FormField
                  name="subject"
                  label="Asunto"
                  placeholder="Sobre qué quieres hablar..."
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  icon={<MessageSquare className="h-4 w-4" />}
                  required
                />

...
                {/* Honeypot spam field */}
                <input type="checkbox" name="website" id="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'btn-primary btn-lg w-full justify-center gap-2',
                    isSubmitting && 'opacity-50 cursor-not-allowed'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </motion.button>

                <motion.p className="text-center text-sm text-muted-foreground">
                  Al enviar, aceptas que tus datos se usen solo para responderte.{' '}
                  <Link href="/privacy" className="underline hover:no-underline">Política de privacidad</Link>
                </motion.p>
              </div>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  icon: React.ReactNode;
  type?: string;
  as?: 'input' | 'textarea';
  rows?: number;
  required?: boolean;
}

function FormField({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  icon,
  type = 'text',
  as = 'input',
  rows = 4,
  required = false,
}: FormFieldProps) {
  const id = `contact-${name}`;

  return (
    <motion.div className="relative" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <label htmlFor={id} className="label block mb-1.5">
        {label}
        {required && <span className="text-primary ml-1" aria-hidden="true">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          {icon}
        </div>
        {as === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            className={cn(
              'input pl-10 pr-4',
              error && 'border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500'
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            required={required}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cn(
              'input pl-10 pr-4',
              error && 'border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500'
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            required={required}
            autoComplete={name === 'email' ? 'email' : name === 'name' ? 'name' : 'off'}
          />
        )}
      </div>
      {error && (
        <motion.p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}