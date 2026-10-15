import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import InsightsHero from '../components/insights/InsightsHero';
import InsightsHubIntro from '../components/insights/InsightsHubIntro';
import InsightsCategories from '../components/insights/InsightsCategories';
import ArticleGrid from '../components/insights/ArticleGrid';
import ResourceGrid from '../components/insights/ResourceGrid';
import InsightsRelatedServices from '../components/insights/InsightsRelatedServices';
import InsightsCTA from '../components/insights/InsightsCTA';
import { useLocale } from '../hooks/useLocale';
import { APPROVED_ARTICLES } from '../data/insightsData';

export default function Insights() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Structured Data (JSON-LD) for Insights page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": t('insights.meta.title', 'Climate Insights & Resources | Green Gate Advisory'),
    "description": t('insights.meta.description', 'Practical guidance on CBAM, carbon markets, ETS, climate finance, Article 6, nature-based solutions and corporate greenhouse gas accounting.'),
    "url": `https://greengateadvisory.com/${locale}/insights`,
    "publisher": {
      "@type": "Organization",
      "name": "Green Gate Advisory",
      "url": "https://greengateadvisory.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": t('insights.hero.breadcrumbHome', 'Home'),
          "item": `https://greengateadvisory.com/${locale}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": t('insights.hero.breadcrumbCurrent', 'Insights & Resources'),
          "item": `https://greengateadvisory.com/${locale}/insights`
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title={t('insights.meta.title', 'Climate Insights & Resources | Green Gate Advisory')}
        description={t('insights.meta.description', 'Practical guidance on CBAM, carbon markets, ETS, climate finance, Article 6, nature-based solutions and corporate greenhouse gas accounting.')}
        structuredData={structuredData}
      />

      <div className="bg-sand-surface min-h-screen">
        {/* Section 1: Hero */}
        <InsightsHero />

        {/* Section 2: Climate Knowledge Hub Introduction */}
        <InsightsHubIntro />

        {/* Section 3: Eight Insights Categories & Filter */}
        <InsightsCategories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Section 4: Featured Insights & Article Listing (with empty-state guarantee) */}
        <ArticleGrid
          articles={APPROVED_ARTICLES}
          selectedCategory={selectedCategory}
        />

        {/* Section 5: Downloadable Resources (6 PDF checklists/guides) */}
        <ResourceGrid />

        {/* Section 6: Browse Advisory Topics (6 Services Links) */}
        <InsightsRelatedServices />

        {/* Section 7: Final Consultation CTA */}
        <InsightsCTA />
      </div>
    </>
  );
}
