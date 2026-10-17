import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

export default function CarbonMarketProcess() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawSteps = t('home.carbonProcess.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section className="py-14 sm:py-20 bg-white text-charcoal relative overflow-hidden border-b border-sand-border/60">
      {/* Subtle background radial accent for depth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-forest/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        <SectionHeader
          light={false}
          badge={t('home.carbonProcess.eyebrow', 'Our Advisory Approach')}
          title={t('home.carbonProcess.heading', 'End-to-End Carbon Market Support')}
          subtitle={t('home.carbonProcess.description')}
        />

        {/* 9-Stage Connected Process Grid / Responsive Timeline */}
        <div className="space-y-6">
          <div className="text-center font-display font-semibold text-xs uppercase tracking-widest text-forest">
            {t('home.carbonProcess.timelineTitle', 'Our Typical Project Pathway')}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, idx) => {
              const isFinal = idx === steps.length - 1;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    isFinal
                      ? 'bg-gradient-to-br from-gold/15 via-white to-forest/5 border-gold/40 shadow-elevated'
                      : 'bg-white border-sand-border/80 hover:border-forest/40 hover:shadow-premium shadow-subtle'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        isFinal 
                          ? 'bg-gold text-forest-dark' 
                          : 'bg-forest/10 text-forest border border-forest/15'
                      }`}>
                        STAGE {step.num || String(idx + 1).padStart(2, '0')}
                      </span>
                      <CheckCircle2 className={`w-4 h-4 ${isFinal ? 'text-gold-dark' : 'text-forest/40'}`} />
                    </div>

                    <h3 className="font-display font-bold text-base text-forest leading-snug">
                      {step.name}
                    </h3>

                    <p className="text-xs leading-relaxed text-charcoal-muted font-sans font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-sand-border/60 flex items-center justify-between text-[11px] font-sans">
                    <span className={isFinal ? 'text-forest font-bold' : 'text-charcoal-muted'}>
                      {isFinal ? 'Milestone: Commercialisation' : `Stage ${idx + 1} of ${steps.length}`}
                    </span>
                    {!isFinal && <ArrowRight className="w-3.5 h-3.5 text-forest/40" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regulatory Safeguard Notice & Primary CTA */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-sand-surface border border-sand-border text-xs text-charcoal-muted text-left font-sans">
            <ShieldAlert className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
            <p>{t('home.carbonProcess.disclaimer')}</p>
          </div>

          <div className="pt-2">
            <Link
              to={getLocalizedPath('/services/carbon-market-advisory')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-forest hover:bg-forest-light text-white font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span>{t('home.carbonProcess.cta', 'Discuss a Carbon Project')}</span>
              <ArrowRight className="w-4 h-4 text-gold-light" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
