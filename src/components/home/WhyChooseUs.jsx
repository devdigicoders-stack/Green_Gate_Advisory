import { useTranslation } from 'react-i18next';
import { ShieldCheck, Scale, FileCheck, LineChart, Compass } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const PILLAR_ICONS = [ShieldCheck, Scale, FileCheck, LineChart, Compass];

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const rawPillars = t('home.whyUs.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section id="why-us" className="py-20 sm:py-28 lg:py-32 bg-white border-b border-sand-border/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        <SectionHeader
          badge={t('home.whyUs.eyebrow', 'Our Differentiation')}
          title={t('home.whyUs.heading', 'Why Green Gate Advisory')}
          subtitle={t('home.whyUs.subtitle', 'Connecting policy insight, technical analysis, finance preparation and implementation planning.')}
        />

        {/* 5 Distinctive Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="p-8 sm:p-9 lg:p-10 rounded-3xl bg-white border border-sand-border shadow-subtle hover:border-forest/40 hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-mono font-bold text-deep-green bg-sage/60 px-3.5 py-1 rounded-full border border-sand-border/80 shadow-xs">
                      VALUE {pillar.num || `0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-charcoal/90 leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="w-12 h-1 bg-gold/50 rounded-full group-hover:w-20 group-hover:bg-gold transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
