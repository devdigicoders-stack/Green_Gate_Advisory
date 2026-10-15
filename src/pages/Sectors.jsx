import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import SectorsHero from '../components/sectors/SectorsHero';
import SectorExpertise from '../components/sectors/SectorExpertise';
import SectorGrid from '../components/sectors/SectorGrid';
import SectorApproach from '../components/sectors/SectorApproach';
import SectorRelatedServices from '../components/sectors/SectorRelatedServices';
import SectorsCTA from '../components/sectors/SectorsCTA';
import { useLocale } from '../hooks/useLocale';

export default function Sectors() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  // Structured Data (JSON-LD) for Sectors page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('sectors.meta.title', 'Sectors We Support | Green Gate Advisory'),
    "description": t('sectors.meta.description', 'Climate, carbon market and environmental advisory for energy, industry, manufacturing, land use, infrastructure and financial sector organisations.'),
    "url": `https://greengateadvisory.com/${locale}/sectors`,
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
          "name": t('sectors.hero.breadcrumbHome', 'Home'),
          "item": `https://greengateadvisory.com/${locale}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": t('sectors.hero.breadcrumbCurrent', 'Sectors'),
          "item": `https://greengateadvisory.com/${locale}/sectors`
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title={t('sectors.meta.title', t('meta.sectors.title', 'Sectors We Support | Green Gate Advisory'))}
        description={t('sectors.meta.description', t('meta.sectors.description', 'Climate, carbon market and environmental advisory for energy, industry, manufacturing, land use, infrastructure and financial sector organisations.'))}
        structuredData={structuredData}
      />

      <div className="bg-sand-surface min-h-screen">
        {/* Section 1: Hero */}
        <SectorsHero />

        {/* Section 2: Our Sector Expertise */}
        <SectorExpertise />

        {/* Section 3: Priority Sectors (11 Sectors) */}
        <SectorGrid />

        {/* Section 4: Sector-Specific Advisory Framework */}
        <SectorApproach />

        {/* Section 5: Related Advisory Services */}
        <SectorRelatedServices />

        {/* Section 6: Closing CTA */}
        <SectorsCTA />
      </div>
    </>
  );
}
