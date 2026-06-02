import { useEffect, useState } from 'react'

interface FadeInProps {
  delay?: number
  duration?: number
  children: React.ReactNode
  className?: string
}

export function FadeIn({ delay = 0, duration = 800, children, className }: FadeInProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      className={`transition-opacity ${className ?? ''}`}
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}
