import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  ArrowUpRight, 
  ArrowUp, 
  ShieldCheck, 
  Home, 
  Users, 
  Settings, 
  Layers, 
  Users2, 
  FileText, 
  GraduationCap, 
  UserPlus, 
  Sprout 
} from 'lucide-react';
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

  const QUICK_LINKS = [
    { label: t('navigation.home', 'Home'), path: '/', icon: Home },
    { label: t('navigation.about', 'About Us'), path: '/about-us', icon: Users },
    { label: t('navigation.services', 'Services'), path: '/services', icon: Settings },
    { label: t('navigation.sectors', 'Sectors'), path: '/sectors', icon: Layers },
    { label: t('navigation.whoWeServe', 'Who We Serve'), path: '/who-we-serve', icon: Users2 },
    { label: 'Capital & Proposals', path: '/services/climate-finance-advisory', icon: FileText },
    { label: t('navigation.training', 'Training'), path: '/training', icon: GraduationCap },
    { label: 'Join as Expert / Consultant', path: '/contact?type=expert', icon: UserPlus },
    { label: t('navigation.contact', 'Contact'), path: '/contact', icon: Mail },
    { label: t('footer.privacyPolicy', 'Privacy Policy'), path: '/privacy-policy', icon: ShieldCheck, isHighlighted: true },
  ];

  return (
    <footer className="relative bg-[#EEF5EF] text-[#1E2E25] pt-14 pb-10 sm:pt-20 sm:pb-12 border-t border-[#D0E2D5] overflow-hidden font-sans">
      {/* Generated Botanical Background Texture with Soft Mist Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-40 mix-blend-multiply" 
        style={{ backgroundImage: `url('/images/footer-bg.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#F3F8F4]/80 via-[#EEF5EF]/60 to-[#E8F3EB]/85 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Architectural Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 sm:pb-14">
          
          {/* Col 1: Brand & Purpose (5 cols) - Centered on Mobile */}
          <div className="lg:col-span-5 space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex justify-center md:justify-start w-full">
              <Logo variant="default" imgClassName="h-12 sm:h-14 w-auto" />
            </div>
            
            <p className="text-[#38493F] text-sm sm:text-[14.5px] leading-relaxed max-w-md font-normal mx-auto md:mx-0">
              {t('footer.brandTagline', 'Green Gate Advisory is an environmental, climate and carbon market advisory consultancy supporting governments, businesses, exporters, project developers, investors and institutions.')}
            </p>

            {/* Email Card with Green Border and Diagonal Arrow */}
            <div className="pt-1 w-full flex justify-center md:justify-start">
              <a
                href="mailto:contact@greengateadvisory.com"
                className="inline-flex items-center justify-between w-full max-w-md px-5 py-3.5 rounded-none bg-white border border-[#019935] hover:border-[#017A2A] text-[#1F2E26] hover:text-[#019935] shadow-xs hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <Mail className="w-5 h-5 text-[#019935] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold tracking-tight">contact@greengateadvisory.com</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#019935] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="pt-1 flex items-center justify-center md:justify-start gap-3 w-full">
              <span className="text-sm text-[#46594E] font-medium">Language / Idioma:</span>
              <LanguageSwitcher isDark={true} />
            </div>

            {/* Regulatory Safeguard Notice Box */}
            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-none bg-[#E8F6ED]/90 border border-[#CDE8D5] text-xs sm:text-[13px] text-[#3D5245] leading-relaxed shadow-2xs text-left max-w-md mx-auto md:mx-0">
              <ShieldCheck className="w-5 h-5 text-[#019935] flex-shrink-0 mt-0.5" />
              <span>
                {t('footer.confidentiality', 'Case studies and specific client references are published only following formal verification and client consent.')}
              </span>
            </div>
          </div>

          {/* Col 2: Key Services (4 cols) - Centered on Mobile */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="space-y-1.5 pb-1 flex flex-col items-center md:items-start w-full">
              <h3 className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#019935]">
                {t('footer.keyServices', 'KEY SERVICES')}
              </h3>
              <div className="w-8 h-0.5 bg-[#019935] rounded-none mx-auto md:mx-0" />
            </div>

            <ul className="space-y-3 font-sans w-full flex flex-col items-center md:items-start">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.key}>
                  <Link
                    to={getLocalizedPath(`/services/${srv.slug}`)}
                    className="text-[#2A3B31] hover:text-[#019935] transition-colors duration-150 inline-flex items-center gap-3 group py-0.5 text-sm sm:text-[14.5px]"
                  >
                    <span className="w-6 h-6 rounded-none bg-[#D8F3E3] text-[#019935] text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#019935] group-hover:text-white transition-colors">
                      {srv.number}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-150 font-medium text-left">
                      {t(`navigation.servicesMenu.${srv.key}`, srv.slug)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Governance (3 cols) - Centered on Mobile */}
          <div className="lg:col-span-3 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="space-y-1.5 pb-1 flex flex-col items-center md:items-start w-full">
              <h3 className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#019935]">
                {t('footer.quickLinks', 'QUICK LINKS')}
              </h3>
              <div className="w-9 h-0.5 bg-[#019935] rounded-none mx-auto md:mx-0" />
            </div>

            <ul className="space-y-2.5 font-sans w-full flex flex-col items-center md:items-start">
              {QUICK_LINKS.map((item) => {
                const Icon = item.icon;
                const isHighlight = item.isHighlighted;
                return (
                  <li key={item.label}>
                    <Link
                      to={getLocalizedPath(item.path)}
                      className={`inline-flex items-center gap-3 py-0.5 text-sm sm:text-[14.5px] transition-colors group ${
                        isHighlight 
                          ? 'text-[#019935] font-bold hover:text-[#017A2A]' 
                          : 'text-[#2A3B31] hover:text-[#019935] font-medium'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-110 ${
                        isHighlight ? 'text-[#019935]' : 'text-[#4A5D52]'
                      }`} />
                      <span className="group-hover:translate-x-0.5 transition-transform text-left">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer Banner with Sprout Icon - Centered on Mobile */}
        <div className="pt-6 pb-6 border-t border-[#D5E6DA] flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 text-xs sm:text-[13px] text-[#475C50] leading-relaxed font-sans">
          <Sprout className="w-6 h-6 text-[#019935] flex-shrink-0" />
          <div className="border-t sm:border-t-0 sm:border-l border-[#C2D9C9] pt-2 sm:pt-0 sm:pl-4">
            <p>{t('footer.disclaimer', 'Green Gate Advisory provides independent technical, regulatory and project advisory. We do not provide guaranteed funding outcomes or carbon credit issuances, which remain subject to independent registries and funding bodies.')}</p>
          </div>
        </div>

        {/* Bottom Sub-bar - Centered on Mobile */}
        <div className="pt-6 border-t border-[#D5E6DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#55695D] font-sans text-center sm:text-left">
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

          <div className="flex items-center justify-center gap-4 font-medium">
            <Link to={getLocalizedPath('/privacy-policy')} className="text-[#55695D] hover:text-[#019935] transition-colors">
              {t('footer.privacyPolicy', 'Privacy Policy')}
            </Link>
            <span className="text-[#8BA092]">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#1E2E25] hover:text-[#019935] font-semibold transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#019935]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
