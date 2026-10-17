import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Landmark, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function ClimateFinanceSection() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawFunds = t('home.climateFinance.funds', { returnObjects: true }) || [];
  const funds = Array.isArray(rawFunds) ? rawFunds : [];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Split Card Container in Dark Forest Green */}
        <div className="bg-forest rounded-3xl p-8 sm:p-14 lg:p-16 text-white shadow-elevated relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-green/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Description & Proposal CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-gold-light border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>{t('home.climateFinance.eyebrow', 'Capital & Proposals')}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
                {t('home.climateFinance.heading', 'Climate Finance: From Concept to Fundable Proposal')}
              </h2>

              <p className="text-sand-surface/90 text-sm sm:text-base leading-relaxed font-sans font-light">
                {t('home.climateFinance.description')}
              </p>

              <div className="pt-2">
                <Link
                  to={getLocalizedPath('/services/climate-finance-advisory')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <span>{t('home.climateFinance.cta', 'Explore Climate Finance Advisory')}</span>
                  <ArrowRight className="w-4 h-4 text-forest-dark" />
                </Link>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-sand-surface/60 font-sans">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Eligibility, project readiness and funding approval are determined by relevant funders and secretariats.</span>
              </div>
            </div>

            {/* Right Column: Funding Landscape Assessed Grid */}
            <div className="lg:col-span-6 bg-forest-dark/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gold-light flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-gold" />
                  <span>{t('home.climateFinance.landscapeTitle', 'Potential Funding Landscape Assessed')}</span>
                </h3>
                <p className="text-xs text-sand-surface/75">
                  {t('home.climateFinance.landscapeNote', 'Assessed depending on project eligibility and current programme rules:')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {funds.map((fund, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors space-y-1"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-white leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{fund.name}</span>
                    </div>
                    {fund.desc && (
                      <p className="text-[11px] text-sand-surface/70 pl-5.5 leading-normal">
                        {fund.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
