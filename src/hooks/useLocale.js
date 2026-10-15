import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const SUPPORTED_LOCALES = ['en', 'es'];
export const DEFAULT_LOCALE = 'en';

export function useLocale() {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Validate locale or fallback to default
  const currentLocale = SUPPORTED_LOCALES.includes(lang) ? lang : DEFAULT_LOCALE;

  useEffect(() => {
    if (i18n.language !== currentLocale) {
      i18n.changeLanguage(currentLocale);
      document.documentElement.lang = currentLocale;
    }
  }, [currentLocale, i18n]);

  /**
   * Prepends current or target locale to a relative path
   * @param {string} path - e.g. '/about-us' or 'services/cbam-advisory'
   * @param {string} [targetLang] - optional override locale
   */
  const getLocalizedPath = (path, targetLang = currentLocale) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // Strip leading /en or /es if already present
    const pathWithoutLang = cleanPath.replace(/^\/(en|es)(\/|$)/, '/');
    const normalized = pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`;
    return `/${targetLang}${normalized === '/' ? '' : normalized}`;
  };

  /**
   * Switches language while preserving current page path
   */
  const switchLanguage = (newLang) => {
    if (!SUPPORTED_LOCALES.includes(newLang) || newLang === currentLocale) return;
    const currentPathWithoutLang = location.pathname.replace(/^\/(en|es)(\/|$)/, '/');
    const newPath = `/${newLang}${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}${location.search}${location.hash}`;
    navigate(newPath);
  };

  return {
    locale: currentLocale,
    switchLanguage,
    getLocalizedPath,
    isSpanish: currentLocale === 'es',
    isEnglish: currentLocale === 'en',
  };
}
