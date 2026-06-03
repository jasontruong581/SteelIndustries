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
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700">
          <img
            src="/Company.jpg"
            alt={t('about', 'image_alt')}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
