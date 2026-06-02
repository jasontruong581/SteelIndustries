---
phase: 6
title: Polish & QA
status: completed
priority: P3
effort: 1h
dependencies:
  - 3
  - 4
  - 5
---

# Phase 6: Polish & QA

## Overview

Final QA pass: mobile responsiveness audit, dark/light mode consistency, i18n completeness, video autoplay fallback verification, and production build check. Also run the dev server and manually test all user flows.

## Requirements

- Functional: All pages work end-to-end; nav links correct; language/theme persist
- Non-functional: No TypeScript errors; production build succeeds; Lighthouse performance ≥75

## Implementation Steps

### 1. Responsive audit
- Test at: 375px (iPhone SE), 768px (iPad), 1280px (desktop), 1920px (wide)
- Check: navbar wrapping, hero heading overflow, product grid columns, about stats bar

### 2. Dark mode consistency audit
- Every section must have explicit `dark:` classes — no unstyled white sections in dark mode
- Check text contrast: `text-gray-300` on dark bg should be AA compliant

### 3. i18n completeness
- Manually toggle Vi↔En on every page
- Verify no raw key strings show (e.g. `nav.home` instead of `Trang chủ`)

### 4. Video fallback
- Add `poster="/images/hero-poster.jpg"` to `<video>` element (use a steel-grey placeholder or a real image)
- Test with video disabled in Chrome DevTools → poster image should show

### 5. Navigation audit
- All nav links navigate to correct routes
- "Liên hệ / Contact" scrolls to `#contact` section on home page
- Back button works (no broken routes)

### 6. Production build
```bash
npm run build
npm run preview
```
Verify no 404s on direct URL access (may need SPA redirect config for Vercel).

### 7. `vercel.json` (if deploying to Vercel)
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### 8. Final code review checklist
- [ ] No `console.log` left in production code
- [ ] No hardcoded strings outside `i18n.ts`
- [ ] All image `alt` attributes set
- [ ] All interactive elements keyboard-accessible
- [ ] No unused imports

## Success Criteria

- [ ] `npm run build` exits 0, no TypeScript errors
- [ ] All 3 pages render correctly at 375px, 768px, 1280px
- [ ] Dark/light toggle works consistently across all pages
- [ ] Vi/En toggle works on all pages with no missing translations
- [ ] Video plays on desktop, poster shows on fallback
- [ ] Production preview (`npm run preview`) works at `localhost:4173`
- [ ] SPA rewrite config added for deployment

## Risk Assessment

- **SPA routing on static hosts**: Vite builds a single `index.html`. Without rewrite rules, direct URL navigation (`/products`) returns 404. Add `vercel.json` or `netlify.toml` as needed.
- **Backdrop-filter browser support**: Safari ≥ 9 supports `-webkit-backdrop-filter`. Older Android browsers may not support `backdrop-filter` — liquid-glass will degrade to semi-transparent dark bg, which is acceptable.
