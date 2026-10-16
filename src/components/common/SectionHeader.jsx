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
    <div className={`space-y-4 ${isCentered ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${
          light 
            ? 'bg-white/10 text-gold-light border border-white/15' 
            : 'bg-forest/5 text-deep-green border border-forest/10'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className={`font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${
          light ? 'text-white' : 'text-forest'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-sm xs:text-base sm:text-lg lg:text-xl font-normal leading-relaxed ${
          light ? 'text-sand-surface/90' : 'text-charcoal-muted'
        }`}>
          {subtitle}
        </p>
      )}

      {lead && (
        <p className={`text-sm sm:text-base leading-relaxed ${
          light ? 'text-sand-surface/75' : 'text-charcoal-muted'
        }`}>
          {lead}
        </p>
      )}
    </div>
  );
}
