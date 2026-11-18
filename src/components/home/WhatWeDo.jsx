import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const DELIVERY_STAGES = [
  { num: '01', title: 'Policy & Rules', sub: 'CBAM • ETS • Article 6' },
  { num: '02', title: 'Scientific MRV', sub: 'ISO 14064 • Baselines' },
  { num: '03', title: 'Bankable Action', sub: 'Climate Finance & Issuance' }
];

export default function WhatWeDo() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section
      id="about"
      className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 scroll-mt-24 overflow-hidden"
    >
      <span id="what-we-do" className="absolute -top-24" />

      {/* Subtle Concentric Arc Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 640 640"
        fill="none"
        className="pointer-events-none absolute -right-32 -top-24 w-[420px] sm:w-[560px] h-auto opacity-[0.07]"
      >
        {Array.from({ length: 14 }).map((_, idx) => (
          <circle
            key={idx}
            cx="420"
            cy="220"
            r={70 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-14">
        {/* Clean 2-Column Editorial + Photography Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Concise Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
              <span className="block text-[13px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
                {t('home.whatWeDo.eyebrow', 'WHAT WE DO')}
              </span>
              <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] lg:text-[48px] text-white leading-[1.15] tracking-[-0.01em]">
                Integrated Climate &amp;{' '}
                <span className="text-[#57D182]">Environmental Advisory</span>
              </h2>
            </div>

            <p className="font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18px] text-white/90 leading-[1.7] max-w-xl">
              {t(
                'home.whatWeDo.lead',
                'Green Gate Advisory helps governments, exporters, corporations, and project developers turn carbon markets, CBAM, ETS, and climate finance into practical action.'
              )}
            </p>

            {/* Compact 3-Stage Delivery Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15">
              {DELIVERY_STAGES.map((item) => (
                <div key={item.num} className="space-y-1">
                  <span className="font-['Poppins',sans-serif] font-light text-[32px] sm:text-[38px] leading-none text-[#57D182] block">
                    {item.num}
                  </span>
                  <div className="font-medium text-[14px] sm:text-[15px] text-white leading-snug">
                    {item.title}
                  </div>
                  <div className="font-light text-[12px] text-white/70">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to={getLocalizedPath('/about-us')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[15px] transition-colors duration-200 group focus:outline-none"
              >
                <span>{t('home.whatWeDo.learnMore', 'About Green Gate Advisory')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Editorial Photography Collage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 grid grid-cols-12 gap-3.5"
          >
            <div className="col-span-12 overflow-hidden relative aspect-[16/9] bg-[#144A2F]">
              <img
                src="/images/photo-advisory-office.jpg"
                alt="Sustainable European urban district and climate advisory practice"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#1A5C3B]/85 backdrop-blur-xs text-white text-[11.5px] font-medium tracking-[0.12em] uppercase px-3 py-1">
                Barcelona • Global Practice
              </div>
            </div>

            <div className="col-span-6 overflow-hidden relative aspect-[16/10] bg-[#144A2F]">
              <img
                src="/images/photo-carbon-markets.jpg"
                alt="Clean energy wind turbines and green forest landscape"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            <div className="col-span-6 overflow-hidden relative aspect-[16/10] bg-[#144A2F]">
              <img
                src="/images/photo-climate-finance.jpg"
                alt="Sustainable finance green architectural towers"
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
