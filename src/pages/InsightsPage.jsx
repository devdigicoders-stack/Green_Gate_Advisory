import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import ClosingCTA from '../components/sections/ClosingCTA';
import { useLocale } from '../hooks/useLocale';

export default function InsightsPage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawCats = t('insights.categories', { returnObjects: true }) || [];
  const categoriesList = Array.isArray(rawCats) ? rawCats : [];

  const rawDownloads = t('insights.downloadables', { returnObjects: true }) || [];
  const downloadablesList = Array.isArray(rawDownloads) ? rawDownloads : [];

  const rawArticles = t('insights.featuredArticles', { returnObjects: true }) || [];
  const articlesList = Array.isArray(rawArticles) ? rawArticles : [];

  return (
    <div className="space-y-12 sm:space-y-16 py-12 sm:py-16">
      <MetaTags 
        title={t('meta.insights.title', 'Climate Insights & Resources | Green Gate Advisory')}
        description={t('meta.insights.description', 'Practical guidance on CBAM, carbon markets, ETS, climate finance, Article 6, nature-based solutions and corporate greenhouse gas accounting.')}
      />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
            {t('insights.badge', 'Research & Guidance')}
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            {t('insights.title', 'Climate Insights & Resources')}
          </h1>
          <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans">
            {t('insights.lead')}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-charcoal-muted/80 max-w-2xl mx-auto">
            <ShieldAlert className="w-4 h-4 text-gold-dark flex-shrink-0" />
            <span>{t('insights.disclaimer')}</span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED STRATEGIC ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader 
          badge="Briefings"
          title="Featured Strategic Publications"
          subtitle="Analytical perspectives on regulatory transitions, carbon integrity, and international finance."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesList.map((art) => (
            <div 
              key={art.slug}
              className="bg-white rounded-3xl p-7 border border-sand-border shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-deep-green uppercase tracking-wider">{art.category}</span>
                  <span className="text-charcoal-muted">{art.readTime}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-forest leading-snug hover:text-deep-green transition-colors">
                  <Link to={getLocalizedPath(`/insights/${art.slug}`)}>
                    {art.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-4">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-sand-border/70 flex items-center justify-between">
                <span className="text-xs font-medium text-charcoal-muted">{art.date}</span>
                <Link 
                  to={getLocalizedPath(`/insights/${art.slug}`)} 
                  className="link-editorial text-xs sm:text-sm"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DOWNLOADABLE CHECKLISTS & GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage rounded-3xl p-8 sm:p-14 border border-sand-border space-y-10">
          <SectionHeader 
            badge="Practical Toolkits"
            title={t('insights.downloadablesTitle', 'Practical Downloadable Resource Guides')}
            subtitle={t('insights.downloadablesLead')}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadablesList.map((tool) => (
              <div 
                key={tool.id} 
                className="bg-white p-6 rounded-2xl border border-sand-border shadow-subtle flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-forest/5 text-forest flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-forest leading-snug">
                    {tool.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to={getLocalizedPath('/contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green hover:text-forest transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{t('common.downloadResource', 'Request Resource Guide')}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-sand-border text-center text-xs text-charcoal-muted max-w-2xl mx-auto">
            Note: All diagnostic checklists are provided for organizational preparation and do not constitute formal regulatory determinations.
          </div>
        </div>
      </section>

      {/* 4. CONTENT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader 
          badge="Curriculum & Coverage"
          title={t('insights.categoriesTitle', 'Recommended Content Categories')}
          subtitle="Our editorial coverage spans primary regulatory and market workstreams."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesList.map((cat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-white border border-sand-border flex items-center gap-3 text-xs sm:text-sm font-semibold text-forest shadow-subtle"
            >
              <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0" />
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
