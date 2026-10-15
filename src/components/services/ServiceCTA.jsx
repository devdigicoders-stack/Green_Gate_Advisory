import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function ServiceCTA({ 
  heading, 
  text, 
  primaryBtnText, 
  disclaimer 
}) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-forest-dark text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-deep-green/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-gold-light border border-white/15 backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>Technical Engagement</span>
        </div>

        {/* Source CTA Heading */}
        <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
          {heading}
        </h2>

        {/* Source CTA Supporting Text */}
        {text && (
          <p className="text-base sm:text-lg text-sand-surface/90 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            {text}
          </p>
        )}

        {/* Dual CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold w-full sm:w-auto"
          >
            <span>{primaryBtnText || t('common.requestConsultation', 'Request a Consultation')}</span>
            <ArrowRight className="w-4 h-4 ml-1 text-forest-dark" />
          </Link>

          <Link
            to={getLocalizedPath('/services')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase border border-white/25 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
          >
            <span>{t('navigation.services', 'All Advisory Services')}</span>
          </Link>
        </div>

        {/* Regulatory & Institutional Independence Disclaimer */}
        {disclaimer && (
          <p className="text-xs text-sand-surface/60 font-sans max-w-2xl mx-auto leading-relaxed pt-4 border-t border-white/10">
            {disclaimer}
          </p>
        )}

      </div>
    </section>
  );
}
