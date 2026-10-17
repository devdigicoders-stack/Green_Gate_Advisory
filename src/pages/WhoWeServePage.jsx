import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2, Building2, Factory, Leaf, LineChart, Globe } from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import ClosingCTA from '../components/sections/ClosingCTA';
import { useLocale } from '../hooks/useLocale';

const CLIENT_ICONS = [
  Building2,
  Factory,
  Leaf,
  LineChart,
  Globe
];

export default function WhoWeServePage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawClients = t('whoWeServe.clients', { returnObjects: true }) || [];
  const clientsList = Array.isArray(rawClients) ? rawClients : [];

  return (
    <div className="space-y-12 sm:space-y-16 py-12 sm:py-16">
      <MetaTags 
        title={t('meta.whoWeServe.title', 'Who We Serve | Green Gate Advisory')}
        description={t('meta.whoWeServe.description', 'Tailored climate advisory for governments, exporters, companies, project developers, investors, NGOs and international organisations.')}
      />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
            {t('whoWeServe.badge', 'Audiences & Stakeholders')}
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-forest tracking-tight">
            {t('whoWeServe.title', 'Who We Serve')}
          </h1>
          <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans">
            {t('whoWeServe.lead')}
          </p>
        </div>
      </section>

      {/* 2. CLIENT SEGMENTS CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {clientsList.map((client, idx) => {
            const IconComponent = CLIENT_ICONS[idx % CLIENT_ICONS.length] || Building2;
            const capabilities = Array.isArray(client.capabilities) ? client.capabilities : [];

            return (
              <div 
                key={client.id || idx}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-border shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center border border-forest/10">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-dark bg-gold/15 px-2.5 py-1 rounded">
                      SEGMENT 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-forest leading-snug">
                    {client.title}
                  </h2>

                  <div className="text-xs font-bold uppercase tracking-wider text-deep-green">
                    {client.focus}
                  </div>

                  <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
                    {client.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={getLocalizedPath('/contact')}
                      className="btn-primary"
                    >
                      <span>{t('whoWeServe.cta', 'Tell Us About Your Organisation’s Priorities')}</span>
                      <ArrowRight className="w-4 h-4 text-gold-light" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-sage p-6 sm:p-8 rounded-2xl border border-sand-border space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest font-sans">
                    Core Advisory Capabilities
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm text-charcoal">
                    {capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
