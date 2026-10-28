export default function SectionHeader({
  badge,
  title,
  subtitle,
  lead,
  align = 'center',
  light = false,
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div className={`space-y-5 sm:space-y-6 ${isCentered ? 'text-center mx-auto' : 'text-left'} max-w-4xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-none text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-colors ${
          light 
            ? 'bg-white/10 text-gold-light border border-white/15' 
            : 'bg-forest/5 text-deep-green border border-forest/10'
        }`}>
          <span className="w-2 h-2 rounded-none bg-gold shadow-xs"></span>
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className={`font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.2] ${
          light ? 'text-white' : 'text-forest'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl ${isCentered ? 'mx-auto' : ''} ${
          light ? 'text-sand-surface/90' : 'text-charcoal-muted'
        }`}>
          {subtitle}
        </p>
      )}

      {lead && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-sand-surface/85' : 'text-charcoal/80'
        }`}>
          {lead}
        </p>
      )}
    </div>
  );
}
