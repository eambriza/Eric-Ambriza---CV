'use client'

import { useLoading } from '@/contexts/LoadingContext'

export default function LoadingOverlay() {
  const { isLoading } = useLoading()

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      aria-live="polite"
    >
      <div className="text-center">
        <div className="text-[#6b7280] text-2xl md:text-3xl font-mono tracking-wider">
          Loading
          <span className="inline-block ml-1">
            <span className="opacity-0 animate-pulse" style={{ animationDelay: '0ms', animationDuration: '0.6s' }}>.</span>
            <span className="opacity-0 animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '0.6s' }}>.</span>
            <span className="opacity-0 animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '0.6s' }}>.</span>
          </span>
        </div>
      </div>
    </div>
  )
}