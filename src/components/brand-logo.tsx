import logoUrl from '@/assets/KLC_logo_assets/KLC_logo_transparent_512px.png'

interface BrandLogoProps {
  className?: string
  imgClassName?: string
  showWordmark?: boolean
}

export function BrandLogo({ className, imgClassName, showWordmark = false }: BrandLogoProps) {
  return (
    <div className={className}>
      <img
        src={logoUrl}
        alt="KLC Steel"
        className={imgClassName ?? 'h-10 w-auto'}
      />
      {showWordmark ? (
        <span className="sr-only">KLC Steel</span>
      ) : null}
    </div>
  )
}
