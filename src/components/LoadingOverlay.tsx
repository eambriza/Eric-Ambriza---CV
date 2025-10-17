'use client';

import { useLoading } from '@/contexts/LoadingContext';

export default function LoadingOverlay() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 bg-deep-navy flex items-center justify-center z-50"
      aria-live="polite"
    >
      <div className="text-center">
        {/* Brutalist Loading Design */}
        <div className="bg-teal text-deep-navy p-8 border-4 border-deep-navy shadow-brutal mb-6">
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
            LOADING
          </h1>
          <div className="flex justify-center space-x-2">
            <div className="w-4 h-4 bg-deep-navy border-2 border-deep-navy animate-pulse"></div>
            <div className="w-4 h-4 bg-deep-navy border-2 border-deep-navy animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-deep-navy border-2 border-deep-navy animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        
        {/* Loading Progress Bar */}
        <div className="bg-text-cream border-4 border-deep-navy shadow-brutal p-4 max-w-md mx-auto">
          <div className="bg-deep-navy h-4 border-2 border-deep-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-warm-orange animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal to-lime-accent animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <p className="font-mono text-sm font-bold uppercase tracking-wider mt-2 text-deep-navy">
            INITIALIZING BRUTALIST CV
          </p>
        </div>
      </div>
    </div>
  );
}
