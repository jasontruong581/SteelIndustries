import type { LangContextValue } from '@/hooks/use-lang'

interface ContactSectionProps {
  langCtx: LangContextValue
}

const MAP_QUERY = '40 Lý Tự Trọng, Phường Vũng Tàu, TP HCM'
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=17&ie=UTF8&iwloc=&output=embed`
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`

function LocationIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.34 1.77.64 2.61a2 2 0 0 1-.45 2.11L7.1 8.6a16 16 0 0 0 8.3 8.3l1.16-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.52 2.61.64A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function ContactSection({ langCtx }: ContactSectionProps) {
  const { t } = langCtx

  const addressLabel = t('contact', 'address_label')

  const items = [
    {
      icon: <LocationIcon />,
      label: addressLabel,
      value: t('contact', 'address_val'),
      href: MAP_LINK,
    },
    {
      icon: <PhoneIcon />,
      label: t('contact', 'phone_label'),
      value: t('contact', 'phone_val'),
      href: `tel:${t('contact', 'phone_val')}`,
    },
    {
      icon: <MailIcon />,
      label: t('contact', 'email_label'),
      value: t('contact', 'email_val'),
      href: `mailto:${t('contact', 'email_val')}`,
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
            <a
              key={item.label}
              href={item.href}
              target={item.label === addressLabel ? '_blank' : undefined}
              rel={item.label === addressLabel ? 'noreferrer' : undefined}
              className="flex flex-col items-center text-center p-10 md:p-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="mb-5 text-blue-700 dark:text-blue-300" aria-hidden="true">{item.icon}</span>
              <p className="text-sm md:text-base font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-400 mb-3">
                {item.label}
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-base md:text-xl leading-relaxed max-w-xs">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
          <iframe
            title={t('contact', 'map_embed_title')}
            src={MAP_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full md:h-80"
          />
          <div className="flex justify-end px-4 py-3 border-t border-slate-200 dark:border-slate-700">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline"
            >
              {t('contact', 'view_map')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
