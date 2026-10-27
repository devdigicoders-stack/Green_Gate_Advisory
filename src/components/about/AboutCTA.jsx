import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function AboutCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="py-14 sm:py-20 bg-[#F4F6F4] text-charcoal border-t border-sand-border/80 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white text-forest border border-sand-border shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-deep-green" />
          <span>{t('about.cta.badge', 'Strategic Climate Execution')}</span>
        </div>

        {/* Source Closing Statement */}
        <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.18]">
          {t('about.cta.statement', 'Green Gate Advisory connects strategy, regulation, finance and implementation to help clients make informed decisions and advance credible climate action.')}
        </h2>

        {/* Dual CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-deep-green hover:bg-forest text-white font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-deep-green w-full sm:w-auto"
          >
            <span>{t('about.cta.primaryBtn', 'Request a Consultation')}</span>
            <ArrowRight className="w-4 h-4 ml-1 text-white" />
          </Link>

          <Link
            to={getLocalizedPath('/services')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-sage/40 text-forest font-semibold text-sm tracking-wide uppercase border border-sand-border shadow-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest w-full sm:w-auto"
          >
            <span>{t('about.cta.secondaryBtn', 'Explore Our Services')}</span>
          </Link>
        </div>

        {/* Regulatory & Institutional Independence Notice */}
        <p className="text-xs text-charcoal/70 font-sans max-w-2xl mx-auto leading-relaxed pt-4 border-t border-sand-border/60">
          {t('about.cta.disclaimer')}
        </p>

      </div>
    </section>
  );
}
