import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const CLIENT_PHOTOS = [
  '/images/photo-institutional-forum.jpg',
  '/images/photo-corporate-esg.jpg',
  '/images/photo-cbam-industry.jpg',
  '/images/photo-carbon-markets.jpg',
  '/images/photo-climate-finance.jpg',
  '/images/blue-carbon.jpg',
  '/images/photo-executive-training.jpg'
];

export default function WhoWeWorkWith() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawGroups = t('about.whoWeWorkWith.groups', { returnObjects: true }) || [];
  const groups = Array.isArray(rawGroups) ? rawGroups : [];

  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-16 sm:py-20 scroll-mt-24 overflow-hidden">
      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            {t('about.whoWeWorkWith.eyebrow', 'Client Ecosystem')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] text-white leading-[1.16]">
            {t('about.whoWeWorkWith.heading', 'Who We Work With')}
          </h2>
        </motion.div>

        {/* Photo-Topped Institutional Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {groups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 4) * 0.05 }}
            >
              <Link
                to={getLocalizedPath('/who-we-serve')}
                className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] rounded-[4px] overflow-hidden transition-all duration-300 flex flex-col group h-full focus:outline-none"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#144A2F]">
                  <img
                    src={CLIENT_PHOTOS[idx % CLIENT_PHOTOS.length]}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase bg-[#1A5C3B]/90 text-[#57D182] px-2.5 py-0.5">
                    0{idx + 1}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-2 flex-1">
                  <h3 className="font-['Poppins',sans-serif] font-medium text-[17px] text-white group-hover:text-[#57D182] transition-colors leading-snug">
                    {group.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-light text-[13px] text-white/80 leading-[1.6] line-clamp-2">
                    {group.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-1">
          <Link
            to={getLocalizedPath('/who-we-serve')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[15px] transition-colors duration-200 group"
          >
            <span>{t('about.whoWeWorkWith.cta', 'Explore Who We Serve')}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
