import { useTranslation } from 'react-i18next';
import { Layers, FileCheck, Landmark, Compass } from 'lucide-react';

const PILLAR_ICONS = [
  Compass,
  Layers,
  Landmark,
  FileCheck
];

export default function WhatWeDo() {
  const { t } = useTranslation();

  const rawPillars = t('home.whatWeDo.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section id="what-we-do" className="py-12 sm:py-24 bg-sage/60 border-b border-sand-border/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Lead & Descriptive Copy */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-forest/5 text-deep-green border border-forest/10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>{t('home.whatWeDo.eyebrow', 'What We Do')}</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.15]">
              {t('home.whatWeDo.heading', 'Integrated Climate & Environmental Advisory')}
            </h2>

            <div className="w-14 sm:w-16 h-1 bg-gold rounded-full"></div>

            <p className="text-sm sm:text-lg text-forest font-normal leading-relaxed pt-1">
              {t('home.whatWeDo.lead')}
            </p>

            <p className="text-xs sm:text-base text-charcoal-muted leading-relaxed font-sans font-light">
              {t('home.whatWeDo.paragraph')}
            </p>

            {/* Four Integrated Pillars Grid */}
            <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length] || Compass;
                return (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-sand-border/80 shadow-xs space-y-2 hover:border-deep-green/30 hover:shadow-subtle transition-all duration-200"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-forest/5 text-forest flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-deep-green" />
                    </div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-forest leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-charcoal-muted leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Quality Imagery & Strategic Card */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-sand-border group">
              <img
                src="/images/infrastructure.jpg"
                alt={t('home.whatWeDo.imageAlt', 'Sustainable offshore wind infrastructure')}
                className="w-full h-[300px] sm:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/30 to-transparent" />
              
              {/* Strategic Overlay Card */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg space-y-1.5 sm:space-y-2 text-forest">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-gold-dark">
                  PRACTICAL DELIVERY
                </span>
                <p className="text-xs sm:text-sm font-heading font-bold leading-snug">
                  Connecting regulatory insight, technical analysis, climate finance, and implementation planning.
                </p>
                <p className="text-[11px] sm:text-xs text-charcoal-muted font-sans line-clamp-2 sm:line-clamp-none">
                  We turn ambitious climate priorities into structured, bankable, and measurable outcomes.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
