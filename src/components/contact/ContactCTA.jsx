import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            const initialMotion = 
              idx === 0 
                ? { opacity: 0, x: -60 } 
                : idx === 2 
                ? { opacity: 0, x: 60 } 
                : { opacity: 0, y: 50 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: idx * 0.12 }}
                className="relative p-6 sm:p-8 rounded-none bg-sage/20 border border-sand-border hover:border-[#019935]/50 hover:bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between space-y-6 group overflow-hidden"
              >
                {/* Top Brand Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#019935] transition-colors duration-300" />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-none bg-forest/5 border border-forest/10 flex items-center justify-center text-forest group-hover:bg-[#019935] group-hover:border-[#019935] transition-all duration-300 shadow-xs">
                    <Icon className="w-5 h-5 text-deep-green group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                    {card.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-forest/90 font-sans">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#019935]" />
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
