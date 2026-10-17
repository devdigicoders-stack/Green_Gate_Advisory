import { useTranslation } from 'react-i18next';
import { ShieldCheck, Mail, Scale } from 'lucide-react';

export default function ContactCTA() {
  const { t } = useTranslation();

  const CARDS = [
    {
      icon: ShieldCheck,
      title: t('contact.auxiliary.confidentialityTitle', 'Client Confidentiality'),
      text: t('contact.auxiliary.confidentialityText', 'All technical, commercial, and operational information shared in enquiries is treated under strict professional confidentiality.')
    },
    {
      icon: Mail,
      title: t('contact.auxiliary.directEmailTitle', 'General Enquiries'),
      text: (
        <>
          {t('contact.auxiliary.directEmailText', 'For corporate inquiries or formal vendor communications, email our administrative team at')}{' '}
          <a
            href="mailto:contact@greengateadvisory.com"
            className="text-deep-green font-semibold underline hover:text-forest"
          >
            contact@greengateadvisory.com
          </a>.
        </>
      )
    },
    {
      icon: Scale,
      title: t('contact.auxiliary.scopingTitle', 'Independent Scoping'),
      text: t('contact.auxiliary.scopingText', 'We provide objective technical advice tailored to international compliance frameworks and accredited greenhouse gas standards.')
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-sage/30 border border-sand-border/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-sand-border flex items-center justify-center text-forest shadow-xs">
                    <Icon className="w-5 h-5 text-deep-green" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-forest">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                    {card.text}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-semibold text-deep-green">
                  Professional Practice Standard
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
