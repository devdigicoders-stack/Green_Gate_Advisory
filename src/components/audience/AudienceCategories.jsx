import { useTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';
import AudienceSection from './AudienceSection';

export default function AudienceCategories() {
  const { t } = useTranslation();

  const rawCategories = t('audience.categories', { returnObjects: true }) || [];
  const categories = Array.isArray(rawCategories) ? rawCategories : [];

  return (
    <section className="py-20 sm:py-28 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('audience.categoriesBadge', 'Tailored Support')}
          title={t('audience.categoriesTitle', 'Five Key Stakeholder Categories')}
          subtitle={t('audience.categoriesSubtitle', 'Deep-dive into the specific climate challenges, advisory support areas, and deliverables tailored to your organisation.')}
        />

        {/* 5 Category Cards */}
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <AudienceSection key={cat.id} category={cat} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
