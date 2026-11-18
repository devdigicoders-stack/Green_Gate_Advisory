import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../hooks/useLocale';
import MetaTags from '../components/seo/MetaTags';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section className="relative min-h-[72vh] flex items-center justify-center bg-white font-['Poppins',sans-serif] px-4 py-24 sm:py-32 overflow-hidden">
      <MetaTags
        title={t('common.notFound.metaTitle', 'Page Not Found | Green Gate Advisory')}
        description={t('common.notFound.metaDescription', 'The requested page could not be located.')}
        noIndex={true}
      />

      {/* Subtle GCC Concentric Mint Arc Watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-24 -bottom-24 w-[420px] sm:w-[540px] h-auto opacity-[0.14]"
      >
        {Array.from({ length: 14 }).map((_, idx) => (
          <circle
            key={idx}
            cx="400"
            cy="400"
            r={60 + idx * 24}
            stroke="#019934"
            strokeWidth="1.2"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center space-y-6">
        <span className="inline-block w-[70px] h-[2px] bg-[#019934]" aria-hidden="true" />

        <div className="font-['Poppins',sans-serif] font-light text-[72px] sm:text-[92px] leading-none text-[#019934] tracking-[-0.02em]">
          404
        </div>

        <h1 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[36px] text-[#1A5C3B] leading-snug">
          {t('common.notFound.title', 'Page Not Found')}
        </h1>

        <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[16px] text-[#555555] leading-[1.7] max-w-md">
          {t('common.notFound.description', 'The requested route does not exist or has been relocated. Explore our advisory services or return to the homepage.')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
          <Link
            to={getLocalizedPath('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200"
          >
            <Home className="w-4 h-4 text-white" />
            <span>{t('common.notFound.returnHome', 'Return Home')}</span>
          </Link>
          <Link
            to={getLocalizedPath('/services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[5px] bg-transparent border border-[#019934] text-[#019934] hover:bg-[#019934] hover:text-white font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200"
          >
            <span>{t('common.notFound.exploreServices', 'Explore Services')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
