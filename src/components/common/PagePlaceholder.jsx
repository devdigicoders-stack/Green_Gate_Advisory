import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft, Compass, CheckCircle2 } from 'lucide-react';
import MetaTags from '../seo/MetaTags';
import { useLocale } from '../../hooks/useLocale';

export default function PagePlaceholder({
  metaTitle,
  metaDescription,
  badge,
  title,
  description,
  bullets = [],
  ctaText,
  serviceNumber = null
}) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <div className="py-16 sm:py-24">
      <MetaTags title={metaTitle || title} description={metaDescription || description} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted" aria-label="Breadcrumb">
          <Link to={getLocalizedPath('/')} className="hover:text-forest transition-colors">
            {t('navigation.home', 'Home')}
          </Link>
          <span>/</span>
          <span className="text-forest font-semibold truncate max-w-sm">
            {title}
          </span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-sand-border shadow-subtle space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {serviceNumber && (
                <span className="text-xs font-mono font-bold text-gold-dark bg-gold/15 px-2.5 py-1 rounded">
                  PRACTICE {serviceNumber}
                </span>
              )}
              <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
                {badge || 'Green Gate Advisory'}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans max-w-3xl">
              {description}
            </p>
          </div>

          {/* Source-aligned key pillars / focus bullets */}
          {bullets.length > 0 && (
            <div className="pt-6 border-t border-sand-border/70 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-forest font-sans">
                Core Advisory Scope & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal font-medium">
                    <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link to={getLocalizedPath('/contact')} className="btn-primary">
              <span>{ctaText || t('common.requestConsultation', 'Request a Consultation')}</span>
              <ArrowRight className="w-4 h-4 text-gold-light" />
            </Link>
            <Link to={getLocalizedPath('/')} className="btn-secondary">
              <ArrowLeft className="w-4 h-4 text-forest" />
              <span>{t('common.backToHome', 'Return to Home')}</span>
            </Link>
          </div>

          {/* Phase 3 Notice */}
          <div className="p-4 rounded-xl bg-sage border border-sand-border text-xs text-charcoal-muted flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-deep-green" />
              <span>Foundation & routing active. Full interactive sections scheduled for Phase 3 page-by-page build.</span>
            </span>
            <span className="font-mono text-[10px] text-forest font-bold bg-white px-2 py-0.5 rounded border border-sand-border">
              PHASE 2 READY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
