import { useState } from 'react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product-card'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
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

  const filtered = active === 'all' ? products : products.filter(product => product.category === active)

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-10">
          {t('products_page', 'heading')}
        </h1>

        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                active === filter.id
                  ? 'bg-blue-800 text-white dark:bg-blue-500'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:border-blue-500'
              }`}
            >
              {lang === 'vi' ? filter.vi : filter.en}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <RevealOnScroll key={product.id} delayMs={index * 80} yOffset={18}>
              <ProductCard product={product} lang={lang} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  )
}
