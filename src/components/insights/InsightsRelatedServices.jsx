import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Landmark, 
  Trees, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const RELATED_PRACTICES = [
  {
    key: 'carbonMarket',
    slug: 'carbon-market-advisory',
    icon: Sparkles,
    number: '01',
    fallbackTitle: 'Carbon Market Advisory',
    fallbackLead: 'High-integrity carbon credit feasibility, baseline methodologies, MRV design, and commercialisation strategy.'
  },
  {
    key: 'cbam',
    slug: 'cbam-advisory',
    icon: ShieldCheck,
    number: '02',
    fallbackTitle: 'CBAM Advisory',
    fallbackLead: 'EU Carbon Border Adjustment Mechanism readiness, embedded emissions calculation, and supplier workflows.'
  },
  {
    key: 'etsCarbonPricing',
    slug: 'ets-carbon-pricing-article-6',
    icon: Scale,
    number: '03',
    fallbackTitle: 'ETS & Carbon Pricing',
    fallbackLead: 'Compliance emissions trading schemes, allowance trading strategy, and Article 6 / ITMO transfer architecture.'
  },
  {
    key: 'climateFinance',
    slug: 'climate-finance-advisory',
    icon: Landmark,
    number: '04',
    fallbackTitle: 'Climate Finance Advisory',
    fallbackLead: 'Funding proposal structuring for GCF, GEF, Adaptation Fund, and blended green investment vehicles.'
  },
  {
    key: 'natureBased',
    slug: 'nature-based-solutions',
    icon: Trees,
    number: '05',
    fallbackTitle: 'Nature-Based Solutions',
    fallbackLead: 'Afforestation, blue carbon, agricultural soil carbon, and biodiversity conservation crediting.'
  },
  {
    key: 'corporateClimate',
    slug: 'corporate-climate-esg',
    icon: BarChart3,
    number: '06',
    fallbackTitle: 'Corporate Climate & ESG',
    fallbackLead: 'Scope 1, 2, and 3 emissions inventory, science-aligned decarbonisation roadmaps, and ESG disclosures.'
  }
];

export default function InsightsRelatedServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('insights.relatedServices.badge', 'Advisory Practice')}
          title={t('insights.relatedServices.heading', 'Browse Interconnected Advisory Practices')}
          subtitle={t('insights.relatedServices.subtitle', 'Connect research and technical knowledge directly to our six dedicated implementation practices.')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RELATED_PRACTICES.map((practice) => {
            const Icon = practice.icon;
            const title = t(`services.items.${practice.key}.title`, practice.fallbackTitle);
            const lead = t(`services.items.${practice.key}.lead`, practice.fallbackLead);

            return (
              <Link
                key={practice.key}
                to={getLocalizedPath(`/services/${practice.slug}`)}
                className="rounded-3xl bg-sage/30 border border-sand-border/80 p-7 sm:p-8 shadow-subtle hover:bg-white hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-sand-border flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-deep-green group-hover:text-gold" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-gold-dark">
                      PRACTICE {practice.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans line-clamp-3">
                    {lead}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green group-hover:text-forest transition-colors">
                  <span>{t('insights.relatedServices.exploreService', 'Explore Service Practice')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
