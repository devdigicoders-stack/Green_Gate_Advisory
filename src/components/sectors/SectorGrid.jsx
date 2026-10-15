import { useTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';
import SectorCard from './SectorCard';

export default function SectorGrid() {
  const { t } = useTranslation();

  const rawSectors = t('sectors.sectors', { returnObjects: true }) || [];
  const sectors = Array.isArray(rawSectors) ? rawSectors : [];

  return (
    <section className="py-20 sm:py-28 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('sectors.gridBadge', 'Industry Coverage')}
          title={t('sectors.gridTitle', 'Eleven Priority Industry Sectors')}
          subtitle={t('sectors.gridSubtitle', 'Tailored technical advisory structured around specific operational realities, capital assets, and emissions profiles.')}
        />

        {/* 11 Priority Sectors Responsive Grid (3-col Desktop, 2-col Tablet, 1-col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sec, idx) => (
            <SectorCard key={sec.id} sector={sec} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
