import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layers, FileCheck, Landmark, Compass, ArrowRight, Workflow } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const PILLAR_ICONS = [
  Compass,
  Layers,
  Landmark,
  FileCheck
];

export default function WhatWeDo() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawPillars = t('home.whatWeDo.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-[#F6F8F5] border-b border-sand-border/60 scroll-mt-24 relative overflow-hidden">
      <span id="what-we-do" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Editorial Composition - Top-aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Lead & Descriptive Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase bg-forest/5 text-deep-green border border-forest/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>{t('home.whatWeDo.eyebrow', 'About Green Gate Advisory')}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-forest tracking-tight leading-[1.18]">
              {t('home.whatWeDo.heading', 'Integrated Climate & Environmental Advisory')}
            </h2>

            <div className="w-16 h-1 bg-gold rounded-full"></div>

            <p className="text-base sm:text-xl text-forest font-medium leading-relaxed pt-1">
              {t('home.whatWeDo.lead')}
            </p>

            <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans font-normal">
              {t('home.whatWeDo.paragraph')}
            </p>

            <div className="pt-2">
              <Link
                to={getLocalizedPath('/about-us')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white border border-sand-border text-sm sm:text-base font-semibold text-deep-green hover:text-gold hover:border-gold/50 shadow-xs hover:shadow-subtle transition-all group"
              >
                <span>{t('home.whatWeDo.learnMore', 'Learn more about our team, approach & mission')}</span>
                <ArrowRight className="w-4.5 h-4.5 text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Quality Imagery & Strategic Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-sand-border group">
              <img
                src="/images/infrastructure.jpg"
                alt={t('home.whatWeDo.imageAlt', 'Sustainable offshore wind infrastructure')}
                className="w-full h-[320px] sm:h-[440px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/30 to-transparent" />
              
              {/* Strategic Overlay Card */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg space-y-2 text-forest">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest uppercase text-gold-dark">
                  PRACTICAL DELIVERY
                </span>
                <p className="text-sm sm:text-base font-heading font-bold leading-snug">
                  Connecting regulatory insight, technical analysis, climate finance, and implementation planning.
                </p>
                <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
                  We turn ambitious climate priorities into structured, bankable, and measurable outcomes.
                </p>
              </div>
            </div>

            {/* Executive Advisory Convergence Schema Diagram */}
            <div className="rounded-3xl bg-white border border-sand-border/90 p-6 sm:p-7 shadow-subtle space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-sand-border/60">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold uppercase text-forest tracking-wider">
                  <Workflow className="w-4 h-4 text-deep-green" />
                  <span>Advisory Delivery Schema</span>
                </div>
                <span className="text-[10px] font-mono text-gold-dark font-bold bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/25">
                  Methodology Traceability
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-center">
                <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-sand-border/70 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-deep-green block">STAGE 01</span>
                  <div className="font-heading font-bold text-xs sm:text-sm text-forest">Policy & Rules</div>
                  <p className="text-[11px] text-charcoal/70 hidden sm:block">CBAM • ETS • Article 6</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-sand-border/70 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-deep-green block">STAGE 02</span>
                  <div className="font-heading font-bold text-xs sm:text-sm text-forest">Scientific MRV</div>
                  <p className="text-[11px] text-charcoal/70 hidden sm:block">ISO 14064 • Yields</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-gold/15 border border-gold/40 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-forest-dark block">STAGE 03</span>
                  <div className="font-heading font-bold text-xs sm:text-sm text-forest-dark">Bankable Action</div>
                  <p className="text-[11px] text-forest/80 hidden sm:block">Capital & Issuance</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Four Integrated Pillars Grid - Single Row across Desktop (4 Columns) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length] || Compass;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-sand-border/80 shadow-subtle hover:border-forest/30 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-forest/5 text-forest flex items-center justify-center group-hover:bg-forest group-hover:text-gold transition-colors duration-300 shadow-xs">
                    <IconComponent className="w-5 h-5 text-current" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-charcoal/80 leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
