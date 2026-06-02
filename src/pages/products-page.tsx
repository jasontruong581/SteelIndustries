import { useState } from 'react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product-card'
import type { LangContextValue } from '@/hooks/use-lang'
import type { ProductCategory } from '@/data/products'

type FilterId = 'all' | ProductCategory

interface Filter {
  id: FilterId
  vi: string
  en: string
}

const FILTERS: Filter[] = [
  { id: 'all', vi: 'Tất cả', en: 'All' },
  { id: 'cold', vi: 'Cán nguội', en: 'Cold-Rolled' },
  { id: 'hot', vi: 'Cán nóng', en: 'Hot-Rolled' },
  { id: 'galvanized', vi: 'Tôn lạnh', en: 'Galvanized' },
]

interface ProductsPageProps {
  langCtx: LangContextValue
}

export function ProductsPage({ langCtx }: ProductsPageProps) {
  const [active, setActive] = useState<FilterId>('all')
  const { lang, t } = langCtx

  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-10">
          {t('products_page', 'heading')}
        </h1>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                active === f.id
                  ? 'bg-blue-800 text-white dark:bg-blue-500'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:border-blue-500'
              }`}
            >
              {lang === 'vi' ? f.vi : f.en}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} lang={lang} />
          ))}
        </div>
      </div>
    </main>
  )
}
