import type { LangContextValue } from '@/hooks/use-lang'

interface AboutPageProps {
  langCtx: LangContextValue
}

const STATS = [
  { key: 'stats_years', value: '10+' },
  { key: 'stats_products', value: '3+' },
  { key: 'stats_partners', value: '50+' },
  { key: 'stats_provinces', value: '20+' },
] as const

const VALUES = [
  { titleKey: 'mission_title', bodyKey: 'mission_body', icon: '🎯' },
  { titleKey: 'vision_title', bodyKey: 'vision_body', icon: '🔭' },
  { titleKey: 'values_title', bodyKey: 'values_body', icon: '⭐' },
] as const

const TEAM_PLACEHOLDERS = [
  { name: 'Nguyễn Văn A', title: 'CEO' },
  { name: 'Trần Thị B', title: 'COO' },
  { name: 'Lê Văn C', title: 'Sales Director' },
]

export function AboutPage({ langCtx }: AboutPageProps) {
  const { t } = langCtx

  return (
    <main className="bg-white dark:bg-slate-900">
      {/* Hero banner */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white pt-36 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.03em' }}>
            {t('about_page', 'hero_heading')}
          </h1>
          <p className="text-lg text-blue-200">{t('about_page', 'hero_sub')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
              {t('about_page', 'story_heading')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {t('about_page', 'story_body1')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('about_page', 'story_body2')}
            </p>
          </div>
          <div className="h-72 lg:h-96 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm">
            [Ảnh công ty / Company photo]
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map(v => (
            <div key={v.titleKey} className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {t('about_page', v.titleKey)}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {t('about_page', v.bodyKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.key}>
              <div className="text-4xl font-semibold mb-2">{s.value}</div>
              <div className="text-blue-200 text-sm">{t('about_page', s.key)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-10 text-center">
            {t('about_page', 'team_heading')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM_PLACEHOLDERS.map(m => (
              <div key={m.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto mb-4 flex items-center justify-center text-3xl text-slate-400">
                  👤
                </div>
                <p className="font-semibold text-slate-900 dark:text-white">{m.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
