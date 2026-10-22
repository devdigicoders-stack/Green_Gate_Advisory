import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Sparkles, 
  ShieldCheck, 
  Landmark, 
  Trees, 
  FileText, 
  BarChart3, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const SERVICE_META = [
  { key: 'carbonMarket', icon: Sparkles, number: '01' },
  { key: 'cbamEts', icon: ShieldCheck, number: '02' },
  { key: 'climateFinance', icon: Landmark, number: '03' },
  { key: 'natureBased', icon: Trees, number: '04' },
  { key: 'climatePolicy', icon: FileText, number: '05' },
  { key: 'corporateClimate', icon: BarChart3, number: '06' },
  { key: 'training', icon: GraduationCap, number: '07' }
];

export default function CoreServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawServices = t('home.coreServices.services', { returnObjects: true }) || [];
  const services = Array.isArray(rawServices) ? rawServices : [];

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-[#F6F8F5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
        
        <SectionHeader
          badge={t('home.coreServices.eyebrow', 'Core Capabilities')}
          title={t('home.coreServices.heading', 'Our Core Advisory Services')}
          subtitle={t('home.coreServices.subtitle', 'Integrated advisory and capacity-building pillars connecting regulatory insight, quantitative analysis, and project execution.')}
        />

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((srv, idx) => {
            const meta = SERVICE_META[idx] || { icon: Sparkles, number: '01' };
            const IconComponent = meta.icon;
            const isTraining = srv.key === 'training';

            if (isTraining) {
              return (
                <div 
                  key={srv.key || idx}
                  className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#0B3023] via-[#0E4733] to-[#082218] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-elevated relative overflow-hidden border border-emerald-500/25 group hover:border-gold/40 transition-all duration-300"
                >
                  {/* Decorative glowing backdrops */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/15 transition-all" />
                  <div className="absolute -bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 text-gold flex items-center justify-center border border-white/15 backdrop-blur-sm shadow-xs">
                          <IconComponent className="w-6 h-6 text-gold" />
                        </div>
                        <span className="font-mono text-xs sm:text-[13px] font-bold text-gold tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full border border-gold/30">
                          PILLAR {meta.number} • {srv.badge || 'INSTITUTIONAL PRACTICE'}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                        {srv.title}
                      </h3>

                      <p className="text-base sm:text-lg text-sand-surface/90 font-sans font-light leading-relaxed">
                        {srv.summary}
                      </p>

                      {Array.isArray(srv.tags) && srv.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {srv.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-xs font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex-shrink-0 w-full lg:w-auto">
                      <Link
                        to={getLocalizedPath(srv.link || '/training')}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-102 w-full sm:w-auto group/btn"
                      >
                        <span>{srv.cta || t('home.coreServices.exploreTraining', 'Explore Training Programmes')}</span>
                        <ArrowRight className="w-4.5 h-4.5 text-forest-dark group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={srv.key || idx}
                className="bg-white rounded-3xl p-7 sm:p-9 lg:p-10 flex flex-col justify-between group shadow-subtle hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden border border-sand-border/70 hover:border-forest/30"
              >
                {/* Gold top accent line - default active */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-100" />

                <div className="space-y-6">
                  {/* Top indicator bar */}
                  <div className="flex items-center justify-between">
                    {/* Icon container: default dark green with gold icon (from hover state) */}
                    <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center shadow-xs transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs sm:text-[13px] font-bold text-deep-green bg-sage/60 px-3.5 py-1 rounded-full border border-forest/10">
                      PILLAR {meta.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  {/* PDF source-accurate summary */}
                  <p className="text-base sm:text-[16px] text-charcoal/85 leading-relaxed font-sans font-normal">
                    {srv.summary}
                  </p>
                </div>

                {/* Footer Action Links */}
                <div className="pt-6 mt-8 border-t border-sand-border/60">
                  {srv.key === 'cbamEts' ? (
                    /* Dual route support for combined CBAM and ETS card */
                    <div className="flex items-center justify-between gap-2 text-sm font-semibold">
                      <Link
                        to={getLocalizedPath(srv.cbamLink || '/services/cbam-advisory')}
                        className="inline-flex items-center gap-1.5 text-deep-green hover:text-forest transition-colors font-medium group/link"
                      >
                        <span>{srv.cbamLabel || 'CBAM Advisory'}</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                      <span className="text-sand-border font-bold">|</span>
                      <Link
                        to={getLocalizedPath(srv.etsLink || '/services/ets-carbon-pricing-article-6')}
                        className="inline-flex items-center gap-1.5 text-deep-green hover:text-forest transition-colors font-medium group/link"
                      >
                        <span>{srv.etsLabel || 'ETS & Article 6'}</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={getLocalizedPath(srv.link || '/services')}
                      className="inline-flex items-center justify-between w-full text-sm sm:text-base font-bold text-forest hover:text-deep-green transition-colors group/link"
                    >
                      <span>{t('home.coreServices.exploreService', 'Explore Service')}</span>
                      <ArrowRight className="w-4.5 h-4.5 text-deep-green group-hover/link:translate-x-1.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
