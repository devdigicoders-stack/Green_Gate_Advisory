import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import HeroSection from '../components/home/HeroSection';
import AdvisoryImpactCounter from '../components/home/AdvisoryImpactCounter';
import WhatWeDo from '../components/home/WhatWeDo';
import CarbonMarketProcess from '../components/home/CarbonMarketProcess';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ExpertPoolSection from '../components/home/ExpertPoolSection';
import HomeCTA from '../components/home/HomeCTA';
import { useLocale } from '../hooks/useLocale';

export default function Home() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  // Structured Data (JSON-LD) for ProfessionalService / Advisory
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Green Gate Advisory",
    "url": `https://greengateadvisory.com/${locale}`,
    "description": t('meta.home.description', 'Expert climate and environmental advisory across carbon markets, CBAM, ETS, climate finance, nature-based solutions and corporate sustainability.'),
    "serviceType": [
      "Carbon Market Advisory",
      "CBAM Advisory",
      "Emissions Trading System (ETS) Advisory",
      "Climate Finance Advisory",
      "Nature-Based Solutions",
      "Environmental & Climate Policy",
      "Corporate Climate & ESG"
    ],
    "inLanguage": locale
  };

  return (
    <>
      <MetaTags
        title={t('meta.home.title', 'Green Gate Advisory | Carbon Markets, CBAM & Climate Finance')}
        description={t('meta.home.description', 'Expert climate and environmental advisory across carbon markets, CBAM, ETS, climate finance, nature-based solutions and corporate sustainability.')}
        structuredData={structuredData}
      />

      {/* 1. HERO SECTION (HOME) */}
      <HeroSection />

      {/* 2. ABOUT US / WHAT WE DO (Positioned directly after Home) */}
      <WhatWeDo />

      {/* 3. ADVISORY IMPACT COUNTER (Fiduciary & Scale Metrics) */}
      <AdvisoryImpactCounter />

      {/* 4. END-TO-END CARBON MARKET SUPPORT */}
      <CarbonMarketProcess />

      {/* 5. WHY GREEN GATE ADVISORY */}
      <WhyChooseUs />

      {/* 10. EXPERTS & CONSULTANTS RECRUITMENT ROSTER */}
      <ExpertPoolSection />

      {/* 11. FINAL CONSULTATION CTA */}
      <HomeCTA />
    </>
  );
}
