import type { Lang } from '@/data/i18n'

interface LangToggleProps {
  lang: Lang
  onToggle: () => void
  light?: boolean
}

export function LangToggle({ lang, onToggle, light }: LangToggleProps) {
  const base = light
    ? 'text-slate-700 hover:text-slate-900 border-slate-300'
    : 'text-white/80 hover:text-white border-white/30'

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle language"
      className={`text-xs font-medium border rounded px-2 py-1 transition-colors cursor-pointer ${base}`}
    >
      <span className={lang === 'vi' ? 'font-semibold' : 'opacity-50'}>VI</span>
      <span className="mx-1 opacity-40">/</span>
      <span className={lang === 'en' ? 'font-semibold' : 'opacity-50'}>EN</span>
    </button>
  )
}
