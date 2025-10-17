// src/app/layout.tsx
import type { Metadata } from 'next';
import { Space_Mono, Roboto } from 'next/font/google';
import './globals.css';
import { LoadingProvider } from '@/contexts/LoadingContext';
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
  title: 'Eric Ambriza - Project Manager & Data Analyst',
  description:
    'Portfolio and CV of Eric Ambriza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${roboto.variable}`}>
      <body className="bg-white font-sans">
        <LoadingProvider>
          <LoadingOverlay />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
