import { useTranslation } from 'react-i18next';
import { Info } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ResourceCard from './ResourceCard';
import { DOWNLOADABLE_RESOURCES } from '../../data/insightsData';

export default function ResourceGrid() {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 bg-sage/30 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('insights.resources.badge', 'Practical Guidance')}
          title={t('insights.resources.heading', 'Technical Checklists & Planning Guides')}
          subtitle={t('insights.resources.subtitle', 'Structured frameworks designed to support compliance screening, project eligibility, and funding proposal preparation.')}
        />

        {/* 6 Resources Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOWNLOADABLE_RESOURCES.map((res, idx) => (
            <ResourceCard key={res.id} resource={res} index={idx} />
          ))}
        </div>

        {/* Mandatory Regulatory & Guidance Notice */}
        <div className="rounded-2xl bg-white border border-sand-border/90 p-6 sm:p-8 flex items-start gap-4 shadow-subtle max-w-4xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-forest flex-shrink-0">
            <Info className="w-5 h-5 text-gold-dark" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed">
            <h4 className="font-heading font-bold text-sm text-forest">
              Guidance Standard & Editorial Note
            </h4>
            <p>
              {t('insights.resources.notice', 'Download notice: Resources are published only following formal technical verification and legal review. Checklists provide guidance and do not constitute formal regulatory determinations.')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
