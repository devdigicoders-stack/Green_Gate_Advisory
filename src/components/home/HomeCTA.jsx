import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, ShieldAlert } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function HomeCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden py-24 bg-forest text-white">
      {/* Background Radial Glow & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-deep-green/50 via-forest to-forest-dark -z-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-deep-green/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-gold-light border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
          <span>{t('home.cta.eyebrow', 'Advisory Engagement')}</span>
        </div>

        {/* Closing Headline directly from PDF */}
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] max-w-3xl mx-auto">
          {t('home.cta.headline', 'Ready to move from climate complexity to practical action?')}
        </h2>

        {/* Supporting Sentence directly from PDF */}
        <p className="text-base sm:text-xl text-sand-surface/90 max-w-2xl mx-auto leading-relaxed font-sans font-light">
          {t('home.cta.description', 'Contact Green Gate Advisory to discuss your carbon market, CBAM, ETS, climate finance, nature-based solutions or corporate sustainability priorities.')}
        </p>

        {/* Action Buttons: Request a Consultation | Contact Our Team */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <span>{t('home.cta.btnPrimary', 'Request a Consultation')}</span>
            <ArrowRight className="w-4 h-4 text-forest-dark" />
          </Link>

          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase border border-white/25 backdrop-blur-xs transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-gold-light" />
            <span>{t('home.cta.btnSecondary', 'Contact Our Team')}</span>
          </Link>
        </div>

        {/* Regulatory Disclaimer Notice from PDF Page 14 */}
        <div className="pt-6 border-t border-white/10 max-w-2xl mx-auto text-xs text-sand-surface/60 leading-relaxed font-sans flex items-start justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-gold-light flex-shrink-0 mt-0.5" />
          <p>{t('home.cta.disclaimer')}</p>
        </div>

      </div>
    </section>
  );
}
