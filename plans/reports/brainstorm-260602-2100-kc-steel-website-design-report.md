# Brainstorm Report — KLC Steel Website Design

**Date:** 2026-06-02  
**Status:** Approved, ready for planning

---

## Problem Statement

Build a professional company introduction website for KLC (steel industry), 3 pages, bilingual Vi/En, modern steel-themed design with dark mode.

## Requirements

| Item | Decision |
|---|---|
| Stack | React 18 + Vite + TypeScript + Tailwind CSS v3 |
| Routing | React Router v6 |
| Font | Inter (Google Fonts) — 300/400/500/600 |
| Language | Bilingual Vi/En, simple JSON i18n |
| Content | Hard-coded (no CMS), editable data files |
| Theme | Light mode default + dark mode toggle (localStorage) |
| Deployment | Static build → Vercel/Netlify |

## Pages

| Route | Name | Key Sections |
|---|---|---|
| `/` | Trang chủ | Hero video, About snippet, Featured products, Contact |
| `/products` | Sản phẩm | Filter tabs, product grid |
| `/about` | Về chúng tôi | Story, Mission/Vision, Stats, Team placeholder |

## Design Decisions

### Hero
- Full-screen video bg (URL: CloudFront reference video, replace later)
- No overlay — raw video playback
- Liquid-glass navbar overlaid
- Animated heading (char-by-char staggered, 30ms delay per char)
- FadeIn subheading + buttons

### Color System
- Light (default): `slate-50` bg, `slate-900` text, `blue-800` primary
- Dark: `slate-900` bg, `white` text, `blue-400` primary
- Liquid-glass in dark mode: `rgba(0,0,0,0.4)` + `backdrop-filter: blur(4px)`

### i18n
- No external lib — simple `i18n.ts` with `{ vi: {...}, en: {...} }` structure
- `useLang` hook + `LangToggle` button in navbar

### Liquid-Glass CSS
Exact spec from reference: `.liquid-glass` with `::before` pseudo-element gradient border mask.

## Component Architecture

```
src/
├── components/
│   ├── layout/navbar.tsx, footer.tsx
│   ├── ui/animated-heading.tsx, fade-in.tsx, theme-toggle.tsx, lang-toggle.tsx
│   ├── sections/hero-section.tsx, about-snippet.tsx, featured-products.tsx, contact-section.tsx
│   └── product-card.tsx
├── pages/home-page.tsx, products-page.tsx, about-page.tsx
├── data/products.ts, i18n.ts
├── hooks/use-theme.ts, use-lang.ts
└── styles/globals.css
```

All files ≤200 lines.

## Products (Placeholder)

- Thép cán nguội
- Thép cán nóng
- Tôn lạnh chuẩn quốc tế
- (More to be added by client)

## Out of Scope

- Backend / CMS / database
- Contact form submit functionality
- Real product images
- Real company content (placeholder text)

## Risks

- Video autoplay blocked on mobile Safari → fallback to poster image
- Liquid-glass backdrop-filter has limited Safari support → graceful degradation

## Unresolved Questions

- Final product list and categories
- Real company content (address, phone, email, team, story)
- Real hero video / product images
- Logo: text "KLC" or SVG logo?

