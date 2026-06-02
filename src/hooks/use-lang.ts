import { useState } from 'react'
import type { Lang } from '@/data/i18n'
import { translations } from '@/data/i18n'

export function useLang() {
  const [lang, setLang] = useState<Lang>('vi')

  // Typed path accessor — supports dot notation up to 2 levels
  function t(section: keyof typeof translations.vi, key: string): string {
    const sec = translations[lang][section] as Record<string, string>
    return sec[key] ?? `${section}.${key}`
  }

  return { lang, setLang, t, toggle: () => setLang(l => (l === 'vi' ? 'en' : 'vi')) }
}

export type LangContextValue = ReturnType<typeof useLang>
