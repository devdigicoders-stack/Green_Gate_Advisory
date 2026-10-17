import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Briefcase, 
  Ship, 
  Sprout, 
  Landmark, 
  Globe2, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const CLIENT_ICONS = [
  Building2,
  Briefcase,
  Ship,
  Sprout,
  Landmark,
  Globe2,
  GraduationCap
];

export default function WhoWeWorkWith() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawGroups = t('about.whoWeWorkWith.groups', { returnObjects: true }) || [];
  const groups = Array.isArray(rawGroups) ? rawGroups : [];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('about.whoWeWorkWith.eyebrow', 'Client Ecosystem')}
          title={t('about.whoWeWorkWith.heading', 'Who We Work With')}
          subtitle={t('about.whoWeWorkWith.intro')}
        />

        {/* 7 Source Client Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groups.map((group, idx) => {
            const Icon = CLIENT_ICONS[idx % CLIENT_ICONS.length];
            return (
              <div
                key={idx}
                className="rounded-3xl bg-sage/40 border border-sand-border p-6 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-sand-border/80 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-base text-forest group-hover:text-deep-green transition-colors">
                    {group.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    {group.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Dedicated Who We Serve Page */}
        <div className="text-center pt-4">
          <Link
            to={getLocalizedPath('/who-we-serve')}
            className="btn-secondary px-8"
          >
            <span>{t('about.whoWeWorkWith.cta', 'Learn More About Who We Serve')}</span>
            <ArrowRight className="w-4 h-4 ml-1 text-forest" />
          </Link>
        </div>

      </div>
    </section>
  );
}
