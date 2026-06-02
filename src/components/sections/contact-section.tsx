import type { LangContextValue } from '@/hooks/use-lang'

interface ContactSectionProps {
  langCtx: LangContextValue
}

export function ContactSection({ langCtx }: ContactSectionProps) {
  const { t } = langCtx

  const items = [
    {
      icon: '📍',
      label: t('contact', 'address_label'),
      value: t('contact', 'address_val'),
    },
    {
      icon: '📞',
      label: t('contact', 'phone_label'),
      value: t('contact', 'phone_val'),
    },
    {
      icon: '✉️',
      label: t('contact', 'email_label'),
      value: t('contact', 'email_val'),
    },
  ]

  return (
    <section
      id="contact"
      className="bg-white dark:bg-slate-900 py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-3">
            {t('contact', 'heading')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400">{t('contact', 'sub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(item => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <span className="text-3xl mb-4">{item.icon}</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-2">
                {item.label}
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-10 h-64 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm">
          [Bản đồ / Map embed]
        </div>
      </div>
    </section>
  )
}
