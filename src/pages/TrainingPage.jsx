import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import FAQAccordion from '../components/sections/FAQAccordion';
import ClosingCTA from '../components/sections/ClosingCTA';
import { useLocale } from '../hooks/useLocale';

export default function TrainingPage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawTopics = t('training.topics', { returnObjects: true }) || [];
  const topicsList = Array.isArray(rawTopics) ? rawTopics : [];

  return (
    <div className="space-y-20 sm:space-y-28 py-12 sm:py-16">
      <MetaTags 
        title={t('meta.training.title', 'Climate, Carbon Markets & Climate Finance Training')}
        description={t('meta.training.description', 'Build practical knowledge through training on carbon markets, CBAM, ETS, climate finance, Article 6, MRV, GHG accounting and climate policy.')}
      />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
            {t('training.badge', 'Capacity Building')}
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            {t('training.title', 'Climate, Carbon Markets & Climate Finance Training')}
          </h1>
          <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans">
            {t('training.lead')}
          </p>
          <div className="inline-flex items-center gap-2 p-3.5 rounded-xl bg-sage border border-sand-border text-xs sm:text-sm text-forest font-medium">
            <Users className="w-4 h-4 text-deep-green" />
            <span>{t('training.formatsNote')}</span>
          </div>
        </div>
      </section>

      {/* 2. 11 TRAINING TOPICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader 
          badge="Curriculum Modules"
          title={t('training.topicsTitle', 'Potential Training Topics')}
          subtitle="Modules engineered for ministry officials, compliance directors, and project originators."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicsList.map((topic, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-3xl border border-sand-border shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-gold-dark bg-gold/15 px-2.5 py-0.5 rounded">
                  MODULE {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading font-bold text-base text-forest leading-snug">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {topic.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-sand-border/70">
                <Link
                  to={getLocalizedPath('/contact')}
                  className="link-editorial text-xs font-semibold"
                >
                  <span>Request Module Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TAILORED CAPACITY BUILDING FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion filterIndices={[6]} title="Training Delivery & Customization" />
      </section>

      <ClosingCTA 
        headline="Discuss a Custom Training Programme"
        description="Connect with our advisory faculty to tailor curriculum duration, depth, and case study focus for your team."
        primaryBtnText={t('training.cta', 'Discuss a Training Programme')}
      />
    </div>
  );
}
