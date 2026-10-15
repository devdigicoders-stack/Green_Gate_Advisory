import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import HeroSection from '../components/home/HeroSection';
import WhatWeDo from '../components/home/WhatWeDo';
import CoreServices from '../components/home/CoreServices';
import CarbonMarketProcess from '../components/home/CarbonMarketProcess';
import ClimateFinanceSection from '../components/home/ClimateFinanceSection';
import WhoWeServePreview from '../components/home/WhoWeServePreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedSolutions from '../components/home/FeaturedSolutions';
import InsightsPreview from '../components/home/InsightsPreview';
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

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. WHAT WE DO */}
      <WhatWeDo />

      {/* 3. OUR CORE SERVICES */}
      <CoreServices />

      {/* 4. END-TO-END CARBON MARKET SUPPORT */}
      <CarbonMarketProcess />

      {/* 5. CLIMATE FINANCE: FROM CONCEPT TO FUNDABLE PROPOSAL */}
      <ClimateFinanceSection />

      {/* 6. WHO WE SERVE */}
      <WhoWeServePreview />

      {/* 7. WHY GREEN GATE ADVISORY */}
      <WhyChooseUs />

      {/* 8. FEATURED SOLUTIONS */}
      <FeaturedSolutions />

      {/* 9. INSIGHTS & RESOURCES */}
      <InsightsPreview />

      {/* 10. FINAL CONSULTATION CTA */}
      <HomeCTA />
    </>
  );
}
