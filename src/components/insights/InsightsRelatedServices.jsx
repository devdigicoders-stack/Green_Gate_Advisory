import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Scale,
  ShieldCheck,
  Landmark,
  Trees,
  BarChart3,
  ArrowRight
} from 'lucide-react';
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
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('insights.relatedServices.badge', 'Advisory Practice')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('insights.relatedServices.heading', 'Browse Interconnected Advisory Practices')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
            {t('insights.relatedServices.subtitle', 'Connect research and technical knowledge directly to our six dedicated implementation practices.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {RELATED_PRACTICES.map((practice, idx) => {
            const Icon = practice.icon;
            const title = t(`services.items.${practice.key}.title`, practice.fallbackTitle);
            const lead = t(`services.items.${practice.key}.lead`, practice.fallbackLead);

            return (
              <motion.div
                key={practice.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.06 }}
              >
                <Link
                  to={getLocalizedPath(`/services/${practice.slug}`)}
                  className="relative h-full rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] p-7 sm:p-8 transition-colors duration-200 flex flex-col justify-between space-y-6 group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-['Poppins',sans-serif] font-light text-[34px] leading-none text-[#019934]">
                        {practice.number}
                      </span>
                      <Icon className="w-7 h-7 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.35] transition-colors duration-200" />
                    </div>

                    <span className="inline-block px-2.5 py-0.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/35">
                      PRACTICE {practice.number}
                    </span>

                    <h3 className="font-['Poppins',sans-serif] font-semibold text-[19px] sm:text-[20px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.68] line-clamp-3">
                      {lead}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#efefef] flex items-center justify-between text-[13.5px] font-medium text-[#1A5C3B] group-hover:text-[#019934] transition-colors">
                    <span>{t('insights.relatedServices.exploreService', 'Explore Service Practice')}</span>
                    <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
