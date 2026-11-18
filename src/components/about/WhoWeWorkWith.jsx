import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Building2,
  Briefcase,
  Ship,
  Sprout,
  Landmark,
  Globe2,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const CLIENT_ICONS = [
  Building2,
  Briefcase,
  Ship,
  Sprout,
  Landmark,
  Globe2,
  GraduationCap
];

export default function WhoWeWorkWith() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawGroups = t('about.whoWeWorkWith.groups', { returnObjects: true }) || [];
  const groups = Array.isArray(rawGroups) ? rawGroups : [];

  return (
    <section className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] py-20 sm:py-24 scroll-mt-24 overflow-hidden">
      {/* Subtle Concentric Arc Watermark (GCC Deep Navy Band Motif) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-32 -top-24 w-[420px] sm:w-[560px] h-auto opacity-[0.06]"
      >
        {Array.from({ length: 15 }).map((_, idx) => (
          <circle
            key={idx}
            cx="380"
            cy="220"
            r={65 + idx * 24}
            stroke="#ffffff"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
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
            {t('about.whoWeWorkWith.eyebrow', 'Client Ecosystem')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-white leading-[1.16] tracking-[-0.01em]">
            {t('about.whoWeWorkWith.heading', 'Who We Work With')}
          </h2>

          {t('about.whoWeWorkWith.intro') && (
            <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-white/80 leading-[1.6] max-w-3xl">
              {t('about.whoWeWorkWith.intro')}
            </p>
          )}
        </motion.div>

        {/* 7 Institutional Client Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {groups.map((group, idx) => {
            const Icon = CLIENT_ICONS[idx % CLIENT_ICONS.length] || Building2;
            const groupNum = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 4) * 0.06 }}
              >
                <Link
                  to={getLocalizedPath('/who-we-serve')}
                  className="relative bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#57D182] p-6 sm:p-7 rounded-none transition-all duration-300 flex flex-col justify-between space-y-5 group overflow-hidden block h-full focus:outline-none"
                >
                  {/* Top Teal Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-['Poppins',sans-serif] font-light text-[34px] leading-none text-[#57D182]">
                        {groupNum}
                      </span>
                      <div className="w-10 h-10 rounded-[5px] bg-[#019934]/15 border border-[#57D182]/35 text-[#57D182] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                        <Icon className="w-5 h-5 stroke-[1.6]" />
                      </div>
                    </div>

                    <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] text-white group-hover:text-[#57D182] transition-colors duration-200 leading-snug">
                      {group.title}
                    </h3>

                    <p className="font-['Poppins',sans-serif] font-light text-[13.5px] sm:text-[14px] text-white/75 leading-[1.65]">
                      {group.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/12 flex items-center justify-between text-[12px] font-medium uppercase tracking-[0.12em] text-[#57D182]">
                    <span>Sector Segment</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Centered Solid Teal GCC CTA Button */}
        <div className="text-center pt-2">
          <Link
            to={getLocalizedPath('/who-we-serve')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[5px] bg-[#019934] hover:bg-[#017D2B] text-white font-['Poppins',sans-serif] font-normal text-[15px] transition-colors duration-200 group focus:outline-none"
          >
            <span>{t('about.whoWeWorkWith.cta', 'Learn More About Who We Serve')}</span>
            <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
