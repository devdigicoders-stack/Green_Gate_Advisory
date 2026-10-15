import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Landmark, 
  Trees, 
  FileText, 
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import ClosingCTA from '../components/sections/ClosingCTA';
import { useLocale } from '../hooks/useLocale';
import { SERVICES_LIST } from '../data/servicesList';

const SERVICE_ICONS = {
  Sparkles,
  Scale,
  ShieldCheck,
  Landmark,
  Trees,
  FileText,
  BarChart3
};

export default function ServicesHubPage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <div className="space-y-20 sm:space-y-28 py-12 sm:py-16">
      <MetaTags 
        title={t('meta.services.title', 'Climate Advisory Services | Green Gate Advisory')}
        description={t('meta.services.description', 'Explore carbon market advisory, CBAM and ETS support, climate finance, nature-based solutions, climate policy and corporate climate services.')}
      />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
            {t('services.overview.badge', 'Practice Areas')}
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            {t('services.overview.title', 'Climate & Environmental Advisory Services')}
          </h1>
          <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans">
            {t('services.overview.lead')}
          </p>
          <div className="inline-block p-4 rounded-xl bg-sage border border-sand-border text-xs sm:text-sm text-forest font-medium">
            {t('services.overview.note')}
          </div>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {SERVICES_LIST.map((srv) => {
            const IconComponent = SERVICE_ICONS[srv.iconName] || Sparkles;
            const supportList = t(`services.${srv.key}.supportPoints`, { returnObjects: true }) || [];
            const points = Array.isArray(supportList) ? supportList.slice(0, 4) : [];

            return (
              <div 
                key={srv.key}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-border shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center border border-forest/10">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-dark bg-gold/15 px-2.5 py-1 rounded-md">
                      PRACTICE {srv.number}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-forest leading-snug">
                    {t(`services.${srv.key}.title`, srv.slug)}
                  </h2>

                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {t(`services.${srv.key}.intro`, '')}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={getLocalizedPath(`/services/${srv.slug}`)}
                      className="btn-primary"
                    >
                      <span>{t('common.viewDetails', 'Explore Service Scope')}</span>
                      <ArrowRight className="w-4 h-4 text-gold-light" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-sage/70 rounded-2xl p-6 border border-sand-border space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest font-sans">
                    {t(`services.${srv.key}.howWeSupportTitle`, 'Key Focus Areas')}
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal">
                    {points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
