import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Target,
  Scale,
  Layers,
  Sparkles,
  Database,
  Users2,
  FileCheck2,
  SlidersHorizontal,
  Info
} from 'lucide-react';

const DIMENSION_ICONS = [
  Target,
  Scale,
  Layers,
  Sparkles,
  Database,
  Users2,
  FileCheck2
];

export default function TailoredAdvisory() {
  const { t } = useTranslation();

  const rawDimensions = t('audience.adaptation.dimensions', { returnObjects: true }) || [];
  const dimensions = Array.isArray(rawDimensions) ? rawDimensions : [];

  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-20 sm:py-24 overflow-hidden">
      {/* Subtle Concentric Arc Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-32 -bottom-28 w-[420px] sm:w-[560px] h-auto opacity-[0.06]"
      >
        {Array.from({ length: 15 }).map((_, idx) => (
          <circle
            key={idx}
            cx="380"
            cy="380"
            r={65 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Dark-Navy Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#57D182]">
            {t('audience.adaptation.eyebrow', 'Engagement Flexibility')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-white leading-[1.16] tracking-[-0.01em]">
            {t('audience.adaptation.heading', 'Tailored to Your Context & Objectives')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-white/80 leading-[1.6] max-w-3xl">
            {t('audience.adaptation.subtitle', "Rather than enforcing a rigid template, Green Gate Advisory adapts its advisory scope to each organisation's unique operating environment.")}
          </p>
        </motion.div>

        {/* 7 Adaptation Dimensions Grid + 8th Highlighted Philosophy Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {dimensions.map((dim, idx) => {
            const Icon = DIMENSION_ICONS[idx] || SlidersHorizontal;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 4) * 0.06 }}
                className="relative p-6 sm:p-7 rounded-none bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] transition-all duration-300 flex flex-col justify-between space-y-5 group min-h-[240px]"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins',sans-serif] font-light text-[36px] leading-none text-[#57D182]">
                      0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-[5px] bg-[#019934]/15 border border-[#57D182]/35 text-[#57D182] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                  </div>

                  <h3 className="font-['Poppins',sans-serif] font-medium text-[17.5px] sm:text-[18.5px] text-white group-hover:text-[#57D182] transition-colors duration-200 leading-snug">
                    {dim.title}
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[13.5px] sm:text-[14px] text-white/75 leading-[1.68]">
                    {dim.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/12 text-[11.5px] font-medium text-[#57D182] flex items-center gap-2">
                  <span className="inline-block w-3 h-[2px] bg-[#019934]" aria-hidden="true" />
                  <span>Calibrated advisory scope</span>
                </div>
              </motion.div>
            );
          })}

          {/* 8th Balancing Summary Card — GCC Signature Diagonal Teal-Emerald Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            className="relative p-6 sm:p-7 rounded-none border border-[#57D182]/75 text-white flex flex-col justify-between space-y-5 overflow-hidden min-h-[240px]"
            style={{
              background:
                'linear-gradient(145deg, #126D3D 0%, #078A38 55%, #019934 100%)'
            }}
          >
            <div className="space-y-4">
              <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase bg-white text-[#1A5C3B] px-2.5 py-0.5">
                DELIVERY PHILOSOPHY
              </span>

              <h3 className="font-['Poppins',sans-serif] font-medium text-[20px] text-white leading-snug">
                Context-Driven Advisory
              </h3>

              <p className="font-['Poppins',sans-serif] font-light text-[14px] text-white/95 leading-[1.68]">
                Every advisory engagement is structured directly with client leadership, avoiding generic playbooks and ensuring statutory compliance.
              </p>
            </div>

            <div className="pt-4 border-t border-white/25 text-[12px] font-medium text-white flex items-center gap-2">
              <Info className="w-4 h-4 flex-shrink-0 stroke-[1.75]" />
              <span>Tailored deliverables only</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
