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

const getColSpanClasses = (idx) => {
  if (idx < 3) {
    return 'lg:col-span-2';
  }
  if (idx === 3) {
    return 'lg:col-span-2 lg:col-start-2';
  }
  if (idx === 4) {
    return 'md:col-span-2 md:max-w-md md:mx-auto lg:col-span-2 lg:max-w-none';
  }
  return 'lg:col-span-2';
};

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const rawPillars = t('home.whyUs.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section
      id="why-us"
      className="relative w-full bg-[#E4F6EA] font-['Poppins',sans-serif] py-20 sm:py-24 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Subtle Oversized Concentric White Ripple Circles (Exact GCC Pale Mint Band Watermark) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 700 700"
        fill="none"
        className="pointer-events-none absolute -left-36 top-1/2 -translate-y-1/2 w-[520px] sm:w-[680px] lg:w-[760px] h-auto opacity-60"
      >
        {Array.from({ length: 20 }).map((_, idx) => (
          <circle
            key={idx}
            cx="280"
            cy="350"
            r={65 + idx * 22}
            stroke="#ffffff"
            strokeWidth="1.25"
            strokeOpacity={Math.max(0.15, 0.55 - idx * 0.02)}
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Section Header — Exact GCC Light-Weight Navy Display Title on Pale Mint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('home.whyUs.eyebrow', 'OUR DIFFERENTIATION')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[46px] lg:text-[54px] text-[#1A5C3B] leading-[1.15] tracking-[-0.01em]">
            Why{' '}
            <span className="text-[#019934]">Green Gate Advisory</span>
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] lg:text-[21px] text-[#1A5C3B]/75 max-w-3xl leading-[1.5]">
            {t('home.whyUs.subtitle', 'Connecting policy insight, technical analysis, finance preparation and implementation planning.')}
          </p>
        </motion.div>

        {/* 5 Distinctive Value Pillars Cards: 3 Top, 2 Centered Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length] || ShieldCheck;
            const badgeNum = pillar.num || (idx + 1 < 10 ? `0${idx + 1}` : idx + 1);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (idx % 3) * 0.08, ease: 'easeOut' }}
                className={`relative rounded-none bg-white border border-[#57D182]/35 hover:border-[#1A5C3B] p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between group overflow-hidden ${getColSpanClasses(idx)}`}
              >
                {/* Top Signature Teal Accent Rule */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] z-20" />

                {/* Smooth Institutional Deep Navy (#1A5C3B) Slide-Up Hover Surface */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#1A5C3B] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                />

                {/* Card Content */}
                <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                  {/* Top Row: Clean Teal Icon + GCC Mint Pill Value Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-[5px] bg-[#57D182]/20 text-[#019934] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>

                    <span className="text-[11.5px] sm:text-[12px] font-medium tracking-[0.12em] uppercase text-[#1A5C3B] bg-[#57D182]/40 group-hover:bg-[#019934]/25 group-hover:text-[#57D182] px-3 py-1 transition-colors duration-300">
                      VALUE {badgeNum}
                    </span>
                  </div>

                  {/* Body Text — GCC Poppins Medium Navy Title + Light Charcoal Copy */}
                  <div className="space-y-3 pt-1">
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[20px] sm:text-[22px] text-[#1A5C3B] group-hover:text-white transition-colors duration-300 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="font-['Poppins',sans-serif] font-light text-[15px] text-[#3C3C3C] group-hover:text-white/85 transition-colors duration-300 leading-[1.68]">
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
