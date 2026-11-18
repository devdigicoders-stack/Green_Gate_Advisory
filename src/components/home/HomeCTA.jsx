import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function HomeCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section
      id="contact"
      className="relative w-full bg-white font-['Poppins',sans-serif] py-20 sm:py-24 lg:py-28 scroll-mt-24 overflow-hidden"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto">
        {/* GCC-Styled Architectural Boxed Engagement Panel (Sharp Edges, Pale Mint Wash, #019934 Border) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative rounded-none bg-[#57D182]/[0.14] border border-[#019934]/45 px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 text-center overflow-hidden"
        >
          {/* Top Signature Teal Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />

          {/* Subtle Diagonal Translucent Teal Geometric Corner Accent (Echoing GCC Hero Motif) */}
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-0 left-0 w-[180px] lg:w-[240px] h-full opacity-[0.14]"
            style={{
              background: 'linear-gradient(135deg, #019934 0%, #1A5C3B 100%)',
              clipPath: 'polygon(0 0, 100% 0, 42% 100%, 0 100%)'
            }}
          />

          {/* Subtle Concentric White Ripple Arcs Watermark (Right Side) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 420 420"
            fill="none"
            className="pointer-events-none absolute -right-20 -bottom-24 w-[280px] sm:w-[360px] h-auto opacity-55"
          >
            {Array.from({ length: 12 }).map((_, idx) => (
              <circle
                key={idx}
                cx="260"
                cy="260"
                r={45 + idx * 18}
                stroke="#ffffff"
                strokeWidth="1.25"
              />
            ))}
          </svg>

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            {/* Signature GCC 70px x 2px Teal Rule */}
            <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

            {/* Eyebrow */}
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {t('home.cta.eyebrow', 'Advisory Engagement')}
            </span>

            {/* Display Headline — Airy Light-Weight Navy #1A5C3B (GCC .main-title style) */}
            <h2 className="mt-4 font-['Poppins',sans-serif] font-light text-[30px] sm:text-[40px] lg:text-[48px] text-[#1A5C3B] leading-[1.18] tracking-[-0.01em] max-w-4xl">
              {t('home.cta.headline', 'Ready to move from climate complexity to practical action?')}
            </h2>

            {/* Supporting Sentence — Clean Light Charcoal Copy */}
            <p className="mt-5 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18px] lg:text-[20px] text-[#3C3C3C]/85 max-w-3xl leading-[1.6]">
              Contact Green Gate Advisory to discuss your carbon market, CBAM, climate finance, or sustainability priorities.
            </p>

            {/* Exact GCC Button Pair: .btn-style1 (Solid Navy -> Teal) + .btn-style2 (Outline Teal -> Teal) */}
            <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-['Poppins',sans-serif] font-normal text-[15px] tracking-normal transition-colors duration-200 group focus:outline-none"
              >
                <span>{t('home.cta.btnPrimary', 'Request a Consultation')}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-transparent hover:bg-[#019934] text-[#1A5C3B] hover:text-white border-2 border-[#019934] font-['Poppins',sans-serif] font-normal text-[15px] tracking-normal transition-colors duration-200 focus:outline-none"
              >
                <span>{t('home.cta.btnSecondary', 'Contact Our Team')}</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
