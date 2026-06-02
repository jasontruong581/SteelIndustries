---
phase: 2
title: Core Layout & Design System
status: completed
priority: P1
effort: 2h
dependencies:
  - 1
---

# Phase 2: Core Layout & Design System

## Overview

Build the shared layout infrastructure: Navbar (liquid-glass, lang/theme toggles), Footer, and all UI primitives (`AnimatedHeading`, `FadeIn`, `ThemeToggle`, `LangToggle`). Also create the i18n and theme hook systems that every page will depend on.

## Requirements

- Functional: Navbar shows on all pages; lang and theme toggles work; animated heading and fade-in work
- Non-functional: All files ≤200 lines; dark mode persists in localStorage; i18n defaults to Vietnamese

## Architecture

```
src/
├── data/
│   └── i18n.ts              # { vi: {...}, en: {...} } translation keys
├── hooks/
│   ├── use-theme.ts          # toggle dark class on <html>, persist localStorage
│   └── use-lang.ts           # toggle Vi/En, expose t(key) fn
├── components/
│   ├── layout/
│   │   ├── navbar.tsx         # liquid-glass, logo, nav links, toggles
│   │   └── footer.tsx         # logo, links, copyright
│   └── ui/
│       ├── animated-heading.tsx  # char-by-char staggered entrance
│       ├── fade-in.tsx           # opacity 0→1 with delay prop
│       ├── theme-toggle.tsx      # sun/moon icon button
│       └── lang-toggle.tsx       # "VI / EN" button
```

## Related Code Files

- Create: `src/data/i18n.ts`
- Create: `src/hooks/use-theme.ts`, `src/hooks/use-lang.ts`
- Create: `src/components/layout/navbar.tsx`, `src/components/layout/footer.tsx`
- Create: `src/components/ui/animated-heading.tsx`, `src/components/ui/fade-in.tsx`
- Create: `src/components/ui/theme-toggle.tsx`, `src/components/ui/lang-toggle.tsx`
- Modify: `src/App.tsx` — wrap with layout (Navbar + Footer)

## Implementation Steps

### 1. `src/data/i18n.ts`

```ts
export type Lang = 'vi' | 'en'

export const translations = {
  vi: {
    nav: { home: 'Trang chủ', products: 'Sản phẩm', about: 'Về chúng tôi', contact: 'Liên hệ' },
    hero: {
      heading: 'K&C\nThép chất lượng quốc tế',
      sub: 'Cung cấp thép cán nguội, cán nóng và tôn lạnh đạt chuẩn quốc tế cho mọi công trình.',
      cta1: 'Xem sản phẩm', cta2: 'Liên hệ ngay',
    },
    about: { title: 'Về K&C', sub: 'Chúng tôi tự hào...' },
    products: { title: 'Sản phẩm', filter_all: 'Tất cả' },
    contact: { title: 'Liên hệ', address: 'Địa chỉ', phone: 'Điện thoại', email: 'Email' },
    footer: { copy: '© 2024 K&C Steel. Bảo lưu mọi quyền.' },
  },
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact' },
    hero: {
      heading: 'K&C\nInternational Steel Quality',
      sub: 'Supplying cold-rolled, hot-rolled steel and international-grade galvanized sheets for every project.',
      cta1: 'View Products', cta2: 'Contact Us',
    },
    about: { title: 'About K&C', sub: 'We take pride...' },
    products: { title: 'Products', filter_all: 'All' },
    contact: { title: 'Contact', address: 'Address', phone: 'Phone', email: 'Email' },
    footer: { copy: '© 2024 K&C Steel. All rights reserved.' },
  },
}
```

### 2. `src/hooks/use-theme.ts`

```ts
import { useState, useEffect } from 'react'
export function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return { dark, toggle: () => setDark(d => !d) }
}
```

### 3. `src/hooks/use-lang.ts`

```ts
import { useState } from 'react'
import { Lang, translations } from '@/data/i18n'
export function useLang() {
  const [lang, setLang] = useState<Lang>('vi')
  const t = (path: string) => {
    const keys = path.split('.')
    let val: any = translations[lang]
    for (const k of keys) val = val?.[k]
    return (val as string) ?? path
  }
  return { lang, setLang, t, toggle: () => setLang(l => l === 'vi' ? 'en' : 'vi') }
}
```

> **Note:** `useLang` is used at App level and passed down via Context or prop drilling (keep simple — only 3 pages).

### 4. `src/components/ui/fade-in.tsx`

```tsx
import { useEffect, useState } from 'react'
interface Props { delay?: number; duration?: number; children: React.ReactNode; className?: string }
export function FadeIn({ delay = 0, duration = 800, children, className }: Props) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t) }, [delay])
  return (
    <div
      className={`transition-opacity ${className ?? ''}`}
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}
```

### 5. `src/components/ui/animated-heading.tsx`

```tsx
import { useEffect, useState } from 'react'
interface Props { text: string; className?: string; initialDelay?: number; charDelay?: number }
export function AnimatedHeading({ text, className, initialDelay = 200, charDelay = 30 }: Props) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), initialDelay); return () => clearTimeout(t) }, [])
  const lines = text.split('\n')
  return (
    <h1 className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split('').map((ch, ci) => {
            const delay = visible ? (li * line.length + ci) * charDelay : 0
            return (
              <span
                key={ci}
                className="inline-block transition-all"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDelay: `${delay}ms`,
                  transitionDuration: '500ms',
                }}
              >
                {ch === ' ' ? ' ' : ch}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
```

### 6. `src/components/ui/theme-toggle.tsx`

Sun/moon icon button. Calls `dark ? '🌙' : '☀️'` or use lucide-react icons.

### 7. `src/components/ui/lang-toggle.tsx`

`<button onClick={toggle}>VI / EN</button>` with active lang highlighted.

### 8. `src/components/layout/navbar.tsx`

- In dark mode (hero page): `.liquid-glass` + `rounded-xl` + `px-4 py-2`
- In light mode (inner pages): `bg-white shadow-sm`
- Left: `K&C` text logo (link to `/`)
- Center (md+): nav links from `t('nav.*')`
- Right: `ThemeToggle` + `LangToggle` + optional CTA button

### 9. `src/components/layout/footer.tsx`

Simple footer: logo left, nav links center, copyright right. Responsive.

### 10. `src/App.tsx` — wire context + layout

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useContext } from 'react'
import { useTheme } from '@/hooks/use-theme'
import { useLang } from '@/hooks/use-lang'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const LangContext = createContext<ReturnType<typeof useLang> | null>(null)
export const useLangCtx = () => useContext(LangContext)!

export default function App() {
  const theme = useTheme()
  const lang = useLang()
  return (
    <LangContext.Provider value={lang}>
      <BrowserRouter>
        <Navbar dark={theme.dark} toggleTheme={theme.toggle} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LangContext.Provider>
  )
}
```

## Success Criteria

- [ ] Dark mode toggled by button, persists on page reload
- [ ] Language toggled between Vi/En, all nav labels update
- [ ] `AnimatedHeading` chars animate in staggered on mount
- [ ] `FadeIn` shows children after configured delay
- [ ] Navbar visible on all routes
- [ ] Liquid-glass style shows in dark mode, white bg in light mode

## Risk Assessment

- **Context prop drilling vs Context**: Using React Context for lang to avoid prop drilling through 3 pages — but keep it simple, no Redux/Zustand needed.
- **AnimatedHeading re-trigger**: animation only fires once on mount; re-navigating to the page will re-mount the component, so animation replays correctly.

## Security Considerations

No external data, no user input — no security concerns at this phase.
