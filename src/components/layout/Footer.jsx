import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Mail, ShieldAlert, ArrowUp } from 'lucide-react';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';

export default function Footer() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EEF2EE] text-[#2C332F] pt-20 pb-12 border-t-2 border-[#019935]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Architectural Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#D8DFD8]">
          
          {/* Col 1: Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="default" imgClassName="h-12 sm:h-15 md:h-16 w-auto" />
            <p className="text-[#4A5550] text-[15px] sm:text-base leading-relaxed max-w-md font-sans pt-2">
              {t('footer.brandTagline', 'Green Gate Advisory connects climate policy, carbon markets, and project finance into practical, measurable action for public and private sector organisations.')}
            </p>
            
            <div className="pt-2">
              <a 
                href="mailto:contact@greengateadvisory.com"
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white border border-[#D0D9D0] text-[#1E2522] hover:text-[#019935] hover:border-[#019935] text-sm font-display font-semibold transition-all duration-200 shadow-xs group"
              >
                <Mail className="w-4 h-4 text-[#019935]" />
                <span className="text-sm font-medium">contact@greengateadvisory.com</span>
                <ArrowUpRight className="w-4 h-4 text-[#738078] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-sm text-[#4A5550] font-display font-medium">Language / Idioma:</span>
              <LanguageSwitcher isDark={true} />
            </div>

            {/* Regulatory Safeguard Notice */}
            <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-[#D0D9D0] text-xs sm:text-sm text-[#4A5550] leading-relaxed font-sans shadow-xs">
              <ShieldAlert className="w-5 h-5 text-[#019935] flex-shrink-0 mt-0.5" />
              <span>
                {t('footer.confidentiality', 'Case studies and specific client references are published only following formal verification and client consent.')}
              </span>
            </div>
          </div>

          {/* Col 2: Key Services (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-widest text-[#019935]">
              {t('footer.keyServices', 'Advisory Practices')}
            </h3>
            <ul className="space-y-3 font-display">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.key}>
                  <Link
                    to={getLocalizedPath(`/services/${srv.slug}`)}
                    className="text-[#4A5550] hover:text-[#019935] transition-colors duration-150 inline-flex items-center gap-2.5 group py-0.5"
                  >
                    <span className="text-[#019935] text-xs sm:text-[13px] font-mono font-bold">{srv.number}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-150 text-sm sm:text-[15px] font-medium">
                      {t(`navigation.servicesMenu.${srv.key}`, srv.slug)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Governance (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-widest text-[#019935]">
              {t('footer.quickLinks', 'Quick Links')}
            </h3>
            <ul className="space-y-3 font-display">
              <li>
                <Link to={getLocalizedPath('/')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('navigation.home', 'Home')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/about-us')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('navigation.about', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/services')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('navigation.services', 'Our Services')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/sectors')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('navigation.sectors', 'Sectors We Support')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/who-we-serve')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('navigation.whoWeServe', 'Who We Serve')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/services/climate-finance-advisory')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('home.climateFinance.eyebrow', 'Climate Finance')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/training')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('navigation.training', 'Training')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/contact?type=expert')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  Join as Expert / Consultant
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/contact')} className="text-[#4A5550] hover:text-[#019935] text-sm sm:text-[15px] font-medium transition-colors">
                  {t('navigation.contact', 'Contact Us')}
                </Link>
              </li>
              <li className="pt-2">
                <Link to={getLocalizedPath('/privacy-policy')} className="text-[#019935] hover:text-[#017A2A] transition-colors font-semibold text-sm sm:text-[15px]">
                  {t('footer.privacyPolicy', 'Privacy Policy')}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="py-6 border-b border-[#D8DFD8] text-xs sm:text-sm text-[#5C6661] leading-relaxed font-sans">
          <p>{t('footer.disclaimer', 'Green Gate Advisory provides independent technical, regulatory and project advisory. We do not provide guaranteed funding outcomes or carbon credit issuances, which remain subject to independent registries and funding bodies.')}</p>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#5C6661] font-sans">
          <div>
            © {new Date().getFullYear()} {t('footer.copyright', 'All rights reserved. Green Gate Advisory.')}
          </div>

          <div className="text-center">
            Designed and Developed by{' '}
            <a
              href="https://www.worknestconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#019935] hover:text-[#017A2A] transition-colors font-semibold underline underline-offset-4"
            >
              #TeamWorknestConnect
            </a>
          </div>

          <div className="flex items-center gap-6 font-display font-medium">
            <Link to={getLocalizedPath('/privacy-policy')} className="text-[#5C6661] hover:text-[#019935] transition-colors">
              {t('footer.privacyPolicy', 'Privacy Policy')}
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#5C6661] hover:text-[#019935] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
