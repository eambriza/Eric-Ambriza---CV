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
    <div className="bg-warm-orange text-deep-navy h-full overflow-hidden">
      <div className="h-full flex items-start justify-center p-4">
        <div
          className={`text-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider leading-tight">
            {MANTRAS[currentIndex].split(' ').map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </h2>
        </div>
      </div>
    </div>
  );
}