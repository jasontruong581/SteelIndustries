import { createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from '@/hooks/use-theme'
import { useLang } from '@/hooks/use-lang'
import type { LangContextValue } from '@/hooks/use-lang'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HomePage } from '@/pages/home-page'
import { ProductsPage } from '@/pages/products-page'
import { AboutPage } from '@/pages/about-page'

const LangContext = createContext<LangContextValue | null>(null)
export const useLangCtx = () => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLangCtx must be used within LangContext.Provider')
  return ctx
}

export default function App() {
  const theme = useTheme()
  const lang = useLang()

  return (
    <LangContext.Provider value={lang}>
      <BrowserRouter>
        <Navbar dark={theme.dark} onToggleTheme={theme.toggle} langCtx={lang} />
        <Routes>
          <Route path="/" element={<HomePage langCtx={lang} />} />
          <Route path="/products" element={<ProductsPage langCtx={lang} />} />
          <Route path="/about" element={<AboutPage langCtx={lang} />} />
        </Routes>
        <Footer langCtx={lang} />
      </BrowserRouter>
    </LangContext.Provider>
  )
}
