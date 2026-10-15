import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

export default function Expertise() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawItems = t('about.expertise.items', { returnObjects: true }) || [];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="py-20 sm:py-28 bg-sage/50 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('about.expertise.eyebrow', 'Technical Advisory Domains')}
          title={t('about.expertise.heading', 'Our Areas of Expertise')}
          subtitle={t('about.expertise.subtitle')}
        />

        {/* 9 Source Expertise Domains in a Premium 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-sand-border/90 p-7 shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-gold-dark">
                    DOMAIN {item.number || `0${idx + 1}`}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-deep-green" />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-sand-border/50">
                <Link
                  to={getLocalizedPath(item.route)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green hover:text-forest transition-colors group/link"
                >
                  <span>{t('about.expertise.exploreService', 'Explore Service')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
