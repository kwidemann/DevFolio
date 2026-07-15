'use client';

import { Providers } from './Providers';
import { Header } from './Header';
import { Footer } from './Footer';
import { ReactNode } from 'react';

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16" id="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}