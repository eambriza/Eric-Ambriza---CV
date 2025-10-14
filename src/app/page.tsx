'use client';

import { useEffect, useState } from 'react';

export default function Landing() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Full Stack Developer & Data Analyst';

  useEffect(() => {
    // Typing animation
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center space-y-8">
        {/* Main heading */}
        <h1
          className="glitch-text font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-text-primary uppercase"
          data-text="I'M ERIC AMBRIZA"
        >
          I'M ERIC AMBRIZA
        </h1>

        {/* Typing animation line */}
        <div className="flex items-center justify-center min-h-[2rem]">
          <div className="h-0.5 bg-accent-orange w-16 md:w-24 lg:w-32 animate-pulse"></div>
          <span
            className={`ml-2 text-accent-orange text-2xl md:text-3xl font-light transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          >
            |
          </span>
        </div>

        {/* Typed subtitle */}
        <div className="min-h-[3rem] flex items-center justify-center">
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {typedText}
            {typedText.length < fullText.length && (
              <span
                className={`text-accent-orange ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
              >
                |
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
