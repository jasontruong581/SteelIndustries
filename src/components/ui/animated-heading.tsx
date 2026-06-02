import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  style?: React.CSSProperties
  initialDelay?: number
  charDelay?: number
}

export function AnimatedHeading({
  text,
  className,
  style,
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), initialDelay)
    return () => clearTimeout(t)
  }, [initialDelay])

  const lines = text.split('\n')

  return (
    <h1 className={className} style={style}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split('').map((ch, ci) => {
            const delay = started ? (li * line.length + ci) * charDelay : 0
            return (
              <span
                key={ci}
                className="inline-block transition-all duration-500"
                style={{
                  opacity: started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {ch === ' ' ? ' ' : ch}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
