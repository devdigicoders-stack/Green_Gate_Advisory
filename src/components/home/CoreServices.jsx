import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Sparkles, 
  ShieldCheck, 
  Landmark, 
  Trees, 
  FileText, 
  BarChart3, 
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const SERVICE_META = [
  { key: 'carbonMarket', icon: Sparkles, number: '01' },
  { key: 'cbamEts', icon: ShieldCheck, number: '02' },
  { key: 'climateFinance', icon: Landmark, number: '03' },
  { key: 'natureBased', icon: Trees, number: '04' },
  { key: 'climatePolicy', icon: FileText, number: '05' },
  { key: 'corporateClimate', icon: BarChart3, number: '06' }
];

export default function CoreServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawServices = t('home.coreServices.services', { returnObjects: true }) || [];
  const services = Array.isArray(rawServices) ? rawServices : [];

  return (
    <section className="py-14 sm:py-20 bg-sand-surface/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        <SectionHeader
          badge={t('home.coreServices.eyebrow', 'Core Capabilities')}
          title={t('home.coreServices.heading', 'Our Core Advisory Services')}
          subtitle={t('home.coreServices.subtitle', 'Six integrated service pillars connecting regulatory insight, quantitative analysis, and project execution.')}
        />

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((srv, idx) => {
            const meta = SERVICE_META[idx] || { icon: Sparkles, number: '01' };
            const IconComponent = meta.icon;

            return (
              <div 
                key={srv.key || idx}
                className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between group shadow-premium hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Gold top accent line - default active */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-100" />

                <div className="space-y-5">
                  {/* Top indicator bar */}
                  <div className="flex items-center justify-between">
                    {/* Icon container: default dark green with gold icon (from hover state) */}
                    <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center shadow-xs transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-deep-green bg-sage px-3 py-1 rounded-full">
                      PILLAR {meta.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  {/* PDF source-accurate summary */}
                  <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-light line-clamp-4">
                    {srv.summary}
                  </p>
                </div>

                {/* Footer Action Links */}
                <div className="pt-6 mt-6 border-t border-sand-border/40">
                  {srv.key === 'cbamEts' ? (
                    /* Dual route support for combined CBAM and ETS card */
                    <div className="flex items-center justify-between gap-2 text-xs font-semibold">
                      <Link
                        to={getLocalizedPath(srv.cbamLink || '/services/cbam-advisory')}
                        className="inline-flex items-center gap-1.5 text-deep-green hover:text-forest transition-colors font-medium group/link"
                      >
                        <span>{srv.cbamLabel || 'CBAM Advisory'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                      <span className="text-sand-border font-bold">|</span>
                      <Link
                        to={getLocalizedPath(srv.etsLink || '/services/ets-carbon-pricing-article-6')}
                        className="inline-flex items-center gap-1.5 text-deep-green hover:text-forest transition-colors font-medium group/link"
                      >
                        <span>{srv.etsLabel || 'ETS & Article 6'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={getLocalizedPath(srv.link || '/services')}
                      className="inline-flex items-center justify-between w-full text-sm font-semibold text-forest hover:text-deep-green transition-colors group/link"
                    >
                      <span>{t('home.coreServices.exploreService', 'Explore Service')}</span>
                      <ArrowRight className="w-4 h-4 text-deep-green group-hover/link:translate-x-1.5 transition-transform" />
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
