import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import TrainingHero from '../components/training/TrainingHero';
import TrainingIntro from '../components/training/TrainingIntro';
import TrainingTopics from '../components/training/TrainingTopics';
import TrainingAudience from '../components/training/TrainingAudience';
import TrainingApproach from '../components/training/TrainingApproach';
import HomeCTA from '../components/home/HomeCTA';
import { useLocale } from '../hooks/useLocale';

export default function Training() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  // Structured Data (JSON-LD) for Training page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('training.meta.title', 'Climate, Carbon Markets & Climate Finance Training | Green Gate Advisory'),
    "description": t('training.meta.description', 'Build practical knowledge through training on carbon markets, CBAM, ETS, climate finance, Article 6, MRV, GHG accounting and climate policy.'),
    "url": `https://greengateadvisory.com/${locale}/training`,
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
          "name": t('training.hero.breadcrumbHome', 'Home'),
          "item": `https://greengateadvisory.com/${locale}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": t('training.hero.breadcrumbCurrent', 'Training & Capacity Building'),
          "item": `https://greengateadvisory.com/${locale}/training`
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title={t('training.meta.title', 'Climate, Carbon Markets & Climate Finance Training | Green Gate Advisory')}
        description={t('training.meta.description', 'Build practical knowledge through training on carbon markets, CBAM, ETS, climate finance, Article 6, MRV, GHG accounting and climate policy.')}
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen">
        {/* Section 1: Hero */}
        <TrainingHero />

        {/* Section 2: Building Climate Knowledge & Capacity */}
        <TrainingIntro />

        {/* Section 3: Eleven Potential Training Topics */}
        <TrainingTopics />

        {/* Section 4: Potential Audiences */}
        <TrainingAudience />

        {/* Section 5: Tailored Training Approach (6 Planning Steps) */}
        <TrainingApproach />

        {/* Section 6: Advisory Engagement CTA */}
        <HomeCTA />

        {/* Training & Careers Contact Banner */}
        <div className="w-full bg-[#F4F8F5] border-t border-[#d9dfe5] py-4 text-center">
          <p className="text-[13px] text-[#555555] font-light flex items-center justify-center gap-2 flex-wrap px-4">
            <span>Direct training &amp; trainer career enquiries:</span>
            <a
              href="mailto:career@greengateadvisory.com?subject=Training%20and%20Capacity%20Building%20Enquiry"
              className="inline-flex items-center gap-1.5 text-[#1A5C3B] hover:text-[#019934] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#019934]" />
              <span>career@greengateadvisory.com</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
