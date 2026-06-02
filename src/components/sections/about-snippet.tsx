import { Link } from 'react-router-dom'
import type { LangContextValue } from '@/hooks/use-lang'

interface AboutSnippetProps {
  langCtx: LangContextValue
}

export function AboutSnippet({ langCtx }: AboutSnippetProps) {
  const { t } = langCtx

  return (
    <section className="bg-white dark:bg-slate-900 py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-blue-700 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t('about', 'section_title')}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-6 leading-tight">
            {t('about', 'heading')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {t('about', 'body1')}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            {t('about', 'body2')}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium hover:gap-3 transition-all"
          >
            {t('about', 'learn_more')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Image placeholder */}
        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
          <svg
            className="w-24 h-24 text-slate-400 dark:text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-label="Steel facility placeholder"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.8}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="absolute bottom-4 text-xs text-slate-400 dark:text-slate-500">
            [Ảnh nhà máy / Factory photo]
          </span>
        </div>
      </div>
    </section>
  )
}
