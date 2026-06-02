---
phase: 4
title: Products Page
status: completed
priority: P2
effort: 1h
dependencies:
  - 2
  - 3
---

# Phase 4: Products Page

## Overview

Build the `/products` page with a category filter tab bar and a responsive grid of product cards. Reuses `ProductCard` and `products.ts` data from Phase 3.

## Requirements

- Functional: Filter tabs update displayed products; all products shown on "All" tab
- Non-functional: Responsive grid (1-col → 2-col → 3-col); bilingual labels

## Architecture

```
src/
├── pages/
│   └── products-page.tsx     # filter state + grid layout
└── (reuses ProductCard + products.ts from Phase 3)
```

## Related Code Files

- Create: `src/pages/products-page.tsx`
- Modify: `src/App.tsx` — import `ProductsPage`

## Implementation Steps

### 1. `src/pages/products-page.tsx`

```tsx
import { useState } from 'react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product-card'
import { useLangCtx } from '@/App'

const CATEGORIES = [
  { id: 'all', vi: 'Tất cả', en: 'All' },
  { id: 'cold', vi: 'Cán nguội', en: 'Cold-Rolled' },
  { id: 'hot', vi: 'Cán nóng', en: 'Hot-Rolled' },
  { id: 'galvanized', vi: 'Tôn lạnh', en: 'Galvanized' },
]

export function ProductsPage() {
  const [active, setActive] = useState('all')
  const { lang } = useLangCtx()
  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-16 px-6 md:px-12 lg:px-16">
      {/* Page heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-8">
        {lang === 'vi' ? 'Sản phẩm' : 'Products'}
      </h1>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
              ${active === cat.id
                ? 'bg-blue-800 text-white dark:bg-blue-500'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600'
              }`}
          >
            {lang === 'vi' ? cat.vi : cat.en}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} lang={lang} />)}
      </div>
    </main>
  )
}
```

## Success Criteria

- [ ] All 3 products show on "Tất cả / All" tab
- [ ] Clicking a category filter shows only matching products
- [ ] Page heading and filter labels switch with language toggle
- [ ] Grid is 1-col on mobile, 2-col on md, 3-col on lg
- [ ] Cards render correctly in light and dark mode

## Risk Assessment

- Low risk — simple filter state, no async data.
- If product count grows, consider pagination (out of scope for now).
