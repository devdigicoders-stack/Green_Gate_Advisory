import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, AlertTriangle, Layers, FileCheck } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import ClosingCTA from '../components/sections/ClosingCTA';
import { useLocale } from '../hooks/useLocale';

export default function SectorsPage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawSectors = t('sectors.items', { returnObjects: true }) || [];
  const sectorsList = Array.isArray(rawSectors) ? rawSectors : [];

  return (
    <div className="space-y-12 sm:space-y-16 py-12 sm:py-16">
      <MetaTags 
        title={t('meta.sectors.title', 'Sectors We Support | Green Gate Advisory')}
        description={t('meta.sectors.description', 'Climate, carbon market and environmental advisory for energy, industry, manufacturing, land use, infrastructure and financial sector organisations.')}
      />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
            {t('sectors.badge', 'Industry & Systems')}
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            {t('sectors.title', 'Sectors We Support')}
          </h1>
          <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans">
            {t('sectors.lead')}
          </p>
          <p className="text-xs sm:text-sm font-semibold text-deep-green">
            {t('sectors.subtext')}
          </p>
        </div>
      </section>

      {/* 2. 11 PRIORITY SECTORS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsList.map((sec, idx) => (
            <div 
              key={sec.id || idx}
              className="bg-white rounded-3xl p-7 border border-sand-border shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gold-dark bg-gold/15 px-2.5 py-0.5 rounded">
                    SECTOR {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-lg text-forest leading-snug">
                  {sec.title}
                </h2>

                {/* Challenges */}
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{t('common.challenges', 'Key Challenges')}</span>
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {sec.challenge}
                  </p>
                </div>

                {/* Relevant Services */}
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-deep-green flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-deep-green" />
                    <span>{t('common.ourRole', 'Relevant Services')}</span>
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
                    {sec.services}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-forest" />
                    <span>{t('common.keyDeliverables', 'Typical Deliverables')}</span>
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {sec.deliverables}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-sand-border/70">
                <Link
                  to={getLocalizedPath('/contact')}
                  className="link-editorial text-xs sm:text-sm flex items-center justify-between w-full"
                >
                  <span>{sec.cta || t('common.requestConsultation')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
