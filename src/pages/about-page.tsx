import type { ReactNode } from 'react'
import type { LangContextValue } from '@/hooks/use-lang'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

interface AboutPageProps {
  langCtx: LangContextValue
}

interface ValueCard {
  titleKey: 'mission_title' | 'vision_title' | 'values_title'
  bodyKey: 'mission_body' | 'vision_body' | 'values_body'
  icon: ReactNode
}

const STATS = [
  { key: 'stats_years', value: '10+' },
  { key: 'stats_products', value: '3+' },
  { key: 'stats_partners', value: '50+' },
  { key: 'stats_provinces', value: '20+' },
] as const

function TargetIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="7.25" />
      <circle cx="12" cy="12" r="3.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.8 9.2-1.9 5-5 1.9 1.9-5 5-1.9Z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5.5 5.5v5.75c0 4.1 2.7 7.86 6.5 9.25 3.8-1.39 6.5-5.15 6.5-9.25V5.5L12 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 12 1.5 1.5 3-3.25" />
    </svg>
  )
}

const VALUES: ValueCard[] = [
  { titleKey: 'mission_title', bodyKey: 'mission_body', icon: <TargetIcon /> },
  { titleKey: 'vision_title', bodyKey: 'vision_body', icon: <CompassIcon /> },
  { titleKey: 'values_title', bodyKey: 'values_body', icon: <ShieldIcon /> },
]

const TEAM_PLACEHOLDERS = [
  { name: 'Nguyen Van A', title: 'CEO' },
  { name: 'Tran Thi B', title: 'COO' },
  { name: 'Le Van C', title: 'Sales Director' },
]

export function AboutPage({ langCtx }: AboutPageProps) {
  const { t } = langCtx

  return (
    <main className="bg-white dark:bg-slate-900">
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white pt-36 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            {t('about_page', 'hero_heading')}
          </h1>
          <p className="text-lg text-blue-200">{t('about_page', 'hero_sub')}</p>
        </div>
      </section>

      <RevealOnScroll>
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
            <div className="overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-700 shadow-sm">
              <img
                src="/Company.jpg"
                alt={t('about_page', 'company_image_alt')}
                className="h-72 w-full object-cover lg:h-96"
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delayMs={80}>
        <section className="bg-slate-50 dark:bg-slate-800 py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <RevealOnScroll key={value.titleKey} delayMs={index * 90} yOffset={18}>
                <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {t('about_page', value.titleKey)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {t('about_page', value.bodyKey)}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delayMs={100}>
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, index) => (
              <RevealOnScroll key={stat.key} delayMs={index * 70} yOffset={14}>
                <div>
                  <div className="text-4xl font-semibold mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{t('about_page', stat.key)}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delayMs={120}>
        <section className="py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-10 text-center">
              {t('about_page', 'team_heading')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {TEAM_PLACEHOLDERS.map((member, index) => (
                <RevealOnScroll key={member.name} delayMs={index * 90} yOffset={18}>
                  <div className="text-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-8">
                    <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto mb-4 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      KLC
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white">{member.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{member.title}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </main>
  )
}
