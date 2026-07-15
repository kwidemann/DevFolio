import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart, Code2, Coffee } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/klauswidemann', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/klauswidemann', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/klauswidemann', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:klaus@devfolio.example.com', icon: Mail, label: 'Email' },
];

const footerLinks = {
  Producto: [
    { href: '/projects', label: 'Proyectos' },
    { href: '/blog', label: 'Blog' },
    { href: '/skills', label: 'Habilidades' },
  ],
  Empresa: [
    { href: '/about', label: 'Sobre mí' },
    { href: '/contact', label: 'Contacto' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacidad' },
    { href: '/terms', label: 'Términos' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground mb-4">
              <span className="gradient-text">KW</span>
              <span>DevFolio</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full Stack Developer construyendo productos digitales robustos, escalables y bonitos.
              Especializado en React, TypeScript, Python y Cloud.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Klaus Widemann. Construido con{' '}
              <span className="flex inline-items-center gap-1">
                <Heart className="h-3 w-3 text-red-500" aria-hidden="true" />
                <Code2 className="h-3 w-3" aria-hidden="true" />
                <Coffee className="h-3 w-3 text-amber-600" aria-hidden="true" />
              </span>{' '}
              y mucho café.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Hecho con Next.js 14 + Tailwind CSS</span>
              <a
                href="https://github.com/klauswidemann/devfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors link-underline"
              >
                Código abierto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}