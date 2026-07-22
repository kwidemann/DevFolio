import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Klaus Widemann | Full Stack Developer',
    template: '%s | Klaus Widemann',
  },
  description: 'Full Stack Developer especializado en React, TypeScript y Cloud. Construyo productos digitales robustos, escalables y bonitos.',
  keywords: ['Full Stack Developer', 'React', 'TypeScript', 'Next.js', 'Cloud', 'Portfolio'],
  authors: [{ name: 'Klaus Widemann', url: 'https://github.com/klauswidemann' }],
  creator: 'Klaus Widemann',
  publisher: 'Klaus Widemann',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'DevFolio - Klaus Widemann',
    title: 'Klaus Widemann | Full Stack Developer',
    description: 'Full Stack Developer especializado en React, TypeScript, Python y Cloud.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Klaus Widemann - Full Stack Developer Portfolio',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="font-sans">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.dicebear.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}