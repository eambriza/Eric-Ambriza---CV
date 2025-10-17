"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BrutalistNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#skills", label: "SKILLS" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#education", label: "EDUCATION" },
    { href: "#contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible 
        ? 'transform translate-y-0 opacity-100' 
        : 'transform -translate-y-full opacity-0'
    } bg-deep-navy border-b-4 border-teal shadow-brutal`}>
      <div className="flex items-center justify-between px-6 py-4">
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className={`text-2xl font-black uppercase tracking-wider transition-all duration-300 transform hover:scale-110 hover:rotate-2 ${
            isClicked 
              ? 'text-warm-orange scale-125 rotate-6' 
              : 'text-teal hover:text-lime-accent'
          }`}
        >
          E.A
        </Link>
        
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 bg-teal text-deep-navy font-mono font-bold text-sm uppercase tracking-wide border-2 border-deep-navy hover:bg-lime-accent hover:scale-105 hover:shadow-brutal transition-all duration-200 transform"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a 
          href="https://drive.google.com/file/d/1S6Xf4VCKK7lsJqgzJ9W1oBf5QqAhamtO/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal text-deep-navy px-4 py-2 font-mono text-sm font-bold border-2 border-deep-navy hover:bg-warm-orange hover:scale-105 hover:shadow-brutal transition-all duration-200 transform cursor-pointer"
        >
          DOWNLOAD CV
        </a>
      </div>
    </nav>
  );
}