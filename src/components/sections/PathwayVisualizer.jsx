import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PathwayVisualizer({ 
  steps = [], 
  title, 
  subtitle, 
  badge = "Step-by-Step Pathway" 
}) {
  if (!steps || !steps.length) return null;

  return (
    <div className="space-y-8">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto space-y-2">
          {badge && (
            <span className="badge-editorial bg-gold/15 text-gold-dark border border-gold/30">
              {badge}
            </span>
          )}
          {title && (
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-charcoal-muted">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Responsive Pathway Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((stepText, index) => {
          const stepNum = String(index + 1).padStart(2, '0');
          const isLast = index === steps.length - 1;

          return (
            <div
              key={index}
              className={`relative p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                isLast
                  ? 'bg-forest text-white border-forest shadow-md'
                  : 'bg-white border-sand-border/80 hover:border-deep-green/30 hover:shadow-subtle'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isLast ? 'bg-gold/20 text-gold-light' : 'bg-sage text-forest'
                }`}>
                  STEP {stepNum}
                </span>

                <CheckCircle2 className={`w-4 h-4 ${isLast ? 'text-gold' : 'text-deep-green/40'}`} />
              </div>

              <div className={`font-heading font-semibold text-sm sm:text-base leading-snug ${
                isLast ? 'text-white' : 'text-forest'
              }`}>
                {stepText}
              </div>

              {/* Step indicator arrow for inline flow on desktop */}
              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs opacity-75">
                <span className={isLast ? 'text-gold-light' : 'text-charcoal-muted'}>
                  {isLast ? 'Milestone: Commercialisation' : `Stage ${index + 1} of ${steps.length}`}
                </span>
                {!isLast && <ArrowRight className="w-3.5 h-3.5 text-deep-green/50" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
