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
    <footer className="bg-forest-dark text-sand-surface pt-20 pb-12 border-t border-forest-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Architectural Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" imgClassName="h-12 sm:h-15 md:h-16 w-auto" />
            <p className="text-sand-surface/80 text-sm leading-relaxed max-w-md font-sans pt-2">
              {t('footer.brandTagline', 'Green Gate Advisory connects climate policy, carbon markets, and project finance into practical, measurable action for public and private sector organisations.')}
            </p>
            
            <div className="pt-2">
              <a 
                href="mailto:contact@greengateadvisory.com"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sand-surface hover:text-gold-light hover:border-gold/40 text-xs font-display font-semibold transition-all duration-200 group"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span>contact@greengateadvisory.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sand-surface/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-sand-surface/70 font-display">Language / Idioma:</span>
              <LanguageSwitcher />
            </div>

            {/* Regulatory Safeguard Notice */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-black/25 border border-white/5 text-xs text-sand-surface/70 leading-relaxed font-sans">
              <ShieldAlert className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>
                {t('footer.confidentiality', 'Case studies and specific client references are published only following formal verification and client consent.')}
              </span>
            </div>
          </div>

          {/* Col 2: Key Services (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
              {t('footer.keyServices', 'Advisory Practices')}
            </h3>
            <ul className="space-y-2 text-sm font-display">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.key}>
                  <Link
                    to={getLocalizedPath(`/services/${srv.slug}`)}
                    className="text-sand-surface/75 hover:text-white transition-colors duration-150 inline-flex items-center gap-2.5 group py-0.5"
                  >
                    <span className="text-gold/60 text-xs font-mono">{srv.number}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-150 text-[13px]">
                      {t(`navigation.servicesMenu.${srv.key}`, srv.slug)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Governance (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
              {t('footer.quickLinks', 'Overview & Navigation')}
            </h3>
            <ul className="space-y-2 text-[13px] font-display">
              <li>
                <Link to={getLocalizedPath('/')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.home', 'Home')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/about-us')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.about', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/services')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.services', 'Services Overview')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/sectors')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.sectors', 'Sectors We Support')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/who-we-serve')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.whoWeServe', 'Who We Serve')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/insights')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.insights', 'Insights & Resources')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/training')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.training', 'Training')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/contact')} className="text-sand-surface/75 hover:text-white transition-colors">
                  {t('navigation.contact', 'Contact Us')}
                </Link>
              </li>
              <li className="pt-2">
                <Link to={getLocalizedPath('/privacy-policy')} className="text-gold-light/90 hover:text-gold transition-colors font-medium">
                  {t('footer.privacyPolicy', 'Privacy Policy')}
                </Link>
              </li>
            </ul>
          </div>

        </div>

         

        {/* Regulatory Disclaimer Banner */}
        <div className="py-6 border-b border-white/10 text-xs text-sand-surface/60 leading-relaxed font-sans">
          <p>{t('footer.disclaimer', 'Green Gate Advisory provides independent technical, regulatory and project advisory. We do not provide guaranteed funding outcomes or carbon credit issuances, which remain subject to independent registries and funding bodies.')}</p>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-surface/60 font-sans">
          <div>
            © {new Date().getFullYear()} {t('footer.copyright', 'All rights reserved. Green Gate Advisory.')}
          </div>

          <div className="text-center">
            Designed and Developed by{' '}
            <a
              href="https://www.worknestconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold transition-colors font-medium underline underline-offset-4"
            >
              #TeamWorknestConnect
            </a>
          </div>

          <div className="flex items-center gap-6 font-display">
            <Link to={getLocalizedPath('/privacy-policy')} className="hover:text-sand-surface transition-colors">
              {t('footer.privacyPolicy', 'Privacy Policy')}
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
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
