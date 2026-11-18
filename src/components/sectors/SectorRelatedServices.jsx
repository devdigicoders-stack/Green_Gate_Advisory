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

const CORE_PRACTICES = [
  {
    key: 'carbonMarket',
    slug: 'carbon-market-advisory',
    icon: Sparkles,
    number: '01',
    fallbackTitle: 'Carbon Market Advisory',
    fallbackLead: 'High-integrity project feasibility, carbon accounting, baseline methodologies, and credit commercialisation.'
  },
  {
    key: 'cbam',
    slug: 'cbam-advisory',
    icon: ShieldCheck,
    number: '02',
    fallbackTitle: 'CBAM Advisory',
    fallbackLead: 'EU Carbon Border Adjustment Mechanism readiness, embedded emissions calculation, and importer reporting.'
  },
  {
    key: 'etsCarbonPricing',
    slug: 'ets-carbon-pricing-article-6',
    icon: Scale,
    number: '03',
    fallbackTitle: 'ETS and Carbon Pricing',
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
    fallbackTitle: 'Corporate Climate and ESG',
    fallbackLead: 'Scope 1, 2, and 3 emissions inventory, science-aligned decarbonisation roadmaps, and ESG disclosures.'
  }
];

export default function SectorRelatedServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="w-full bg-[#E4F6EA]/55 border-b border-[#C4E7D0] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14">
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
            {t('sectors.relatedBadge', 'Advisory Services')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('sectors.relatedTitle', 'Related Advisory Practices for Sector Operations')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#1A5C3B]/75 leading-[1.5] max-w-3xl">
            {t('sectors.relatedSubtitle', 'Connect sector-specific requirements to our specialised, source-grounded technical advisory practices.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CORE_PRACTICES.map((practice, idx) => {
            const Icon = practice.icon;
            const title = t(`services.items.${practice.key}.title`, practice.fallbackTitle);
            const lead = t(`services.items.${practice.key}.lead`, practice.fallbackLead);

            return (
              <motion.div
                key={practice.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 3) * 0.08 }}
                className="h-full"
              >
                <Link
                  to={getLocalizedPath(`/services/${practice.slug}`)}
                  className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#1A5C3B] p-7 sm:p-8 transition-colors duration-200 flex flex-col justify-between space-y-6 group overflow-hidden h-full focus:outline-none"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-0.5">
                        PRACTICE {practice.number}
                      </span>
                      <Icon className="w-7 h-7 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.35] transition-colors duration-200" />
                    </div>

                    <h3 className="font-['Poppins',sans-serif] font-medium text-[20px] sm:text-[21px] text-[#1A5C3B] leading-snug group-hover:underline decoration-[#1A5C3B] decoration-[1.5px] underline-offset-4">
                      {title}
                    </h3>

                    <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.68] line-clamp-3">
                      {lead}
                    </p>
                  </div>

                  {/* GCC Circular Navy -> Teal Arrow */}
                  <div className="pt-2 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                      <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover:text-[#019934] transition-colors">
                      {t('services.overview.grid.exploreService', 'Explore Advisory Practice')}
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
