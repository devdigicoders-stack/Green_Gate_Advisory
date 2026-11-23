import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Scale, Check } from 'lucide-react';

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
            href="mailto:info@greengateadvisory.com"
            className="text-[#1A5C3B] font-medium underline decoration-[#019934] underline-offset-2 hover:text-[#019934] transition-colors"
          >
            info@greengateadvisory.com
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
    <section className="w-full bg-[#f7f7f7] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        {/* Exact GCC 3-Column Directory Style (Icon + Navy Heading + Short Teal Bar + Checkmark Scope) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.08 }}
                className="flex flex-col justify-between pb-8 border-b border-[#dddddd] space-y-5"
              >
                <div className="space-y-4">
                  {/* Header Row: Crisp Navy Icon + Semibold Navy Title */}
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#1A5C3B] stroke-[1.7] flex-shrink-0" />
                    <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#1A5C3B] leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Signature Short GCC Teal Horizontal Accent Bar */}
                  <span className="block w-[48px] h-[3px] bg-[#019934]" aria-hidden="true" />

                  {/* Description with GCC Thin Teal Checkmark */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <Check className="w-4 h-4 text-[#019934] stroke-[2] flex-shrink-0 mt-1" />
                    <p className="font-['Poppins',sans-serif] font-light text-[14.5px] text-[#3C3C3C] leading-[1.7]">
                      {card.text}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[12px] font-medium text-[#0A7A32]">
                  <span className="inline-block w-3.5 h-[2px] bg-[#019934]" aria-hidden="true" />
                  <span>Professional Practice Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
