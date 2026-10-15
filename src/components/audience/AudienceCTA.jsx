import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

export default function AudienceCTA() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative overflow-hidden bg-forest-dark text-white py-20 sm:py-28">
      {/* Background radial glow & gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-dark opacity-90" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-deep-green/30 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-gold-light border border-white/15 backdrop-blur-sm">
          <span>{t('audience.cta.eyebrow', 'Institutional Engagement')}</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] max-w-3xl mx-auto">
          {t('audience.cta.heading', "Tell Us About Your Organisation's Priorities")}
        </h2>

        <p className="text-base sm:text-xl text-sand-surface/90 max-w-2xl mx-auto font-sans font-light leading-relaxed">
          {t('audience.cta.description', 'Whether you are assessing CBAM exposure, structuring a carbon project, preparing a funding proposal or designing a climate policy, our team is ready to discuss the appropriate scope of support.')}
        </p>

        {/* Buttons: Request a Consultation & Explore Advisory Services */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={getLocalizedPath('/contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <span>{t('audience.cta.primaryBtn', 'Request a Consultation')}</span>
            <ArrowRight className="w-4 h-4 text-forest-dark" />
          </Link>

          <Link
            to={getLocalizedPath('/services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase border border-white/25 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>{t('audience.cta.secondaryBtn', 'Explore Advisory Services')}</span>
          </Link>
        </div>

        {/* Professional Caution Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-sand-surface/70 font-sans max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            {t('audience.cta.disclaimer', 'Independent technical, regulatory and finance advisory. Engagement deliverables are structured around verified client priorities and applicable official rules. We do not guarantee funding approvals or carbon credit issuances.')}
          </span>
        </div>

      </div>
    </section>
  );
}
