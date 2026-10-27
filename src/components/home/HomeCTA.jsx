import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, ShieldAlert } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function HomeCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28 bg-[#F4F6F4] text-[#1E2522] border-t border-[#DCE4DC] scroll-mt-24">
      {/* Subtle organic light gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F4F6F4] to-[#E9EEE9] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-[#019935] border border-[#D0DCD0] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#019935]"></span>
          <span>{t('home.cta.eyebrow', 'Advisory Engagement')}</span>
        </div>

        {/* Closing Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1E2522] tracking-tight leading-[1.1] max-w-3xl mx-auto">
          {t('home.cta.headline', 'Ready to move from climate complexity to practical action?')}
        </h2>

        {/* Concise Supporting Sentence */}
        <p className="text-base sm:text-lg text-[#55635C] max-w-2xl mx-auto leading-relaxed font-sans font-normal">
          Contact Green Gate Advisory to discuss your carbon market, CBAM, climate finance, or sustainability priorities.
        </p>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#019935] hover:bg-[#02B840] text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
          >
            <span>{t('home.cta.btnPrimary', 'Request a Consultation')}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#FAFBF9] text-[#1E2522] font-semibold text-sm sm:text-base tracking-wide uppercase border border-[#CBD5CB] transition-all duration-300 shadow-xs focus:outline-none"
          >
            <span>{t('home.cta.btnSecondary', 'Contact Our Team')}</span>
          </Link>
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="pt-6 border-t border-[#DCE4DC] max-w-2xl mx-auto text-xs sm:text-sm text-[#738078] leading-relaxed font-sans flex items-start justify-center gap-2">
          <ShieldAlert className="w-4.5 h-4.5 text-[#019935] flex-shrink-0 mt-0.5" />
          <p>{t('home.cta.disclaimer')}</p>
        </div>

      </div>
    </section>
  );
}
