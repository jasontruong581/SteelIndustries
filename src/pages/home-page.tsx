import { HeroSection } from '@/components/sections/hero-section'
import { AboutSnippet } from '@/components/sections/about-snippet'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { ContactSection } from '@/components/sections/contact-section'
import type { LangContextValue } from '@/hooks/use-lang'

interface HomePageProps {
  langCtx: LangContextValue
}

export function HomePage({ langCtx }: HomePageProps) {
  return (
    <main>
      <HeroSection langCtx={langCtx} />
      <AboutSnippet langCtx={langCtx} />
      <FeaturedProducts langCtx={langCtx} />
      <ContactSection langCtx={langCtx} />
    </main>
  )
}
