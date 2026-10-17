import { useTranslation } from 'react-i18next';
import { Target } from 'lucide-react';

export default function OurPurpose() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Highlighted Editorial Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-forest-dark to-forest p-8 sm:p-12 lg:p-16 text-white shadow-elevated overflow-hidden">
          {/* Subtle Ambient Light Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-deep-green/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-8 text-center max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
              <Target className="w-3.5 h-3.5 text-gold" />
              <span>{t('about.purpose.eyebrow', 'Our Core Purpose')}</span>
            </div>

            {/* Core Purpose Statement from PDF */}
            <blockquote className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed tracking-tight">
              &ldquo;{t('about.purpose.text')}&rdquo;
            </blockquote>

            {/* Anchoring Pillars */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wide uppercase text-gold-light font-mono">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {t('about.purpose.pillar1', 'Technically Credible')}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {t('about.purpose.pillar2', 'Financially Realistic')}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {t('about.purpose.pillar3', 'Measurable Value')}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
