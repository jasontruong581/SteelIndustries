interface ThemeToggleProps {
  dark: boolean
  onToggle: () => void
  light?: boolean // use dark icon styles when on light bg
}

export function ThemeToggle({ dark, onToggle, light }: ThemeToggleProps) {
  const textClass = light
    ? 'text-slate-700 hover:text-slate-900'
    : 'text-white/80 hover:text-white'

  return (
    <button
      onClick={onToggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`text-xl transition-colors cursor-pointer ${textClass}`}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
