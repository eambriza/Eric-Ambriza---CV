'use client'

import { useEffect, useState } from 'react'
import { useLoading } from '@/contexts/LoadingContext'

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
}

export default function Typewriter({ text, speed = 70, className = '' }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const { hasLoadingFinished } = useLoading()

  useEffect(() => {
    // Reset animation when loading finishes
    if (hasLoadingFinished) {
      setDisplayText('')
      setCurrentIndex(0)
    }
  }, [hasLoadingFinished])

  useEffect(() => {
    // Only start typing animation after loading finishes
    if (hasLoadingFinished && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, hasLoadingFinished])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span className={`typing-cursor ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </div>
  )
}