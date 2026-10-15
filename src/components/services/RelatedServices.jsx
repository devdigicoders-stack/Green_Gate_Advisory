import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';

export default function RelatedServices({ currentKey }) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  // Pick up to 3 complementary services excluding current
  const related = SERVICES_LIST.filter(s => s.key !== currentKey).slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          badge={t('services.relatedBadge', 'Complementary Capabilities')}
          title={t('services.relatedTitle', 'Related Advisory Practices')}
          subtitle={t('services.relatedSubtitle', 'Explore interconnected workstreams across compliance, project preparation, and sustainable finance.')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((srv) => (
            <Link
              key={srv.key}
              to={getLocalizedPath(`/services/${srv.slug}`)}
              className="p-7 rounded-3xl bg-sage/40 border border-sand-border shadow-subtle hover:bg-white hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-gold-dark">
                  PRACTICE {srv.number}
                </span>

                <h3 className="font-display font-bold text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {t(`services.items.${srv.key}.shortTitle`, t(`navigation.servicesMenu.${srv.key}`))}
                </h3>

                <p className="text-xs text-charcoal-muted line-clamp-3 leading-relaxed font-sans">
                  {t(`services.items.${srv.key}.lead`, '')}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green group-hover:text-forest transition-colors">
                <span>{t('services.overview.grid.exploreService', 'Explore Service')}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
