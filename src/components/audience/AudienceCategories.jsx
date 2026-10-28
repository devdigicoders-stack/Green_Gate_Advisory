import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import AudienceSection from './AudienceSection';

export default function AudienceCategories() {
  const { t } = useTranslation();

  const rawCategories = t('audience.categories', { returnObjects: true }) || [];
  const categories = Array.isArray(rawCategories) ? rawCategories : [];

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
            badge={t('audience.categoriesBadge', 'Tailored Support')}
            title={t('audience.categoriesTitle', 'Five Key Stakeholder Categories')}
            subtitle={t('audience.categoriesSubtitle', 'Deep-dive into the specific climate challenges, advisory support areas, and deliverables tailored to your organisation.')}
          />
        </motion.div>

        {/* 5 Category Cards */}
        <div className="space-y-10 sm:space-y-12">
          {categories.map((cat, idx) => (
            <AudienceSection key={cat.id} category={cat} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
