import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Scale,
  FileText,
  TrendingUp,
  Compass
} from 'lucide-react';

const PILLAR_ICONS = [ShieldCheck, Scale, FileText, TrendingUp, Compass];

const SHOWCASE_PHOTOS = [
  { src: '/images/clean-energy.jpg', alt: 'Clean renewable energy transition', label: 'Clean Energy' },
  { src: '/images/blue-carbon.jpg', alt: 'Coastal blue carbon ecosystems', label: 'Natural Capital' },
  { src: '/images/photo-corporate-esg.jpg', alt: 'Net-zero corporate campus', label: 'Corporate ESG' }
];

const getColSpanClasses = (idx) => {
  if (idx < 3) return 'lg:col-span-2';
  if (idx === 3) return 'lg:col-span-2 lg:col-start-2';
  if (idx === 4) return 'md:col-span-2 md:max-w-md md:mx-auto lg:col-span-2 lg:max-w-none';
  return 'lg:col-span-2';
};

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const rawPillars = t('home.whyUs.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section
      id="why-us"
      className="relative w-full bg-[#E4F6EA] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 scroll-mt-24 overflow-hidden"
    >
      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12">
        {/* Concise Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
          <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('home.whyUs.eyebrow', 'OUR DIFFERENTIATION')}
          </span>
          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.15]">
            Why <span className="text-[#019934]">Green Gate Advisory</span>
          </h2>
        </motion.div>

        {/* 3-Photo Editorial Visual Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {SHOWCASE_PHOTOS.map((photo) => (
            <div
              key={photo.label}
              className="relative aspect-[16/9] overflow-hidden rounded-[4px] bg-white border border-[#C4E7D0] group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <span className="absolute bottom-3 left-3 bg-white/92 text-[#1A5C3B] text-[11px] font-medium uppercase tracking-[0.12em] px-2.5 py-1">
                {photo.label}
              </span>
            </div>
          ))}
        </div>

        {/* 5 Compact Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length] || ShieldCheck;
            const badgeNum = pillar.num || (idx + 1 < 10 ? `0${idx + 1}` : idx + 1);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.06, ease: 'easeOut' }}
                className={`relative rounded-[4px] bg-white border border-[#C4E7D0] hover:border-[#1A5C3B] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group overflow-hidden ${getColSpanClasses(idx)}`}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] z-20" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#1A5C3B] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-[5px] bg-[#57D182]/20 text-[#019934] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#1A5C3B] bg-[#57D182]/35 group-hover:bg-[#019934]/25 group-hover:text-[#57D182] px-2.5 py-0.5 transition-colors">
                      {badgeNum}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] sm:text-[19px] text-[#1A5C3B] group-hover:text-white transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#3C3C3C] group-hover:text-white/85 transition-colors leading-[1.6]">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
