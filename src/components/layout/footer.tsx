import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/brand-logo'
import type { LangContextValue } from '@/hooks/use-lang'

interface FooterProps {
  langCtx: LangContextValue
}

export function Footer({ langCtx }: FooterProps) {
  const { t } = langCtx

  return (
    <footer className="bg-slate-900 text-white px-6 md:px-12 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <BrandLogo className="mb-3" imgClassName="h-14 w-auto" showWordmark />
            <p className="text-slate-400 text-sm">{t('footer', 'tagline')}</p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">{t('nav', 'home')}</Link>
            <Link to="/products" className="hover:text-white transition-colors">{t('nav', 'products')}</Link>
            <Link to="/about" className="hover:text-white transition-colors">{t('nav', 'about')}</Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-slate-500 text-sm">
          {t('footer', 'copy')}
        </div>
      </div>
    </footer>
  )
}
