'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300) // Short loading time for smooth UX

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div 
      className="absolute inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl"
      aria-live="polite"
    >
      <div className="text-center">
        <div className="text-text-primary text-lg font-mono tracking-wider">
          Loading
          <span className="inline-block animate-pulse">
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
          </span>
        </div>
      </div>
    </div>
  )
}