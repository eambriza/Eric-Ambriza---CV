import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export const SectionHeading = ({
  label,
  title,
  className = ''
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      {/* Brutal Label Box */}
      <div className="inline-block bg-cyber-blue text-matrix-black border-4 border-matrix-black shadow-brutal px-4 py-2 mb-4">
        <span className="font-mono text-retro font-bold uppercase tracking-widest">
          [{label}]
        </span>
      </div>

      {/* Glitch Title */}
      <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-matrix-black mb-4 relative">
        <span className="relative z-10">{title}</span>
        <span className="absolute top-0 left-1 text-hot-pink opacity-70 -z-10">
          {title}
        </span>
        <span className="absolute top-0 left-2 text-cyber-blue opacity-50 -z-20">
          {title}
        </span>
      </h2>

      {/* Pixel Divider */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-neon-green border-2 border-matrix-black"></div>
        <div className="flex-1 h-4 bg-gradient-to-r from-cyber-blue via-hot-pink to-electric-yellow border-2 border-matrix-black"></div>
        <div className="w-8 h-8 bg-pixel-red border-2 border-matrix-black"></div>
      </div>
    </div>
  );
};