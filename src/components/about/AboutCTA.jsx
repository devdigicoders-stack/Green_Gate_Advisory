import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function AboutCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#F4F8F5] text-[#16221A] border-t border-[#E5EDE7] relative overflow-hidden">
      {/* Subtle background decorative pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0199350a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-xs font-bold tracking-widest uppercase bg-white text-[#019935] border border-[#019935]/20 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#019935]" />
          <span>{t('about.cta.badge', 'Strategic Climate Execution')}</span>
        </div>

        {/* Closing Headline - Compact & Refined */}
        <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#0B2816] tracking-tight leading-snug max-w-3xl mx-auto">
          {t('about.cta.statement', 'Green Gate Advisory connects strategy, regulation, finance and implementation to help clients make informed decisions and advance credible climate action.')}
        </h2>

        {/* Dual CTA Buttons - Architectural rounded-none */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-none bg-[#019935] hover:bg-[#062A17] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-lg w-full sm:w-auto group"
          >
            <span>{t('about.cta.primaryBtn', 'Request a Consultation')}</span>
            <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to={getLocalizedPath('/services')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-none bg-white hover:bg-[#E8F6ED] text-[#0B2816] hover:text-[#019935] font-semibold text-xs sm:text-sm tracking-wider uppercase border border-[#DCE8E0] shadow-xs transition-all duration-300 w-full sm:w-auto"
          >
            <span>{t('about.cta.secondaryBtn', 'Explore Our Services')}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
