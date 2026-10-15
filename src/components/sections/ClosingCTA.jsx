import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function ClosingCTA({
  headline,
  description,
  primaryBtnText,
  secondaryBtnText
}) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const finalHeadline = headline || t('home.closingCta.headline', 'Ready to Move from Climate Complexity to Practical Action?');
  const finalDesc = description || t('home.closingCta.description', 'Contact Green Gate Advisory to discuss your carbon market, CBAM, ETS, climate finance, nature-based solutions or corporate sustainability priorities.');
  const primaryText = primaryBtnText || t('common.requestConsultation', 'Request a Consultation');
  const secondaryText = secondaryBtnText || t('common.contactOurTeam', 'Contact Our Team');

  return (
    <section className="relative overflow-hidden py-20 bg-forest text-white">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-deep-green/40 via-forest to-forest-dark -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-gold-light border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
          <span>{t('home.hero.badge', 'Climate & Environmental Advisory')}</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-3xl mx-auto">
          {finalHeadline}
        </h2>

        <p className="text-base sm:text-xl text-sand-surface/85 max-w-2xl mx-auto leading-relaxed">
          {finalDesc}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto btn-gold px-8 py-4 text-base"
          >
            <span>{primaryText}</span>
            <ArrowRight className="w-4 h-4 text-forest-dark" />
          </Link>

          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-gold-light" />
            <span>{secondaryText}</span>
          </Link>
        </div>

        {/* Disclaimer Notice */}
        <p className="text-xs text-sand-surface/60 max-w-xl mx-auto pt-4 border-t border-white/10">
          {t('common.disclaimer', 'Advisory notice: Funding outcomes, carbon credit issuances, and validation approvals depend on independent secretariats and statutory standards.')}
        </p>
      </div>
    </section>
  );
}
