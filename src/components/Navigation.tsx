'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Resume', href: '/resume' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between">
      {/* Left: Site mark */}
      <Link href="/" className="text-xl font-mono font-bold tracking-wider text-text-primary hover:text-accent-orange transition-colors">
        EA
      </Link>

      {/* Right: Navigation items */}
      <div className="flex items-center space-x-6 md:space-x-20">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const isContact = item.name === 'Contact'
          
          if (isContact) {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="contact-button"
              >
                {item.name}
              </Link>
            )
          }
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}