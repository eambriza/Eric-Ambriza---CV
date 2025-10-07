'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface LoadingContextType {
  isLoading: boolean
  hasLoadingFinished: boolean
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  hasLoadingFinished: false
})

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [hasLoadingFinished, setHasLoadingFinished] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    setHasLoadingFinished(false)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      setHasLoadingFinished(true)
    }, 600) // 2 seconds loading time - YOU CAN CHANGE THIS VALUE HERE

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <LoadingContext.Provider value={{ isLoading, hasLoadingFinished }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  return useContext(LoadingContext)
}