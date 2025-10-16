'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Resume', href: '/resume' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const isHomePage = pathname === '/';

  return (
    <nav className="flex items-center justify-between">
      {/* Left: Site mark - orange only on home page */}
      <Link
        href="/"
        data-cursor="hover"
        className={`text-xl font-mono font-bold tracking-wider transition-colors ${
          isHomePage 
            ? 'text-accent-orange hover:text-accent-orange' 
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        EA
      </Link>

      {/* Right: Navigation items */}
      <div className="flex items-center space-x-6 md:space-x-20">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const isContact = item.name === 'Contact';

          if (isContact) {
            return (
              <Link
                key={item.name}
                href={item.href}
                data-cursor="hover"
                className={`relative border px-4 py-2 rounded transition-colors duration-200 ${
                  active
                    ? 'border-accent-orange text-accent-orange'
                    : 'border-text-secondary text-text-secondary hover:border-accent-orange hover:text-accent-orange'
                }`}
              >
                {active && <span className="nav-bubble" aria-hidden />}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              data-cursor="hover"
              className={`relative px-3 py-1 transition-colors duration-200 ${
                active
                  ? 'text-accent-orange'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {active && <span className="nav-bubble" aria-hidden />}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
