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
    const timer = window.setTimeout(() => setStarted(true), initialDelay)
    return () => window.clearTimeout(timer)
  }, [initialDelay])

  const lines = text.split('\n')

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((character, characterIndex) => {
            const delay = started ? (lineIndex * line.length + characterIndex) * charDelay : 0

            return (
              <span
                key={characterIndex}
                className="inline-block transition-all duration-500"
                style={{
                  opacity: started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {character === ' ' ? '\u00A0' : character}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
