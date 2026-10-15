import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import MetaTags from '../components/seo/MetaTags';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-28 pb-20 sm:pt-36">
      <MetaTags 
        title={t('common.notFound.metaTitle', 'Page Not Found | Green Gate Advisory')} 
        description={t('common.notFound.metaDescription', 'The requested page could not be located.')} 
        noIndex={true}
      />
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-forest/5 text-forest flex items-center justify-center mx-auto font-mono text-2xl font-bold border border-forest/10">
          404
        </div>
        <h1 className="font-heading font-extrabold text-3xl text-forest">
          {t('common.notFound.title', 'Page Not Found')}
        </h1>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
          {t('common.notFound.description', 'The requested route does not exist or has been relocated. Explore our advisory services or return to the homepage.')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link to={getLocalizedPath('/')} className="btn-primary w-full sm:w-auto">
            <Home className="w-4 h-4 mr-1 text-gold-light" />
            <span>{t('common.notFound.returnHome', 'Return Home')}</span>
          </Link>
          <Link to={getLocalizedPath('/services')} className="btn-secondary w-full sm:w-auto">
            <span>{t('common.notFound.exploreServices', 'Explore Services')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
