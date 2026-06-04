import { useEffect, useState } from 'react'
import { useLangCtx } from '@/contexts/lang-context'

const PHONE_NUMBER = '0902351396'
const ZALO_LINK = `https://zalo.me/${PHONE_NUMBER}`

function ActionButton({
  ariaLabel,
  children,
  href,
  onClick,
  target,
  rel,
}: {
  ariaLabel: string
  children: React.ReactNode
  href?: string
  onClick?: () => void
  target?: string
  rel?: string
}) {
  const className =
    'flex h-15 w-15 items-center justify-center rounded-full bg-[#2f86d6] text-white shadow-[0_12px_30px_rgba(47,134,214,0.28)] transition-transform duration-200 hover:-translate-y-0.5'

  if (href) {
    return (
      <a aria-label={ariaLabel} href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button aria-label={ariaLabel} onClick={onClick} className={className} type="button">
      {children}
    </button>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.34 1.77.64 2.61a2 2 0 0 1-.45 2.11L7.1 8.6a16 16 0 0 0 8.3 8.3l1.16-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.52 2.61.64A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  )
}

function TopIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 11.25 5.25-5.25 5.25 5.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 20.5h14" />
    </svg>
  )
}

function ZaloBadge() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold tracking-[0.06em] text-[#2f86d6]">
      Zalo
    </div>
  )
}

export function FloatingActions() {
  const { t } = useLangCtx()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col items-center gap-4 md:right-6">
      <ActionButton ariaLabel={t('floating', 'zalo')} href={ZALO_LINK} target="_blank" rel="noreferrer">
        <ZaloBadge />
      </ActionButton>

      <ActionButton ariaLabel={t('floating', 'call')} href={`tel:${PHONE_NUMBER}`}>
        <PhoneIcon />
      </ActionButton>

      <button
        type="button"
        aria-label={t('floating', 'top')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`flex h-13 w-13 items-center justify-center rounded-lg bg-slate-500/90 text-white shadow-lg transition-all duration-200 ${
          showTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
        }`}
      >
        <TopIcon />
      </button>
    </div>
  )
}
