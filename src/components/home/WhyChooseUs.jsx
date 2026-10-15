import { useTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const rawPillars = t('home.whyUs.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('home.whyUs.eyebrow', 'Our Differentiation')}
          title={t('home.whyUs.heading', 'Why Green Gate Advisory')}
          subtitle={t('home.whyUs.subtitle', 'Connecting policy insight, technical analysis, finance preparation and implementation planning.')}
        />

        {/* 5 Distinctive Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-sand-border/80 shadow-xs hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-deep-green bg-sage px-3 py-1 rounded-full border border-forest/5">
                  VALUE {pillar.num || `0${idx + 1}`}
                </span>

                <h3 className="font-display font-bold text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="w-12 h-1 bg-gold/40 rounded-full mt-2 group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
