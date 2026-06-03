interface ThemeToggleProps {
  dark: boolean
  onToggle: () => void
  light?: boolean
}

export function ThemeToggle({ dark, onToggle, light }: ThemeToggleProps) {
  const textClass = light
    ? 'text-slate-700 hover:text-slate-900'
    : 'text-white/80 hover:text-white'

  return (
    <button
      onClick={onToggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center transition-colors cursor-pointer ${textClass}`}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        {dark ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25M12 18.75V21M4.97 4.97l1.6 1.6M17.43 17.43l1.6 1.6M3 12h2.25M18.75 12H21M4.97 19.03l1.6-1.6M17.43 6.57l1.6-1.6M15.75 12A3.75 3.75 0 1 1 8.25 12a3.75 3.75 0 0 1 7.5 0Z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
          />
        )}
      </svg>
    </button>
  )
}
