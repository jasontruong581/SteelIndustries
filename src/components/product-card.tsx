import type { Product } from '@/data/products'
import type { Lang } from '@/data/i18n'

interface ProductCardProps {
  product: Product
  lang: Lang
}

export function ProductCard({ product, lang }: ProductCardProps) {
  const imageAlt = `${lang === 'vi' ? 'Hình ảnh' : 'Image'} ${product.name[lang]}`

  return (
    <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
        <img
          src={product.image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          {product.name[lang]}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {product.description[lang]}
        </p>

        {/* Spec badges */}
        <div className="flex flex-wrap gap-2">
          {product.specs.map((spec, i) => (
            <span
              key={i}
              className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
