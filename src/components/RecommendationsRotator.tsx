"use client";

import React, { useState, useEffect } from 'react';

const RECOMMENDATIONS = [
  {
    text: "Eric’s ability to manage complex digital transformation projects with precision and empathy made a measurable impact on every initiative we worked on. His structured approach, paired with strong communication, consistently drove success across global teams.",
    author: "Lourena do Rosario",
    role: "Project Manager",
    company: "Meta",
    workedAt: "Dimagi"
  },
  {
    text: "Eric combines technical understanding with business acumen in a rare way. He’s a project leader who understands system design, delivery, and stakeholder alignment, which makes him a trusted partner in both engineering and strategic discussions.",
    author: "Marcelo Dauane",
    role: "Senior Engineering Manager",
    company: "MoonPay",
    workedAt: "Freelance"
  },
  {
    text:"At Vodacom, Eric played a key role in aligning technology and operations to deliver major infrastructure and digital initiatives on time. His leadership, discipline, and results-oriented mindset made him one of the most reliable project managers on our team.",
    author: "Pedro Fernandes",
    role: "Executive Head Network & Infrastructure Planning Engineering",
    company: "Vodacom",
    workedAt: "Vodacom"
  },
  {
    text: "Eric has an exceptional ability to bridge IT and business objectives. During our collaboration at Vodacom, he consistently demonstrated strong analytical thinking, problem-solving, and a focus on delivery excellence that inspired his peers.",
    author: "Rui Cossa",
    role: "Head: Application Solution Management",
    company: "Standard Bank Moçambique",
    workedAt: "Vodacom"
  },
  {
    text: "Eric brings energy, structure, and innovation to every project. His attention to detail and ability to motivate cross-functional teams make him a standout leader in project management and digital solution delivery.",
    author: "Yomila Simoes",
    role: "Senior Project Analyst",
    company: "Dimagi",
    workedAt: "Dimagi"
  },
  {
    text: "Eric’s professionalism and deep technical knowledge set him apart. At Mozal, he improved system processes and data workflows, ensuring operational efficiency and reliable information management across departments.",
    author: "Chris Meyer",
    role: "Information Manager",
    company: "Mozal",
    workedAt: "Mozal"
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
    <div className="bg-[#F5FAFD] text-deep-navy h-full overflow-hidden border-4 border-deep-navy">
      <div className="h-full flex flex-col justify-center p-6">
        <div
          className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <blockquote className="text-base leading-relaxed mb-4">
            "{currentRec.text}"
          </blockquote>

          <div className="border-t-2 border-deep-navy pt-3">
            <div className="font-bold text-sm mb-1">
              {currentRec.author}
            </div>
            <div className="text-xs text-deep-navy/70 mb-1">
              {currentRec.role} at {currentRec.company}
            </div>
            <div className="text-xs text-deep-navy/60">
              Worked together at {currentRec.workedAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}