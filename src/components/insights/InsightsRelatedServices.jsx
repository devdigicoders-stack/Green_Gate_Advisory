import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const RELATED_PRACTICES = [
  {
    key: 'carbonMarket',
    slug: 'carbon-market-advisory',
    number: '01',
    image: '/images/photo-carbon-markets.jpg',
    fallbackTitle: 'Carbon Market Advisory',
    fallbackLead: 'Carbon credit feasibility, baseline methodologies, MRV design, and commercialisation.'
  },
  {
    key: 'cbam',
    slug: 'cbam-advisory',
    number: '02',
    image: '/images/photo-cbam-industry.jpg',
    fallbackTitle: 'CBAM Advisory',
    fallbackLead: 'EU CBAM readiness, embedded emissions calculation, and supplier workflows.'
  },
  {
    key: 'etsCarbonPricing',
    slug: 'ets-carbon-pricing-article-6',
    number: '03',
    image: '/images/photo-ets-pricing.jpg',
    fallbackTitle: 'ETS & Carbon Pricing',
    fallbackLead: 'Compliance emissions trading schemes and Article 6 ITMO transfer architecture.'
  },
  {
    key: 'climateFinance',
    slug: 'climate-finance-advisory',
    number: '04',
    image: '/images/photo-climate-finance.jpg',
    fallbackTitle: 'Climate Finance Advisory',
    fallbackLead: 'Funding proposal structuring for GCF, GEF, and blended green investment vehicles.'
  },
  {
    key: 'natureBased',
    slug: 'nature-based-solutions',
    number: '05',
    image: '/images/forestry.jpg',
    fallbackTitle: 'Nature-Based Solutions',
    fallbackLead: 'Afforestation, blue carbon mangroves, soil carbon, and biodiversity crediting.'
  },
  {
    key: 'corporateClimate',
    slug: 'corporate-climate-esg',
    number: '06',
    image: '/images/photo-corporate-esg.jpg',
    fallbackTitle: 'Corporate Climate & ESG',
    fallbackLead: 'Scope 1, 2 & 3 GHG inventories, decarbonisation roadmaps, and ESG disclosures.'
  }
];

export default function InsightsRelatedServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('insights.relatedServices.badge', 'Advisory Practice')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            {t('insights.relatedServices.heading', 'Interconnected Advisory Practices')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {RELATED_PRACTICES.map((practice, idx) => {
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
                  className="h-full rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] transition-colors duration-200 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4F6EA]">
                      <img
                        src={practice.image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92">
                        PRACTICE {practice.number}
                      </span>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.6] line-clamp-2">
                        {lead}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="pt-3.5 border-t border-[#efefef] flex items-center justify-between text-[12.5px] font-medium uppercase tracking-[0.1em] text-[#1A5C3B] group-hover:text-[#019934] transition-colors">
                      <span>{t('insights.relatedServices.exploreService', 'Explore Practice')}</span>
                      <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
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
