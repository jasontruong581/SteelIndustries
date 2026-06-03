import { useState } from 'react'
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
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === '/'
  const glass = isHome

  const handleContactClick = () => {
    setMobileOpen(false)

    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    navigate('/')
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const wrapperStyle = glass
    ? 'liquid-glass text-white'
    : 'bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 dark:bg-slate-900/95 dark:text-white'

  const linkHover = glass
    ? 'text-white/70 hover:text-white'
    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'

  const isLight = !glass && !dark

  const navLinks = (
    <>
      <Link to="/" onClick={() => setMobileOpen(false)} className={`transition-colors ${linkHover}`}>{t('nav', 'home')}</Link>
      <Link to="/products" onClick={() => setMobileOpen(false)} className={`transition-colors ${linkHover}`}>{t('nav', 'products')}</Link>
      <Link to="/about" onClick={() => setMobileOpen(false)} className={`transition-colors ${linkHover}`}>{t('nav', 'about')}</Link>
      <button onClick={handleContactClick} className={`transition-colors cursor-pointer text-left ${linkHover}`}>
        {t('nav', 'contact')}
      </button>
    </>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-4">
      <div className={`rounded-xl px-4 py-2.5 ${wrapperStyle}`}>
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            K&amp;C
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm">
            {navLinks}
          </div>

          <div className="flex items-center gap-3">
            <LangToggle lang={lang} onToggle={toggleLang} light={isLight} />
            <ThemeToggle dark={dark} onToggle={onToggleTheme} light={isLight} />
            <button
              type="button"
              aria-label={mobileOpen ? t('nav', 'close_menu') : t('nav', 'menu')}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(open => !open)}
              className={`md:hidden inline-flex items-center justify-center rounded-lg border px-2.5 py-2 transition-colors ${
                glass
                  ? 'border-white/20 text-white/80 hover:text-white'
                  : 'border-slate-300 text-slate-700 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:text-white'
              }`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="md:hidden mt-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4 text-sm">
              {navLinks}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
