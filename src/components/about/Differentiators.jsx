import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  GitMerge,
  Sparkles,
  Landmark,
  Trees,
  ScrollText,
  Users
} from 'lucide-react';

const DIFFERENTIATOR_ICONS = [
  GitMerge,
  Sparkles,
  Landmark,
  Trees,
  ScrollText,
  Users
];

export default function Differentiators() {
  const { t } = useTranslation();

  const rawItems = t('about.differentiators.items', { returnObjects: true }) || [];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section
      id="why-green-gate"
      className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 scroll-mt-24"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('about.differentiators.eyebrow', 'Distinctive Capabilities')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('about.differentiators.heading', 'What Makes Us Different')}
          </h2>

          {t('about.differentiators.subtitle') && (
            <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
              {t('about.differentiators.subtitle')}
            </p>
          )}
        </motion.div>

        {/* 6 Flat Architectural GCC Cards with Deep Navy Slide-Up Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item, idx) => {
            const Icon = DIFFERENTIATOR_ICONS[idx % DIFFERENTIATOR_ICONS.length] || Sparkles;
            const badgeNum = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 3) * 0.08 }}
                className="relative bg-white border border-[#e5e7eb] hover:border-[#1A5C3B] rounded-[4px] p-7 sm:p-8 transition-colors duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Teal Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] z-20" />

                {/* Institutional Deep Navy Slide-Up Surface on Hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#1A5C3B] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                />

                <div className="relative z-10 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Top Row: Mint Pill Index + Thin Line Icon */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11.5px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 group-hover:bg-[#019934]/25 group-hover:text-[#57D182] px-3 py-0.5 transition-colors duration-300">
                        {badgeNum}
                      </span>

                      <Icon className="w-7 h-7 text-[#cbd5e1] group-hover:text-[#57D182] stroke-[1.35] transition-colors duration-300" />
                    </div>

                    <h3 className="font-['Poppins',sans-serif] font-semibold text-[18.5px] sm:text-[20px] text-[#1A5C3B] group-hover:text-white transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-['Poppins',sans-serif] font-light text-[14px] sm:text-[14.5px] text-[#666666] group-hover:text-white/85 transition-colors duration-300 leading-[1.68]">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Subtle Action Strip */}
                  <div className="pt-4 border-t border-[#efefef] group-hover:border-white/15 flex items-center justify-between text-[12px] font-medium uppercase tracking-[0.12em] text-[#019934] group-hover:text-[#57D182] transition-colors duration-300">
                    <span>Core Capability</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
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
