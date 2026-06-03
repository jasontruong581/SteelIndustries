import { HeroSection } from '@/components/sections/hero-section'
import { AboutSnippet } from '@/components/sections/about-snippet'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { ContactSection } from '@/components/sections/contact-section'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import type { LangContextValue } from '@/hooks/use-lang'

interface HomePageProps {
  langCtx: LangContextValue
}

export function HomePage({ langCtx }: HomePageProps) {
  return (
    <main>
      <HeroSection langCtx={langCtx} />
      <RevealOnScroll>
        <AboutSnippet langCtx={langCtx} />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80}>
        <FeaturedProducts langCtx={langCtx} />
      </RevealOnScroll>
      <RevealOnScroll delayMs={120}>
        <ContactSection langCtx={langCtx} />
      </RevealOnScroll>
    </main>
  )
}
