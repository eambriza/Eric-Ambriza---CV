"use client";

import React, { useState, useEffect } from 'react';

const MANTRAS = [
  "MUST KNOW INFO FOR YOU",
  "SHIP GREAT WORK ON TIME",
  "PM WHO CODES AND BUILDS",
  "DATA MEETS REAL CHOICES",
  "SYSTEMS THAT SCALE WELL",
  "CLEAR SCOPE ALWAYS WINS",
  "DESIGN FOR EDGE CASES",
  "MEASURE PROGRESS THEN IMPROVE",
  "AUTOMATE THE BORING TASKS",
  "USERS OVER EGO COME FIRST",
  "SMALL PRS FAST RELEASES",
  "OWN THE END TO END",
  "SIMPLE BEATS CLEVER TRICKS",
  "TEST WHAT REALLY MATTERS",
  "DOCUMENT THE WHY AND HOW",
  "BUILD TRUST WITH REAL DATA",
  "ALIGN TEAMS AND UNBLOCK WORK",
  "CUT MEETINGS KEEP STRONG FLOW",
  "FAIL FAST FIX IT FASTER",
  "LAUNCH LEARN AND ITERATE"
];

export default function MantraRotator({ active }: { active: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % MANTRAS.length);
        setIsVisible(true);
      }, 300); // Brief fade out before changing text

    }, 9000); // Change every 9 seconds

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className="bg-warm-orange text-deep-navy h-full overflow-hidden relative border-4 border-deep-navy">
      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-deep-navy border-2 border-text-cream shadow-pixel"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
      <div className="absolute top-1/2 right-0 w-2 h-8 bg-teal-accent border-l-2 border-deep-navy transform -translate-y-1/2"></div>
      
      {/* 3D Geometric Stack - Top Left */}
      <div className="absolute top-6 left-6 flex space-x-1">
        <div className="w-4 h-4 bg-deep-navy border-2 border-text-cream shadow-pixel"></div>
        <div className="w-4 h-4 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
        <div className="w-4 h-4 bg-teal-accent border-2 border-deep-navy shadow-pixel"></div>
      </div>

      {/* Floating Cubes - Bottom Right */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-2">
        <div className="w-3 h-3 bg-text-cream border border-deep-navy shadow-pixel ml-4"></div>
        <div className="w-3 h-3 bg-deep-navy border border-text-cream shadow-pixel ml-2"></div>
        <div className="w-3 h-3 bg-label-purple border border-deep-navy shadow-pixel"></div>
      </div>

      <div className="h-full flex items-center justify-center p-6 relative z-10">
        <div
          className={`text-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} relative`}
        >
          {/* Mantra Counter */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-deep-navy text-text-cream px-3 py-1 font-mono text-xs font-bold border-2 border-deep-navy shadow-pixel">
              MANTRA #{currentIndex + 1}/{MANTRAS.length}
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-tight relative">
            {MANTRAS[currentIndex].split(' ').map((word, index) => (
              <div key={index} className="relative">
                {word}
                {index === 0 && (
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-label-purple border border-deep-navy"></div>
                )}
              </div>
            ))}
          </h2>

          {/* Accent Lines */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-2">
            <div className="w-8 h-1 bg-deep-navy"></div>
            <div className="w-4 h-1 bg-label-purple"></div>
            <div className="w-8 h-1 bg-deep-navy"></div>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 border border-deep-navy ${
              index === currentIndex % 5 ? 'bg-deep-navy' : 'bg-text-cream'
            }`}
          />
        ))}
      </div>
    </div>
  );
}