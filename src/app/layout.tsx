// src/app/layout.tsx
import type { Metadata } from 'next';
import { Space_Mono, Roboto } from 'next/font/google';
import './globals.css';

import BackCard from '@/components/BackCard';
import Navigation from '@/components/Navigation';
import LoadingOverlay from '@/components/LoadingOverlay';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Eric Ambriza - Full Stack Developer & Data Analyst',
  description:
    'Portfolio and CV of Eric Ambriza - Computer Science graduate with expertise in React, Python, and data analysis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${roboto.variable}`}>
      <body className="bg-page-bg text-text-primary font-sans">
        {/* BACK FRAME (only) */}
        <BackCard />

        {/* INFO GLASS CARD (single foreground layer) */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl h-[calc(100vh-3rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] mx-6 md:mx-10 lg:mx-12 rounded-2xl bg-white/25 backdrop-blur-2xl border border-white/25 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col">
          {/* Subtle sheen overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[.15] bg-gradient-to-b from-white to-transparent" />
          
          <LoadingOverlay />

          {/* Header bar */}
          <div className="relative z-10 p-6 md:p-10 border-b border-white/10 bg-white/5 backdrop-blur-sm">
            <Navigation />
          </div>

          {/* Main content */}
          <main className="relative z-10 flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
