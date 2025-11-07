"use client";

import React, { useState, useEffect } from 'react';

const RECOMMENDATIONS = [
  {
    text: "Eric consistently delivers high-quality work and demonstrates exceptional problem-solving skills.",
    author: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechCorp"
  },
  {
    text: "His ability to bridge technical and business requirements makes him invaluable to any team.",
    author: "Michael Rodriguez",
    role: "Engineering Director",
    company: "InnovateLabs"
  },
  {
    text: "Eric's leadership in project management and technical execution is outstanding.",
    author: "Jennifer Kim",
    role: "VP of Engineering",
    company: "DataFlow Systems"
  },
  {
    text: "A rare combination of technical depth and strategic thinking. Highly recommended.",
    author: "David Thompson",
    role: "CTO",
    company: "ScaleUp Inc"
  },
  {
    text: "Eric's collaborative approach and attention to detail make complex projects successful.",
    author: "Lisa Wang",
    role: "Product Director",
    company: "CloudTech Solutions"
  }
];

export default function RecommendationsRotator({ active }: { active: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECOMMENDATIONS.length);
        setIsVisible(true);
      }, 300); // Brief fade out before changing text

    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  const currentRec = RECOMMENDATIONS[currentIndex];

  return (
    <div className="bg-mint text-deep-navy h-full overflow-hidden relative border-4 border-deep-navy">
      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-warm-orange border-2 border-deep-navy shadow-pixel"></div>
      <div className="absolute top-1/2 left-0 w-2 h-8 bg-teal-accent border-r-2 border-deep-navy transform -translate-y-1/2"></div>

      {/* 3D Cube Stack - Top Left */}
      <div className="absolute top-6 left-6 flex flex-col space-y-1">
        <div className="w-3 h-3 bg-deep-navy border border-text-cream shadow-pixel"></div>
        <div className="w-3 h-3 bg-warm-orange border border-deep-navy shadow-pixel ml-1"></div>
        <div className="w-3 h-3 bg-label-purple border border-deep-navy shadow-pixel ml-2"></div>
      </div>

      {/* Geometric Pattern - Bottom Right */}
      <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-1">
        <div className="w-2 h-2 bg-teal-accent border border-deep-navy"></div>
        <div className="w-2 h-2 bg-deep-navy border border-text-cream"></div>
        <div className="w-2 h-2 bg-deep-navy border border-text-cream"></div>
        <div className="w-2 h-2 bg-warm-orange border border-deep-navy"></div>
      </div>

      <div className="h-full flex flex-col justify-center p-8 relative z-10">
        <div
          className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Quote Icon */}
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-warm-orange border-4 border-deep-navy shadow-pixel flex items-center justify-center relative">
              <div className="w-6 h-6 bg-deep-navy border-2 border-text-cream"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-label-purple border border-deep-navy"></div>
            </div>
            <div className="font-display text-xs font-black uppercase tracking-widest text-deep-navy/60">
              CLIENT TESTIMONIAL #{currentIndex + 1}
            </div>
          </div>

          <blockquote className="text-lg font-bold leading-relaxed mb-6 relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-warm-orange"></div>
            "{currentRec.text}"
          </blockquote>

          <div className="border-t-4 border-deep-navy pt-4 relative">
            {/* Author Info with Icons */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-4 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
                <div className="w-4 h-4 bg-teal-accent border-2 border-deep-navy shadow-pixel"></div>
              </div>
              <div className="flex-1">
                <div className="font-display text-sm font-black uppercase tracking-wider mb-1">
                  {currentRec.author}
                </div>
                <div className="font-mono text-xs font-bold text-deep-navy/80 mb-1">
                  {currentRec.role}
                </div>
                <div className="font-mono text-xs font-bold text-warm-orange bg-deep-navy px-2 py-1 inline-block border border-deep-navy">
                  {currentRec.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {RECOMMENDATIONS.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 border border-deep-navy ${index === currentIndex ? 'bg-warm-orange' : 'bg-text-cream'
              }`}
          />
        ))}
      </div>
    </div>
  );
}