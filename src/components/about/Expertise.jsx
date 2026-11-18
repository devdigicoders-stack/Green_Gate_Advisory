import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const EXPERTISE_PHOTOS = [
  '/images/photo-carbon-markets.jpg',
  '/images/photo-ets-pricing.jpg',
  '/images/photo-cbam-industry.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/photo-green-hydrogen.jpg',
  '/images/forestry.jpg',
  '/images/photo-climate-policy.jpg',
  '/images/photo-corporate-esg.jpg',
  '/images/photo-executive-training.jpg'
];

export default function Expertise() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawItems = t('about.expertise.items', { returnObjects: true }) || [];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20">
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
            {t('about.expertise.eyebrow', 'Technical Domains')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-[#1A5C3B] leading-[1.16]">
            {t('about.expertise.heading', 'Our Areas of Expertise')}
          </h2>
        </motion.div>

        {/* 9 Photo-Topped Expertise Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const domainNumber = item.number || (idx < 9 ? `0${idx + 1}` : idx + 1);
            const titleText = typeof item === 'string' ? item : item.title;
            const routePath = typeof item === 'object' && item.route ? item.route : '/services';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.05 }}
              >
                <Link
                  to={getLocalizedPath(routePath)}
                  className="group rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col justify-between h-full focus:outline-none"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E4F6EA]">
                      <img
                        src={EXPERTISE_PHOTOS[idx % EXPERTISE_PHOTOS.length]}
                        alt={titleText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                        {domainNumber}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6">
                      <h3 className="font-['Poppins',sans-serif] font-medium text-[16px] sm:text-[17px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                        {titleText}
                      </h3>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 flex items-center justify-between text-[12px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover:text-[#019934]">
                    <span>Explore</span>
                    <span className="w-8 h-8 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors">
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
