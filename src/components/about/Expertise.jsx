import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Scale,
  ShieldCheck,
  Landmark,
  TrendingUp,
  Leaf,
  FileText,
  BarChart3,
  GraduationCap
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const DOMAIN_ICONS = [
  Globe,
  Scale,
  ShieldCheck,
  Landmark,
  TrendingUp,
  Leaf,
  FileText,
  BarChart3,
  GraduationCap
];

export default function Expertise() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawItems = t('about.expertise.items', { returnObjects: true }) || [];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24">
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
            {t('about.expertise.eyebrow', 'Technical Advisory Domains')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('about.expertise.heading', 'Our Areas of Expertise')}
          </h2>

          {t('about.expertise.subtitle') && (
            <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
              {t('about.expertise.subtitle')}
            </p>
          )}
        </motion.div>

        {/* 9 Technical Advisory Domains — Exact GCC Block B Shared-Hairline Bordered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#e5e7eb]">
          {items.map((item, idx) => {
            const Icon = DOMAIN_ICONS[idx % DOMAIN_ICONS.length] || ShieldCheck;
            const domainNumber = item.number || (idx < 9 ? `0${idx + 1}` : idx + 1);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.06 }}
                className="border-r border-b border-[#e5e7eb] bg-white hover:bg-[#57D182]/[0.16] transition-colors duration-200"
              >
                <Link
                  to={getLocalizedPath(item.route)}
                  className="group p-7 sm:p-8 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between space-y-6 block w-full h-full focus:outline-none"
                >
                  <div className="space-y-4">
                    {/* Top Row: Mint Pill Domain Tag + Clean Teal Line Icon */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11.5px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-0.5">
                        DOMAIN {domainNumber}
                      </span>

                      <Icon className="w-6 h-6 text-[#019934] stroke-[1.5] flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    {/* Domain Title — Navy Medium with GCC Hover Underline */}
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[17px] sm:text-[18.5px] text-[#1A5C3B] leading-[1.4] group-hover:underline decoration-[#1A5C3B] decoration-[1.5px] underline-offset-4">
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom Action Row — GCC Circular Navy -> Teal Arrow */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="w-9 h-9 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                      <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[12.5px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover:text-[#019934] transition-colors duration-200">
                      {t('about.expertise.exploreService', 'Explore Service')}
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
