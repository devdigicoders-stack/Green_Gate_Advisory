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
    <section className="py-14 sm:py-20 bg-forest-dark text-white relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-deep-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        <SectionHeader
          light={true}
          badge={t('home.carbonProcess.eyebrow', 'Our Advisory Approach')}
          title={t('home.carbonProcess.heading', 'End-to-End Carbon Market Support')}
          subtitle={t('home.carbonProcess.description')}
        />

        {/* 9-Stage Connected Process Grid / Responsive Timeline */}
        <div className="space-y-6">
          <div className="text-center font-display font-semibold text-xs uppercase tracking-widest text-gold-light/90">
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
                      ? 'bg-gradient-to-br from-gold/20 via-forest to-forest-dark border-gold/40 shadow-elevated'
                      : 'bg-white/5 border-white/10 hover:border-gold/30 hover:bg-white/[0.08] backdrop-blur-xs'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        isFinal ? 'bg-gold text-forest-dark' : 'bg-white/10 text-gold-light border border-white/10'
                      }`}>
                        STAGE {step.num || String(idx + 1).padStart(2, '0')}
                      </span>
                      <CheckCircle2 className={`w-4 h-4 ${isFinal ? 'text-gold' : 'text-white/40'}`} />
                    </div>

                    <h3 className="font-display font-bold text-base text-white leading-snug">
                      {step.name}
                    </h3>

                    <p className="text-xs leading-relaxed text-sand-surface/80 font-sans font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-sans">
                    <span className={isFinal ? 'text-gold font-semibold' : 'text-sand-surface/60'}>
                      {isFinal ? 'Milestone: Commercialisation' : `Stage ${idx + 1} of ${steps.length}`}
                    </span>
                    {!isFinal && <ArrowRight className="w-3.5 h-3.5 text-white/40" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regulatory Safeguard Notice & Primary CTA */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-sand-surface/80 text-left font-sans backdrop-blur-xs">
            <ShieldAlert className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <p>{t('home.carbonProcess.disclaimer')}</p>
          </div>

          <div className="pt-2">
            <Link
              to={getLocalizedPath('/services/carbon-market-advisory')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span>{t('home.carbonProcess.cta', 'Discuss a Carbon Project')}</span>
              <ArrowRight className="w-4 h-4 text-forest-dark" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
