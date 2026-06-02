import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product-card'
import type { LangContextValue } from '@/hooks/use-lang'

interface FeaturedProductsProps {
  langCtx: LangContextValue
}

export function FeaturedProducts({ langCtx }: FeaturedProductsProps) {
  const { t, lang } = langCtx
  const featured = products.slice(0, 3)

  return (
    <section className="bg-slate-50 dark:bg-slate-800 py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            {t('featured', 'heading')}
          </h2>
          <Link
            to="/products"
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline shrink-0"
          >
            {t('featured', 'view_all')} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
