import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import ContactHero from '../components/contact/ContactHero';
import ContactIntroduction from '../components/contact/ContactIntroduction';
import ContactForm from '../components/contact/ContactForm';
import ContactCTA from '../components/contact/ContactCTA';
import { useLocale } from '../hooks/useLocale';

export default function ContactPage() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  // Structured Data (JSON-LD) for Contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": t('contact.meta.title', 'Contact Green Gate Advisory | Request a Climate Advisory Consultation'),
    "description": t('contact.meta.description', 'Contact Green Gate Advisory to discuss carbon markets, CBAM, ETS, climate finance, nature-based solutions, climate policy or corporate sustainability.'),
    "url": `https://greengateadvisory.com/${locale}/contact`,
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
          "name": t('contact.hero.breadcrumbHome', 'Home'),
          "item": `https://greengateadvisory.com/${locale}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": t('contact.hero.breadcrumbCurrent', 'Contact'),
          "item": `https://greengateadvisory.com/${locale}/contact`
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title={t('contact.meta.title', 'Contact Green Gate Advisory | Request a Climate Advisory Consultation')}
        description={t('contact.meta.description', 'Contact Green Gate Advisory to discuss carbon markets, CBAM, ETS, climate finance, nature-based solutions, climate policy or corporate sustainability.')}
        structuredData={structuredData}
      />

      <div className="bg-sand-surface min-h-screen">
        {/* Section 1: Hero */}
        <ContactHero />

        {/* Section 2: Consultation Introduction & 8 Discussion Areas */}
        <ContactIntroduction />

        {/* Section 3: Interactive Contact & Proposal Enquiry Form */}
        <ContactForm />

        {/* Section 4: Auxiliary Disclaimers & General Enquiries */}
        <ContactCTA />
      </div>
    </>
  );
}
