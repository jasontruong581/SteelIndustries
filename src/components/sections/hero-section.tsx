import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { FadeIn } from '@/components/ui/fade-in'
import type { LangContextValue } from '@/hooks/use-lang'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

interface HeroSectionProps {
  langCtx: LangContextValue
}

export function HeroSection({ langCtx }: HeroSectionProps) {
  const { t } = langCtx
  const navigate = useNavigate()
  const [videoReady, setVideoReady] = useState(false)

  const handleContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const handleProducts = () => navigate('/products')

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">
      <img
        src="/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        onLoadedData={() => setVideoReady(true)}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col px-6 md:px-12 lg:px-16 pt-6">
        <div className="flex-1" />

        <div className="lg:grid lg:grid-cols-2 lg:items-end pb-12 lg:pb-16">
          <div>
            <AnimatedHeading
              text={t('hero', 'heading')}
              className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
              style={{ letterSpacing: '-0.04em' }}
              initialDelay={200}
              charDelay={30}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-5 max-w-lg">
                {t('hero', 'sub')}
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleProducts}
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {t('hero', 'cta1')}
                </button>
                <button
                  onClick={handleContact}
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  {t('hero', 'cta2')}
                </button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={1400} duration={1000} className="hidden lg:flex items-end justify-end mt-4 lg:mt-0">
            <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
              <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                {t('hero', 'tag')}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
