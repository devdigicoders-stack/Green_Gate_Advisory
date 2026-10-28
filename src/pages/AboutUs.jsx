import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import OurPurpose from '../components/about/OurPurpose';
import MissionVision from '../components/about/MissionVision';
import Differentiators from '../components/about/Differentiators';
import Expertise from '../components/about/Expertise';
import WhoWeWorkWith from '../components/about/WhoWeWorkWith';
import OurApproach from '../components/about/OurApproach';
import GovernanceBoard from '../components/about/GovernanceBoard';
import HomeCTA from '../components/home/HomeCTA';
import { useLocale } from '../hooks/useLocale';

export default function AboutUs() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  // Structured Data (JSON-LD) for AboutPage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": t('about.meta.title', 'About Green Gate Advisory | Climate & Environmental Consultants'),
    "url": `https://greengateadvisory.com/${locale}/about-us`,
    "description": t('about.meta.description', 'Learn how Green Gate Advisory connects climate policy, carbon markets, climate finance and practical implementation support for public and private sector clients.'),
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Green Gate Advisory",
      "description": "Specialised climate and environmental advisory consultancy firm supporting governments, businesses, exporters, project developers, investors and institutions.",
      "url": `https://greengateadvisory.com/${locale}`,
      "inLanguage": locale
    }
  };

  return (
    <>
      <MetaTags
        title={t('about.meta.title', 'About Green Gate Advisory | Climate & Environmental Consultants')}
        description={t('about.meta.description', 'Learn how Green Gate Advisory connects climate policy, carbon markets, climate finance and practical implementation support for public and private sector clients.')}
        structuredData={structuredData}
      />

      {/* 1. HERO SECTION */}
      <AboutHero />

      {/* 2. WHO WE ARE */}
      <WhoWeAre />

      {/* 3. OUR PURPOSE */}
      <OurPurpose />

      {/* 4. OUR MISSION & VISION */}
      <MissionVision />

      {/* 5. WHAT MAKES US DIFFERENT */}
      <Differentiators />

      {/* 6. OUR AREAS OF EXPERTISE */}
      <Expertise />

      {/* 7. WHO WE WORK WITH */}
      <WhoWeWorkWith />

      {/* 8. OUR APPROACH */}
      <OurApproach />

      {/* 9. ADVISORY LEADERSHIP & TECHNICAL GOVERNANCE */}
      <GovernanceBoard />

      {/* 10. ADVISORY ENGAGEMENT CTA */}
      <HomeCTA />
    </>
  );
}
