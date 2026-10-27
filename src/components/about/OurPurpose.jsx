import { useTranslation } from 'react-i18next';
import { Target } from 'lucide-react';

export default function OurPurpose() {
  const { t } = useTranslation();

  return (
    <section id="purpose-mission" className="py-14 sm:py-20 bg-white border-b border-sand-border/70 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Open Editorial Purpose Manifesto - No Heavy Box */}
        <div className="space-y-8 text-center max-w-4xl mx-auto py-4">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-forest/5 text-deep-green border border-forest/15">
            <Target className="w-3.5 h-3.5 text-deep-green" />
            <span>{t('about.purpose.eyebrow', 'Our Core Purpose')}</span>
          </div>

          {/* Core Purpose Statement */}
          <blockquote className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-forest leading-relaxed tracking-tight">
            &ldquo;{t('about.purpose.text')}&rdquo;
          </blockquote>

          {/* Anchoring Pillars */}
          <div className="pt-6 border-t border-sand-border flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold tracking-wider uppercase text-charcoal font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deep-green" />
              {t('about.purpose.pillar1', 'Technically Credible')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deep-green" />
              {t('about.purpose.pillar2', 'Financially Realistic')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deep-green" />
              {t('about.purpose.pillar3', 'Measurable Value')}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
