import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const SERVICES_DATA = [
  {
    number: '01',
    key: 'carbonMarket',
    slug: 'carbon-market-advisory',
    badge: 'MARKET MECHANISMS',
    title: 'Carbon Market Advisory',
    description: 'Carbon project feasibility, methodology selection, MRV design, and registry commercialisation.',
    image: '/images/photo-carbon-markets.jpg'
  },
  {
    number: '02',
    key: 'etsCarbonPricing',
    slug: 'ets-carbon-pricing-article-6',
    badge: 'COMPLIANCE SCHEMES',
    title: 'ETS, Carbon Pricing & Article 6',
    description: 'EU/UK ETS readiness, internal carbon pricing, and Article 6 ITMO compliance frameworks.',
    image: '/images/photo-ets-pricing.jpg'
  },
  {
    number: '03',
    key: 'cbam',
    slug: 'cbam-advisory',
    badge: 'TRADE & REGULATION',
    title: 'CBAM Advisory',
    description: 'Embedded emissions calculations, supplier data workflows, and EU CBAM reporting readiness.',
    image: '/images/photo-cbam-industry.jpg'
  },
  {
    number: '04',
    key: 'climateFinance',
    slug: 'climate-finance-advisory',
    badge: 'FINANCIAL STRUCTURING',
    title: 'Climate Finance Advisory',
    description: 'Bankable GCF, GEF, and blended finance concept notes and full funding proposals.',
    image: '/images/photo-climate-finance.jpg'
  },
  {
    number: '05',
    key: 'natureBased',
    slug: 'nature-based-solutions',
    badge: 'NATURAL CAPITAL',
    title: 'Nature-Based Solutions',
    description: 'Forestry, blue carbon mangroves, regenerative land use, and biodiversity crediting.',
    image: '/images/forestry.jpg'
  },
  {
    number: '06',
    key: 'climatePolicy',
    slug: 'climate-policy-advisory',
    badge: 'SOVEREIGN ADVISORY',
    title: 'Environmental & Climate Policy',
    description: 'NDC alignment, National Adaptation Plans, carbon pricing policy, and transparency systems.',
    image: '/images/photo-climate-policy.jpg'
  },
  {
    number: '07',
    key: 'corporateClimate',
    slug: 'corporate-climate-esg',
    badge: 'ENTERPRISE ESG',
    title: 'Corporate Climate & ESG',
    description: 'Scope 1, 2 & 3 GHG inventories, decarbonisation roadmaps, and CSRD/IFRS disclosures.',
    image: '/images/photo-corporate-esg.jpg'
  }
];

export default function OurServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const [hoveredSlug, setHoveredSlug] = useState(null);

  return (
    <section
      id="services"
      aria-label="Our Core Advisory Services"
      className="relative w-full bg-white font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-20"
    >
      {/* Subtle Concentric Mint Ripple Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-24 -bottom-24 w-[420px] sm:w-[540px] h-auto opacity-30"
      >
        {Array.from({ length: 14 }).map((_, idx) => (
          <circle
            key={idx}
            cx="420"
            cy="420"
            r={60 + idx * 22}
            stroke="#57D182"
            strokeWidth="1"
            strokeOpacity="0.45"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
            {t('home.coreServices.eyebrow', 'OUR ADVISORY PRACTICES')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[52px] text-[#1A5C3B] leading-[1.15] tracking-[-0.01em]">
            {t('home.coreServices.heading', 'Core Climate & Carbon Services')}
          </h2>
          <p className="mt-3 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18px] text-[#7f7f7f] leading-[1.5]">
            {t('home.coreServices.subtitle', 'Seven specialized practices connecting regulation, markets, and sustainable capital.')}
          </p>
        </motion.div>

        {/* Photo-Rich Service Cards Grid */}
        <div
          onMouseLeave={() => setHoveredSlug(null)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {SERVICES_DATA.map((srv, index) => {
            const isDimmed = hoveredSlug !== null && hoveredSlug !== srv.slug;

            return (
              <motion.div
                key={srv.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.06, ease: 'easeOut' }}
                onMouseEnter={() => setHoveredSlug(srv.slug)}
                className={`rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-all duration-300 ${
                  isDimmed ? 'lg:opacity-65' : 'opacity-100'
                }`}
              >
                <Link
                  to={getLocalizedPath(`/services/${srv.slug}`)}
                  className="group h-full flex flex-col justify-between focus:outline-none"
                >
                  <div>
                    {/* Top Crisp Daylight Editorial Photograph */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4F6EA]">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3.5 left-3.5 bg-white/92 backdrop-blur-xs text-[#1A5C3B] px-2.5 py-1 text-[11px] font-medium tracking-[0.1em] uppercase">
                        {srv.number} / {srv.badge}
                      </span>
                    </div>

                    {/* Concise Body */}
                    <div className="p-6 sm:p-7 space-y-2.5">
                      <h3 className="font-['Poppins',sans-serif] font-semibold text-[19px] sm:text-[21px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                      <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.65] line-clamp-2">
                        {srv.description}
                      </p>
                    </div>
                  </div>

                  {/* Clean Action Row */}
                  <div className="px-6 sm:px-7 pb-6">
                    <div className="pt-4 border-t border-[#efefef] flex items-center justify-between">
                      <span className="text-[12.5px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover:text-[#019934] transition-colors">
                        Explore Practice
                      </span>
                      <span className="w-9 h-9 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
                        <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Special 8th 2-Column Split Photo Feature Card (Training) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            onMouseEnter={() => setHoveredSlug('training-card')}
            className={`md:col-span-2 lg:col-span-2 rounded-[4px] overflow-hidden grid grid-cols-1 sm:grid-cols-12 border border-[#1A5C3B] transition-opacity duration-300 ${
              hoveredSlug !== null && hoveredSlug !== 'training-card' ? 'lg:opacity-65' : 'opacity-100'
            }`}
            style={{
              background: 'linear-gradient(125deg, #1A5C3B 0%, #0F7A3D 55%, #019934 100%)'
            }}
          >
            {/* Left Copy */}
            <div className="sm:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.18em] uppercase text-[#57D182]">
                  <span className="inline-block w-6 h-[2px] bg-[#57D182]" aria-hidden="true" />
                  <span>CAPACITY BUILDING &amp; TRAINING</span>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-light text-[26px] sm:text-[32px] text-white leading-[1.2]">
                  Executive Climate &amp; Carbon Masterclasses
                </h3>
                <p className="font-['Poppins',sans-serif] font-light text-[14.5px] sm:text-[15.5px] text-white/90 leading-[1.65] max-w-lg">
                  Tailored workshops for corporate leaders, ministries, and institutional teams navigating global climate regulation.
                </p>
              </div>

              <div>
                <Link
                  to={getLocalizedPath('/training')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[5px] border border-white/90 bg-transparent hover:bg-white hover:text-[#1A5C3B] text-white font-['Poppins',sans-serif] font-medium text-[14px] transition-all duration-200 group"
                >
                  <span>View Programs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Crisp Seminar Photo */}
            <div className="sm:col-span-5 relative min-h-[220px] sm:min-h-full overflow-hidden">
              <img
                src="/images/photo-executive-training.jpg"
                alt="Executive climate and carbon markets training seminar room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
