import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectorCard from './SectorCard';

export default function SectorGrid() {
  const { t } = useTranslation();

  const rawSectors = t('sectors.sectors', { returnObjects: true }) || [];
  const sectors = Array.isArray(rawSectors) ? rawSectors : [];

  return (
    <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('sectors.gridBadge', 'Industry Coverage')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('sectors.gridTitle', 'Eleven Priority Industry Sectors')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
            {t('sectors.gridSubtitle', 'Tailored technical advisory structured around specific operational realities, capital assets, and emissions profiles.')}
          </p>
        </motion.div>

        {/* 11 Priority Sectors Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {sectors.map((sec, idx) => (
            <SectorCard key={sec.id} sector={sec} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
