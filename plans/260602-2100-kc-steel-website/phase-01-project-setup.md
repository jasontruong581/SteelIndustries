---
phase: 1
title: Project Setup
status: completed
priority: P1
effort: 30m
dependencies: []
---

# Phase 1: Project Setup

## Overview

Bootstrap the Vite + React + TypeScript project, install all dependencies, configure Tailwind CSS, set up React Router, and verify the dev server runs.

## Requirements

- Functional: Working dev server, hot reload, router skeleton
- Non-functional: TypeScript strict mode, path aliases (`@/` → `src/`)

## Architecture

```
kc-steel-website/          # project root
├── index.html             # Google Fonts <link> + app mount
├── vite.config.ts         # path alias @/ → src/
├── tailwind.config.ts     # fontFamily.sans = Inter, dark mode = 'class'
├── tsconfig.json          # strict, path aliases
├── src/
│   ├── main.tsx
│   ├── App.tsx            # Router + route definitions
│   └── styles/
│       └── globals.css    # Tailwind directives + liquid-glass CSS
└── public/
```

## Related Code Files

- Create: `index.html`, `vite.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- Create: `src/main.tsx`, `src/App.tsx`, `src/styles/globals.css`

## Implementation Steps

1. Scaffold project:
   ```bash
   npm create vite@latest . -- --template react-ts
   npm install
   ```

2. Install dependencies:
   ```bash
   npm install react-router-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Configure `tailwind.config.ts`:
   ```ts
   export default {
     darkMode: 'class',
     content: ['./index.html', './src/**/*.{ts,tsx}'],
     theme: {
       extend: {
         fontFamily: { sans: ['Inter', 'sans-serif'] },
       },
     },
   }
   ```

4. Add Inter font to `index.html`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
   ```

5. Configure `vite.config.ts` with path alias `@/ → src/`:
   ```ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from 'path'
   export default defineConfig({
     plugins: [react()],
     resolve: { alias: { '@': path.resolve(__dirname, './src') } },
   })
   ```

6. Add `tsconfig.json` paths:
   ```json
   { "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["src/*"] } } }
   ```

7. Create `src/styles/globals.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   body {
     font-family: 'Inter', sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }

   .liquid-glass {
     background: rgba(0, 0, 0, 0.4);
     background-blend-mode: luminosity;
     backdrop-filter: blur(4px);
     -webkit-backdrop-filter: blur(4px);
     box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
     position: relative;
     overflow: hidden;
   }
   .liquid-glass::before {
     content: '';
     position: absolute;
     inset: 0;
     border-radius: inherit;
     padding: 1.4px;
     background: linear-gradient(180deg,
       rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 20%,
       rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
       rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.3) 100%);
     -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
     -webkit-mask-composite: xor;
     mask-composite: exclude;
     pointer-events: none;
   }
   ```

8. Create `src/App.tsx` with basic router:
   ```tsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom'
   export default function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<div>Home</div>} />
           <Route path="/products" element={<div>Products</div>} />
           <Route path="/about" element={<div>About</div>} />
         </Routes>
       </BrowserRouter>
     )
   }
   ```

9. Run `npm run dev` and verify dev server starts on `http://localhost:5173`.

## Success Criteria

- [ ] `npm run dev` starts without errors
- [ ] Routes `/`, `/products`, `/about` resolve
- [ ] Tailwind dark mode class strategy works (`html.dark` toggles styles)
- [ ] Inter font loads in browser
- [ ] TypeScript compiles with `npm run build`

## Risk Assessment

- **Path aliases in tsconfig vs vite**: ensure both `vite.config.ts` and `tsconfig.json` declare `@/` alias — mismatch causes TS errors even if Vite resolves fine.
- **Tailwind content paths**: must include all `.tsx` files or utility classes won't be generated.

## Security Considerations

None for this phase — local dev setup only.
