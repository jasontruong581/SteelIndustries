export type ProductCategory = 'cold' | 'hot' | 'galvanized'

export interface Product {
  id: string
  category: ProductCategory
  name: { vi: string; en: string }
  description: { vi: string; en: string }
  specs: string[]
  image: string
}

export const products: Product[] = [
  {
    id: 'cold-rolled',
    category: 'cold',
    name: { vi: 'Thép cán nguội', en: 'Cold-Rolled Steel' },
    description: {
      vi: 'Thép cán nguội đạt chuẩn quốc tế, bề mặt mịn, kích thước chính xác, phù hợp gia công và chế tạo chi tiết.',
      en: 'International-grade cold-rolled steel with smooth surface and precise dimensions, ideal for fabrication.',
    },
    specs: ['Độ dày: 0.3-3.0mm', 'Khổ rộng: 600-1250mm', 'JIS G3141 · ASTM A1008'],
    image: '/Product_1.jpg',
  },
  {
    id: 'hot-rolled',
    category: 'hot',
    name: { vi: 'Thép cán nóng', en: 'Hot-Rolled Steel' },
    description: {
      vi: 'Thép cán nóng chất lượng cao, phù hợp kết cấu công trình xây dựng, cơ khí và chế tạo máy.',
      en: 'High-quality hot-rolled steel suitable for structural, mechanical and machinery fabrication.',
    },
    specs: ['Độ dày: 2.0-25mm', 'Khổ rộng: 600-2000mm', 'JIS G3101 · ASTM A36'],
    image: '/Product_2.jpg',
  },
  {
    id: 'galvanized',
    category: 'galvanized',
    name: { vi: 'Tôn lạnh chuẩn quốc tế', en: 'International-Grade Galvanized Sheet' },
    description: {
      vi: 'Tôn lạnh mạ kẽm nhúng nóng chống ăn mòn vượt trội, đạt tiêu chuẩn quốc tế, ứng dụng rộng rãi trong xây dựng.',
      en: 'Hot-dip galvanized cold-rolled sheets with superior corrosion resistance, meeting international standards.',
    },
    specs: ['Độ dày: 0.15-1.2mm', 'Mạ kẽm: 60-275 g/m2', 'JIS G3302 · EN 10327'],
    image: '/Product_3.jpg',
  },
]
