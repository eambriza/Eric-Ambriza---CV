// src/app/layout.tsx
import type { Metadata } from 'next';
import { Space_Mono, Roboto } from 'next/font/google';
import './globals.css';

import Navigation from '@/components/Navigation';
import LoadingOverlay from '@/components/LoadingOverlay';
import Footer from '@/components/Footer';
import { LoadingProvider } from '@/contexts/LoadingContext';

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
      <body className="bg-[#2b2d31] text-text-primary font-sans">
        <LoadingProvider>
          <LoadingOverlay />

          {/* INFO GLASS CARD (single foreground layer) */}
          <div className="fixed inset-6 z-10 bg-white/2 backdrop-blur-2xl border border-white/25 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col rounded-2xl">
            {/* Subtle sheen overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[.15] bg-gradient-to-b from-white to-transparent" />

            {/* Navigation Header - 20% transparent with no border */}
            <div className="relative z-10 p-10 bg-white/2">
              <Navigation />
            </div>

            {/* Main Content Area - 20% transparent */}
            <main className="relative z-10 flex-1 overflow-y-auto p-10 space-y-12 bg-white/2">
              {children}
            </main>
            
            {/* Footer inside glass container */}
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
