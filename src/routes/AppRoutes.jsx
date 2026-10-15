import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../hooks/useLocale';

// Primary Pages
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Services = lazy(() => import('../pages/Services'));
const Sectors = lazy(() => import('../pages/Sectors'));
const WhoWeServe = lazy(() => import('../pages/WhoWeServe'));
const Insights = lazy(() => import('../pages/Insights'));
const Training = lazy(() => import('../pages/Training'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Dedicated 7 Service Detail Pages
const CarbonMarketAdvisory = lazy(() => import('../pages/services/CarbonMarketAdvisory'));
const EtsCarbonPricing = lazy(() => import('../pages/services/EtsCarbonPricing'));
const CbamAdvisory = lazy(() => import('../pages/services/CbamAdvisory'));
const ClimateFinanceAdvisory = lazy(() => import('../pages/services/ClimateFinanceAdvisory'));
const NatureBasedSolutions = lazy(() => import('../pages/services/NatureBasedSolutions'));
const ClimatePolicyAdvisory = lazy(() => import('../pages/services/ClimatePolicyAdvisory'));
const CorporateClimateEsg = lazy(() => import('../pages/services/CorporateClimateEsg'));

function PageLoader() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-10 h-10 border-2 border-forest/20 border-t-gold rounded-full animate-spin"></div>
      <span className="text-xs font-semibold tracking-wider uppercase text-charcoal-muted">
        {t('common.loading', 'Loading Green Gate Advisory...')}
      </span>
    </div>
  );
}

function LocaleWrapper() {
  const { lang } = useParams();

  if (!SUPPORTED_LOCALES.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  }

  return <Layout />;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Root redirect to default /en/ */}
        <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />

        {/* Localized routes tree: /:lang/... */}
        <Route path="/:lang" element={<LocaleWrapper />}>
          {/* 8 Primary Pages */}
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="who-we-serve" element={<WhoWeServe />} />
          <Route path="insights" element={<Insights />} />
          <Route path="training" element={<Training />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          {/* 7 Dedicated Service Detail Routes */}
          <Route path="services/carbon-market-advisory" element={<CarbonMarketAdvisory />} />
          <Route path="services/ets-carbon-pricing-article-6" element={<EtsCarbonPricing />} />
          <Route path="services/ets-carbon-pricing" element={<EtsCarbonPricing />} />
          <Route path="services/cbam-advisory" element={<CbamAdvisory />} />
          <Route path="services/climate-finance-advisory" element={<ClimateFinanceAdvisory />} />
          <Route path="services/nature-based-solutions" element={<NatureBasedSolutions />} />
          <Route path="services/climate-policy-advisory" element={<ClimatePolicyAdvisory />} />
          <Route path="services/corporate-climate-esg" element={<CorporateClimateEsg />} />

          {/* Explicitly exclude /case-studies per strict instructions */}
          <Route path="case-studies" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />

          {/* Accessible 404 handler within layout */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Global fallback for unlocalized paths */}
        <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
      </Routes>
    </Suspense>
  );
}
