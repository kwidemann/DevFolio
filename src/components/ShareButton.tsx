'use client';

import { useState } from 'react';
import { Copy, Share2, Linkedin } from 'lucide-react';

export function ShareButton({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedTitle = encodeURIComponent(title);
    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      github: `https://github.com/klauswidemann/devfolio/issues/new?title=${encodedTitle}&body=${encodedUrl}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button onClick={() => handleShare('linkedin')} className="btn-ghost btn-sm p-2" aria-label="Compartir en LinkedIn">
        <Linkedin className="h-5 w-5" aria-hidden="true" />
      </button>
      <button onClick={handleCopy} className="btn-ghost btn-sm p-2" aria-label={copied ? 'Copiado!' : 'Copiar enlace'}>
        {copied ? <Copy className="h-5 w-5 text-green-500" aria-hidden="true" /> : <Share2 className="h-5 w-5" aria-hidden="true" />}
      </button>
    </div>
  );
}
