import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import SectorCard from './SectorCard';

export default function SectorGrid() {
  const { t } = useTranslation();

  const rawSectors = t('sectors.sectors', { returnObjects: true }) || [];
  const sectors = Array.isArray(rawSectors) ? rawSectors : [];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFCF9] border-b border-[#E5EDE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('sectors.gridBadge', 'Industry Coverage')}
            title={t('sectors.gridTitle', 'Eleven Priority Industry Sectors')}
            subtitle={t('sectors.gridSubtitle', 'Tailored technical advisory structured around specific operational realities, capital assets, and emissions profiles.')}
          />
        </motion.div>

        {/* 11 Priority Sectors Responsive Grid (3-col Desktop, 2-col Tablet, 1-col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {sectors.map((sec, idx) => (
            <SectorCard key={sec.id} sector={sec} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
