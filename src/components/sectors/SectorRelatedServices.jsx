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
import SectionHeader from '../common/SectionHeader';
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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFCF9] border-b border-[#E5EDE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('sectors.relatedBadge', 'Advisory Services')}
            title={t('sectors.relatedTitle', 'Related Advisory Practices for Sector Operations')}
            subtitle={t('sectors.relatedSubtitle', 'Connect sector-specific requirements to our specialised, source-grounded technical advisory practices.')}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CORE_PRACTICES.map((practice, idx) => {
            const Icon = practice.icon;
            const title = t(`services.items.${practice.key}.title`, practice.fallbackTitle);
            const lead = t(`services.items.${practice.key}.lead`, practice.fallbackLead);
            const initialMotion = 
              idx % 3 === 0 ? { opacity: 0, x: -50 } :
              idx % 3 === 1 ? { opacity: 0, y: 35 } :
              { opacity: 0, x: 50 };

            return (
              <motion.div
                key={practice.key}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
                className="h-full"
              >
                <Link
                  to={getLocalizedPath(`/services/${practice.slug}`)}
                  className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-7 sm:p-8 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group overflow-hidden cursor-pointer h-full"
                >
                  {/* Top Green Accent Bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                        <Icon className="w-5 h-5 transition-colors duration-300" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#019935] bg-[#E8F6ED] px-2.5 py-1 rounded-none border border-[#CDE8D5]">
                        PRACTICE {practice.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#16221A] group-hover:text-[#019935] transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal line-clamp-3">
                      {lead}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EEF4F0] flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#019935]">
                    <span>{t('services.overview.grid.exploreService', 'Explore Advisory Practice')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
