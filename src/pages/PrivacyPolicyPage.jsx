import { useTranslation } from 'react-i18next';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import { Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  const rawSections = t('privacy.sections', { returnObjects: true }) || [];
  const sections = Array.isArray(rawSections) ? rawSections : [];

  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <MetaTags 
        title={t('meta.privacy.title', 'Privacy Policy | Green Gate Advisory')}
        description={t('meta.privacy.description', 'Understand how Green Gate Advisory handles data collection, contact requests, and regulatory privacy compliance.')}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader 
          badge={t('privacy.badge', 'Data Governance')}
          title={t('privacy.title', 'Privacy Policy & Data Handling')}
          lead={t('privacy.lead', 'Green Gate Advisory is committed to handling professional enquiries with confidentiality, transparency, and compliance with applicable data protection legislation.')}
          align="left"
        />

        <div className="space-y-8 bg-white rounded-3xl p-8 sm:p-12 border border-sand-border shadow-subtle">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-3 pb-6 border-b border-sand-border/60 last:border-b-0 last:pb-0">
              <h3 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span>{sec.title}</span>
              </h3>
              <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-sage border border-deep-green/20 space-y-3">
            <h4 className="font-heading font-bold text-base text-forest flex items-center gap-2">
              <Mail className="w-4 h-4 text-deep-green" />
              <span>Contact Privacy Officer</span>
            </h4>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              If you have any questions about our data collection procedures, wish to exercise your data subject rights, or request deletion of contact records, please email <a href="mailto:privacy@greengateadvisory.com" className="font-semibold text-deep-green hover:underline">privacy@greengateadvisory.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
