# KLC Steel Website

Website giới thiệu công ty KLC Steel, xây bằng React + Vite + TypeScript với giao diện song ngữ Việt/Anh, dark mode và dữ liệu sản phẩm hard-code.

## Tech Stack

- React 19
- Vite 8
- TypeScript 6
- React Router 7
- Tailwind CSS 4

## Pages

- `/`: hero video, giới thiệu ngắn, sản phẩm nổi bật, contact
- `/products`: danh sách sản phẩm với filter theo nhóm
- `/about`: câu chuyện công ty, giá trị cốt lõi, stats, team

## Assets

- Ảnh công ty: `public/Company.jpg`
- Ảnh sản phẩm: `public/Product_1.jpg` đến `public/Product_3.jpg`
- Favicon và icon phụ: thư mục `public/`

## Development

Cài dependency:

```bash
npm install
```

Chạy local:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Deployment

Repo đã có `vercel.json` để rewrite tất cả route SPA về `index.html`, nên có thể deploy static lên Vercel mà không bị lỗi route trực tiếp.
