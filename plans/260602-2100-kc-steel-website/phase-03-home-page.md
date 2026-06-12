---
phase: 3
title: Home Page
status: completed
priority: P1
effort: 2h
dependencies:
  - 2
---

# Phase 3: Home Page

## Overview

Build the complete Home page (`/`) with 4 sections: Hero (video background + liquid-glass + animated heading), About Snippet, Featured Products teaser, and Contact section. This is the most complex page — pixel-faithful to the reference design.

## Requirements

- Functional: Video autoplay/loop/muted; char-by-char heading; CTA buttons scroll to contact; featured products link to `/products`
- Non-functional: Video autoplay fallback (poster image) for Safari; all sections responsive

## Architecture

```
src/
├── pages/
│   └── home-page.tsx            # orchestrates all sections
├── components/sections/
│   ├── hero-section.tsx          # video bg + navbar overlay + animated content
│   ├── about-snippet.tsx         # 2-col: text left, image right
│   ├── featured-products.tsx     # 3 product cards teaser
│   └── contact-section.tsx       # address/phone/email placeholder
└── data/
    └── products.ts               # product data array (used in featured + products page)
```

## Related Code Files

- Create: `src/pages/home-page.tsx`
- Create: `src/components/sections/hero-section.tsx`
- Create: `src/components/sections/about-snippet.tsx`
- Create: `src/components/sections/featured-products.tsx`
- Create: `src/components/sections/contact-section.tsx`
- Create: `src/data/products.ts`
- Modify: `src/App.tsx` — import `HomePage`

## Implementation Steps

### 1. `src/data/products.ts`

```ts
export interface Product {
  id: string
  category: string
  name: { vi: string; en: string }
  description: { vi: string; en: string }
  specs: string[]
  image?: string
}

export const products: Product[] = [
  {
    id: 'cold-rolled',
    category: 'cold',
    name: { vi: 'Thép cán nguội', en: 'Cold-Rolled Steel' },
    description: {
      vi: 'Thép cán nguội đạt chuẩn quốc tế, bề mặt mịn, kích thước chính xác.',
      en: 'International-grade cold-rolled steel with smooth surface and precise dimensions.',
    },
    specs: ['Độ dày: 0.3–3.0mm', 'Khổ rộng: 600–1250mm', 'Tiêu chuẩn: JIS G3141, ASTM A1008'],
  },
  {
    id: 'hot-rolled',
    category: 'hot',
    name: { vi: 'Thép cán nóng', en: 'Hot-Rolled Steel' },
    description: {
      vi: 'Thép cán nóng chất lượng cao, phù hợp kết cấu công trình và chế tạo.',
      en: 'High-quality hot-rolled steel suitable for structural and fabrication use.',
    },
    specs: ['Độ dày: 2.0–25mm', 'Khổ rộng: 600–2000mm', 'Tiêu chuẩn: JIS G3101, ASTM A36'],
  },
  {
    id: 'galvanized',
    category: 'galvanized',
    name: { vi: 'Tôn lạnh chuẩn quốc tế', en: 'International-Grade Galvanized Sheet' },
    description: {
      vi: 'Tôn lạnh mạ kẽm chống ăn mòn, đạt tiêu chuẩn quốc tế.',
      en: 'Anti-corrosion galvanized cold-rolled sheets meeting international standards.',
    },
    specs: ['Độ dày: 0.15–1.2mm', 'Mạ kẽm: 60–275 g/m²', 'Tiêu chuẩn: JIS G3302, EN 10327'],
  },
]
```

### 2. `src/components/sections/hero-section.tsx`

Spec (exact match to reference, adapted for KLC):

```tsx
// Full-screen video bg, liquid-glass navbar overlay, animated heading
// Layout: flex column, content pushed to bottom (justify-end pb-12)
// On lg: 2-col grid (content left, tag card right)
```

Key implementation points:
- `<video>` with `autoPlay loop muted playsInline` + `poster` fallback image
- `object-cover w-full h-full absolute inset-0`
- No overlay at all
- Content area: `absolute inset-0 flex flex-col px-6 md:px-12 lg:px-16 pt-6`
- Heading: `AnimatedHeading` with `t('hero.heading')`, `text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal` + `letterSpacing: '-0.04em'`
- Sub: `FadeIn delay={800}` wrapping `text-base md:text-lg text-gray-300 mb-5`
- Buttons: `FadeIn delay={1200}` — CTA1 bg-white text-black, CTA2 liquid-glass border
- Right tag (lg only): `FadeIn delay={1400}`, liquid-glass card, `t('hero.tag')`

### 3. `src/components/sections/about-snippet.tsx`

2-col responsive section:
- Left: heading, 2–3 paragraph placeholder, "Learn more" link → `/about`
- Right: placeholder image (steel/factory themed, or grey box)
- Light mode: `bg-white`; Dark mode: `bg-slate-900`

### 4. `src/components/sections/featured-products.tsx`

```tsx
// Show first 3 products from products.ts
// Grid: 1-col mobile, 3-col md+
// Each card: ProductCard component
// "View all products" button → /products
```

### 5. `src/components/product-card.tsx`

```tsx
// Reused on home + products page
// Props: product, lang
// Card: image (placeholder grey), name, description (2-3 lines), spec badges, optional CTA
// Light: bg-white border shadow-sm hover:shadow-md
// Dark: bg-slate-800 border-slate-700
```

### 6. `src/components/sections/contact-section.tsx`

```tsx
// id="contact" for scroll-to from nav link and hero CTA
// 3 columns: Address | Phone | Email (all placeholder, styled)
// Map embed placeholder (grey box)
// Light bg: bg-slate-50; Dark bg: bg-slate-800
```

### 7. `src/pages/home-page.tsx`

```tsx
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSnippet } from '@/components/sections/about-snippet'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { ContactSection } from '@/components/sections/contact-section'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSnippet />
      <FeaturedProducts />
      <ContactSection />
    </main>
  )
}
```

## Success Criteria

- [ ] Hero video autoplays on desktop, shows fallback on Safari mobile
- [ ] Heading animates char-by-char on page load
- [ ] Subheading and buttons fade in after heading
- [ ] "Xem sản phẩm" button navigates to `/products`
- [ ] "Liên hệ ngay" / hero CTA scrolls to `#contact` section
- [ ] All sections render in both light and dark mode
- [ ] All text switches between Vi and En correctly

## Risk Assessment

- **Video autoplay on mobile Safari**: Add `poster` attribute with a steel image for fallback. iOS requires `playsInline` (already in spec) but may still block autoplay.
- **Contact scroll**: Use `document.getElementById('contact')?.scrollIntoView()` for smooth scroll, not hash routing.

## Security Considerations

- Video URL is an external CloudFront URL — no sensitive data, public asset.
- No user input in this phase.

