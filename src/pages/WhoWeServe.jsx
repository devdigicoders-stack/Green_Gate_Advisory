import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import AudienceHero from '../components/audience/AudienceHero';
import AudienceStakeholders from '../components/audience/AudienceStakeholders';
import AudienceCategories from '../components/audience/AudienceCategories';
import TailoredAdvisory from '../components/audience/TailoredAdvisory';
import AudienceSolutions from '../components/audience/AudienceSolutions';
import AudienceCTA from '../components/audience/AudienceCTA';
import { useLocale } from '../hooks/useLocale';

export default function WhoWeServe() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  // Structured Data (JSON-LD) for Who We Serve page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('audience.meta.title', 'Who We Serve | Green Gate Advisory'),
    "description": t('audience.meta.description', 'Tailored climate advisory for governments, exporters, companies, project developers, investors, NGOs and international organisations.'),
    "url": `https://greengateadvisory.com/${locale}/who-we-serve`,
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
          "name": t('audience.hero.breadcrumbHome', 'Home'),
          "item": `https://greengateadvisory.com/${locale}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": t('audience.hero.breadcrumbCurrent', 'Who We Serve'),
          "item": `https://greengateadvisory.com/${locale}/who-we-serve`
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title={t('audience.meta.title', t('meta.whoWeServe.title', 'Who We Serve | Green Gate Advisory'))}
        description={t('audience.meta.description', t('meta.whoWeServe.description', 'Tailored climate advisory for governments, exporters, companies, project developers, investors, NGOs and international organisations.'))}
        structuredData={structuredData}
      />

      <div className="bg-sand-surface min-h-screen">
        {/* Section 1: Hero */}
        <AudienceHero />

        {/* Section 2: Our Clients and Stakeholders Overview */}
        <AudienceStakeholders />

        {/* Section 3: Five Client Categories */}
        <AudienceCategories />

        {/* Section 4: Tailored Advisory Approach (7 Dimensions) */}
        <TailoredAdvisory />

        {/* Section 5: Relevant Solutions (6 Solutions Grid) */}
        <AudienceSolutions />

        {/* Section 6: Consultation CTA */}
        <AudienceCTA />
      </div>
    </>
  );
}
