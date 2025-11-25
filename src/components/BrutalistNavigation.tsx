"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BrutalistNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const navItems = [
    { href: "/", label: "HOME", isExternal: false },
    { href: "#experience", label: "EXPERIENCE", isExternal: false },
    { href: "#education", label: "EDUCATION", isExternal: false },
    { href: "#skills", label: "SKILLS", isExternal: false },
    { href: "#portfolio", label: "PORTFOLIO", isExternal: false },
    { href: "#contact", label: "CONTACT", isExternal: false },
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible 
        ? 'transform translate-y-0 opacity-100' 
        : 'transform -translate-y-full opacity-0'
    } bg-deep-navy border-b-4 shadow-brutal`} style={{ borderColor: '#fff6ee' }}>
      <div className="flex items-center justify-between px-6 py-4">
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="text-2xl font-black uppercase tracking-wider transition-all duration-300 transform hover:scale-110 hover:rotate-2"
          style={{ 
            color: isClicked ? '#FF7A18' : '#fff6ee',
            transform: isClicked ? 'scale(1.25) rotate(6deg)' : 'scale(1)'
          }}
          onMouseEnter={(e) => {
            if (!isClicked) e.currentTarget.style.color = '#7EA3BD';
          }}
          onMouseLeave={(e) => {
            if (!isClicked) e.currentTarget.style.color = '#fff6ee';
          }}
        >
          E.A
        </Link>
        
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            item.href === '/' ? (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-mono font-bold text-sm uppercase tracking-wide border-2 border-deep-navy hover:scale-105 hover:shadow-brutal transition-all duration-200 transform"
                style={{ backgroundColor: '#fff6ee', color: '#0f2e5a' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7EA3BD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =  '#fff6ee';
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 font-mono font-bold text-sm uppercase tracking-wide border-2 border-deep-navy hover:scale-105 hover:shadow-brutal transition-all duration-200 transform cursor-pointer"
                style={{ backgroundColor: '#fff6ee', color: '#0f2e5a' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7EA3BD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =  '#fff6ee';
                }}
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        <a 
          href="https://drive.google.com/file/d/1S6Xf4VCKK7lsJqgzJ9W1oBf5QqAhamtO/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 font-mono text-sm font-bold border-2 border-deep-navy hover:bg-warm-orange hover:scale-105 hover:shadow-brutal transition-all duration-200 transform cursor-pointer"
          style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </nav>
  );
}