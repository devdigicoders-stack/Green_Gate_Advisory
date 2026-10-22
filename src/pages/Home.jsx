import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import HeroSection from '../components/home/HeroSection';
import AdvisoryImpactCounter from '../components/home/AdvisoryImpactCounter';
import WhatWeDo from '../components/home/WhatWeDo';
import CoreServices from '../components/home/CoreServices';
import CarbonMarketProcess from '../components/home/CarbonMarketProcess';
import SectorMatrixGlow from '../components/home/SectorMatrixGlow';
import ClimateFinanceSection from '../components/home/ClimateFinanceSection';
import WhoWeServePreview from '../components/home/WhoWeServePreview';
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

      {/* 4. OUR CORE SERVICES */}
      <CoreServices />

      {/* 5. END-TO-END CARBON MARKET SUPPORT */}
      <CarbonMarketProcess />

      {/* 6. SECTORAL EXPERTISE MATRIX (Ambient Glow Real-Economy Cards) */}
      <SectorMatrixGlow />

      {/* 7. CLIMATE FINANCE: FROM CONCEPT TO FUNDABLE PROPOSAL */}
      <ClimateFinanceSection />

      {/* 8. WHO WE SERVE */}
      <WhoWeServePreview />

      {/* 9. WHY GREEN GATE ADVISORY */}
      <WhyChooseUs />

      {/* 10. EXPERTS & CONSULTANTS RECRUITMENT ROSTER */}
      <ExpertPoolSection />

      {/* 11. FINAL CONSULTATION CTA */}
      <HomeCTA />
    </>
  );
}
