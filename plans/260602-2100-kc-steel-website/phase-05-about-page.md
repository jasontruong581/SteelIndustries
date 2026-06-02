---
phase: 5
title: About Page
status: completed
priority: P2
effort: 1h
dependencies:
  - 2
---

# Phase 5: About Page

## Overview

Build the `/about` page with Company Story, Mission/Vision/Values, Stats bar, and Team section (placeholder). All content is placeholder text in Vietnamese and English.

## Requirements

- Functional: 4 sections render; all text bilingual
- Non-functional: Consistent spacing, responsive, matches overall design language

## Architecture

```
src/
└── pages/
    └── about-page.tsx     # all 4 sections inline (page is simple enough)
```

## Related Code Files

- Create: `src/pages/about-page.tsx`
- Modify: `src/App.tsx` — import `AboutPage`

## Implementation Steps

### 1. `src/pages/about-page.tsx`

Structure (all sections in one file ≤200 lines):

```tsx
// Section 1 — Hero banner
//   bg: gradient steel blue to dark, text white
//   Heading: "Về K&C / About K&C"
//   Sub: company tagline placeholder

// Section 2 — Company Story
//   2-col: text left, image placeholder right
//   Content: founding year, mission statement (placeholder)

// Section 3 — Mission / Vision / Values
//   3-card grid, icon + heading + short text
//   Mission: "Cung cấp thép chất lượng..." 
//   Vision: "Trở thành đối tác..."
//   Values: "Chất lượng - Uy tín - Bền vững"

// Section 4 — Stats bar
//   4 stats: Năm thành lập | Sản phẩm | Đối tác | Tỉnh thành phân phối
//   All values are placeholder numbers

// Section 5 — Team (placeholder)
//   3-col grid of placeholder team cards
//   Name, title, grey avatar circle
```

### 2. Key i18n additions to `src/data/i18n.ts`

Add keys:
```ts
about: {
  hero_heading: { vi: 'Về K&C', en: 'About K&C' },
  story_heading: { vi: 'Câu chuyện của chúng tôi', en: 'Our Story' },
  story_body: { vi: 'K&C được thành lập...', en: 'K&C was founded...' },
  mission: { vi: 'Sứ mệnh', en: 'Mission' },
  vision: { vi: 'Tầm nhìn', en: 'Vision' },
  values: { vi: 'Giá trị cốt lõi', en: 'Core Values' },
  team_heading: { vi: 'Đội ngũ', en: 'Our Team' },
}
```

## Success Criteria

- [ ] All 5 sections render correctly
- [ ] Stats numbers display (placeholder values OK)
- [ ] All text switches between Vi/En
- [ ] Page is responsive (mobile-first)
- [ ] Consistent with light/dark design from other pages

## Risk Assessment

Low risk — purely presentational, no data fetching.
