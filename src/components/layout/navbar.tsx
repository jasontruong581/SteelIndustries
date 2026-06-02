import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LangToggle } from '@/components/ui/lang-toggle'
import type { LangContextValue } from '@/hooks/use-lang'

interface NavbarProps {
  dark: boolean
  onToggleTheme: () => void
  langCtx: LangContextValue
}

export function Navbar({ dark, onToggleTheme, langCtx }: NavbarProps) {
  const { t, lang, toggle: toggleLang } = langCtx
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'
  // Glass style on home (video bg behind), solid on inner pages
  const glass = isHome

  const handleContactClick = () => {
    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300)
    }
  }

  const wrapperStyle = glass
    ? 'liquid-glass text-white'
    : 'bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 dark:bg-slate-900/95 dark:text-white'

  const linkHover = glass
    ? 'text-white/70 hover:text-white'
    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'

  const isLight = !glass && !dark

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-4">
      <div className={`rounded-xl px-4 py-2.5 flex items-center justify-between ${wrapperStyle}`}>
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold tracking-tight">
          K&amp;C
        </Link>

        {/* Center links (md+) */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          <Link to="/" className={`transition-colors ${linkHover}`}>{t('nav', 'home')}</Link>
          <Link to="/products" className={`transition-colors ${linkHover}`}>{t('nav', 'products')}</Link>
          <Link to="/about" className={`transition-colors ${linkHover}`}>{t('nav', 'about')}</Link>
          <button onClick={handleContactClick} className={`transition-colors cursor-pointer ${linkHover}`}>
            {t('nav', 'contact')}
          </button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} onToggle={toggleLang} light={isLight} />
          <ThemeToggle dark={dark} onToggle={onToggleTheme} light={isLight} />
        </div>
      </div>
    </nav>
  )
}
