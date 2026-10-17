import { useTranslation } from 'react-i18next';
import { CheckCircle2, Target, Compass, Award } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import ClosingCTA from '../components/sections/ClosingCTA';

export default function AboutPage() {
  const { t } = useTranslation();

  const rawDiff = t('about.differentiation.items', { returnObjects: true }) || [];
  const diffItems = Array.isArray(rawDiff) ? rawDiff : [];

  const rawExpertise = t('about.expertise.items', { returnObjects: true }) || [];
  const expertiseItems = Array.isArray(rawExpertise) ? rawExpertise : [];

  const rawSteps = t('about.approach.steps', { returnObjects: true }) || [];
  const approachSteps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <div className="space-y-12 sm:space-y-16 py-12 sm:py-16">
      <MetaTags 
        title={t('meta.about.title', 'About Green Gate Advisory | Climate & Environmental Consultants')}
        description={t('meta.about.description', 'Learn how Green Gate Advisory connects climate policy, carbon markets, climate finance and practical implementation support for public and private sector clients.')}
      />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
            {t('about.hero.badge', 'About Green Gate Advisory')}
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            {t('about.hero.title', 'Climate & Environmental Advisory Consultancy')}
          </h1>
          <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans">
            {t('about.hero.lead')}
          </p>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans max-w-3xl mx-auto">
            {t('about.hero.body')}
          </p>
        </div>
      </section>

      {/* 2. PURPOSE, MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-sand-border shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest/5 text-forest flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-xl text-forest">
              {t('about.purpose.title', 'Our Purpose')}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {t('about.purpose.text')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-sand-border shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-xl text-forest">
              {t('about.mission.title', 'Our Mission')}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {t('about.mission.text')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-sand-border shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-deep-green/10 text-deep-green flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-xl text-forest">
              {t('about.vision.title', 'Our Vision')}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT MAKES US DIFFERENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader 
          badge="Differentiation"
          title={t('about.differentiation.title', 'What Makes Us Different')}
          subtitle="A disciplined intersection of technical rigor, market intelligence, and funding execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffItems.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-sand-border shadow-subtle space-y-2.5">
              <span className="text-xs font-mono font-bold text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                PILLAR 0{idx + 1}
              </span>
              <h3 className="font-heading font-bold text-base text-forest">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR AREAS OF EXPERTISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest text-white rounded-3xl p-8 sm:p-14 shadow-elevated space-y-8">
          <SectionHeader 
            badge="Competencies"
            title={t('about.expertise.title', 'Our Areas of Expertise')}
            light={true}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {expertiseItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-sand-surface">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader 
          badge="Methodology"
          title={t('about.approach.title', 'Our Five-Stage Advisory Approach')}
          subtitle="Structured, disciplined engagement from context discovery through measurement and refinement."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {approachSteps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-sand-border shadow-subtle flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xl font-heading font-black text-gold">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-base text-forest mt-2 leading-snug">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center p-6 bg-sage rounded-2xl border border-sand-border text-sm text-charcoal font-medium">
          {t('about.closing')}
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
