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

export default function RecommendationsRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECOMMENDATIONS.length);
        setIsVisible(true);
      }, 300); // Brief fade out before changing text

    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const currentRec = RECOMMENDATIONS[currentIndex];

  return (
    <div className="bg-mint text-deep-navy h-full overflow-hidden">
      <div className="h-full flex flex-col justify-center p-6">
        <div
          className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="mb-4">
            <div className="w-8 h-8 bg-warm-orange border-2 border-deep-navy shadow-pixel mb-4"></div>
            <blockquote className="text-lg font-bold leading-relaxed mb-4">
              "{currentRec.text}"
            </blockquote>
          </div>
          
          <div className="border-t-2 border-deep-navy pt-4">
            <div className="font-display text-sm font-black uppercase tracking-wider">
              {currentRec.author}
            </div>
            <div className="font-mono text-xs font-bold text-deep-navy/80">
              {currentRec.role}
            </div>
            <div className="font-mono text-xs font-bold text-warm-orange">
              {currentRec.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}