import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  Scale,
  ShieldCheck,
  Landmark,
  Trees,
  FileText,
  BarChart3
} from 'lucide-react';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';

const SERVICE_ICONS = {
  Sparkles,
  Scale,
  ShieldCheck,
  Landmark,
  Trees,
  FileText,
  BarChart3
};

export default function Header() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'latest' | 'about' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const headerRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const currentPath = location.pathname;
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes menus
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setActiveDropdown(null);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll on mobile drawer open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Dropdown hover & click handlers with safety debounce
  const handleMouseEnter = (name) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleDropdownClick = (name, e) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Determine light/white navbar state
  const isLightNavbar = isScrolled || activeDropdown !== null;

  return (
    <>
      {/* Floating Pill Outer Header Wrapper */}
      <header 
        ref={headerRef}
        onMouseLeave={handleMouseLeave}
        className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-none transition-all duration-300"
      >
        {/* Floating Pill / Expanding Card Element */}
        <div 
          className={`pointer-events-auto w-full transition-all duration-300 ease-out border ${
            isLightNavbar
              ? 'bg-white/95 backdrop-blur-md text-forest-dark border-sand-border/80 shadow-2xl'
              : 'bg-black/35 backdrop-blur-md text-white border-white/20 shadow-xl'
          } ${
            activeDropdown 
              ? 'rounded-2xl sm:rounded-3xl' 
              : 'rounded-2xl sm:rounded-full'
          }`}
        >
          {/* Main Top Navigation Row */}
          <div className="flex items-center justify-between px-4 sm:px-7 py-3 sm:py-3.5">
            {/* Left: Brand Logo */}
            <div className="flex-shrink-0">
              <Logo 
                variant={isLightNavbar ? 'default' : 'light'} 
                imgClassName="h-8 sm:h-9 w-auto" 
              />
            </div>

            {/* Center: Desktop Navigation Links (EcoSecurities Style) */}
            <nav 
              className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0 text-sm font-medium"
              aria-label="Main Navigation"
            >
              {/* 1. Our services Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <button
                  type="button"
                  onClick={(e) => handleDropdownClick('services', e)}
                  aria-expanded={activeDropdown === 'services'}
                  className={`inline-flex items-center gap-1.5 transition-colors duration-150 py-1 ${
                    activeDropdown === 'services'
                      ? 'underline decoration-2 underline-offset-8 font-semibold text-forest-dark'
                      : isLightNavbar
                        ? 'text-forest-dark/90 hover:text-forest'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{t('navigation.ourServices', 'Our services')}</span>
                  <ChevronDown 
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              </div>

              {/* 2. Sectors (Our Portfolio style link) */}
              <NavLink
                to={getLocalizedPath('/sectors')}
                className={({ isActive }) =>
                  `transition-colors duration-150 py-1 ${
                    isActive
                      ? 'underline decoration-2 underline-offset-8 font-semibold'
                      : isLightNavbar
                        ? 'text-forest-dark/90 hover:text-forest'
                        : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {t('navigation.sectors', 'Sectors')}
              </NavLink>

              {/* 3. Who We Serve */}
              <NavLink
                to={getLocalizedPath('/who-we-serve')}
                className={({ isActive }) =>
                  `transition-colors duration-150 py-1 ${
                    isActive
                      ? 'underline decoration-2 underline-offset-8 font-semibold'
                      : isLightNavbar
                        ? 'text-forest-dark/90 hover:text-forest'
                        : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {t('navigation.whoWeServe', 'Who We Serve')}
              </NavLink>

              {/* 4. Latest Dropdown Trigger (Exact match to Image 2) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('latest')}
              >
                <button
                  type="button"
                  onClick={(e) => handleDropdownClick('latest', e)}
                  aria-expanded={activeDropdown === 'latest'}
                  className={`inline-flex items-center gap-1.5 transition-colors duration-150 py-1 ${
                    activeDropdown === 'latest'
                      ? 'underline decoration-2 underline-offset-8 font-semibold text-forest-dark'
                      : isLightNavbar
                        ? 'text-forest-dark/90 hover:text-forest'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{t('navigation.latest', 'Latest')}</span>
                  <ChevronDown 
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'latest' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              </div>

              {/* 5. About Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
              >
                <button
                  type="button"
                  onClick={(e) => handleDropdownClick('about', e)}
                  aria-expanded={activeDropdown === 'about'}
                  className={`inline-flex items-center gap-1.5 transition-colors duration-150 py-1 ${
                    activeDropdown === 'about'
                      ? 'underline decoration-2 underline-offset-8 font-semibold text-forest-dark'
                      : isLightNavbar
                        ? 'text-forest-dark/90 hover:text-forest'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{t('navigation.about', 'About')}</span>
                  <ChevronDown 
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'about' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              </div>

              {/* 6. Contact Direct Link */}
              <NavLink
                to={getLocalizedPath('/contact')}
                className={({ isActive }) =>
                  `transition-colors duration-150 py-1 ${
                    isActive
                      ? 'underline decoration-2 underline-offset-8 font-semibold'
                      : isLightNavbar
                        ? 'text-forest-dark/90 hover:text-forest'
                        : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {t('navigation.contact', 'Contact')}
              </NavLink>
            </nav>

            {/* Right: EcoSecurities Flag Language Selector Box & Mobile Trigger */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <LanguageSwitcher isDark={isLightNavbar} />

              {/* Mobile Menu Hamburger Button */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-1.5 rounded-lg lg:hidden transition-colors ${
                  isLightNavbar
                    ? 'text-forest-dark hover:bg-forest/5'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Integrated Expanding Dropdown Area (Image 2 style) */}
          {activeDropdown && (
            <div 
              onMouseEnter={() => {
                if (leaveTimerRef.current) {
                  clearTimeout(leaveTimerRef.current);
                  leaveTimerRef.current = null;
                }
              }}
              className="px-6 sm:px-10 pt-4 pb-8 border-t border-sand-border/40 text-forest-dark animate-in fade-in duration-200"
            >
              {/* SUBMENU 1: Our Services */}
              {activeDropdown === 'services' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2.5 max-w-4xl">
                    {SERVICES_LIST.map((srv) => {
                      const IconComponent = SERVICE_ICONS[srv.iconName] || Sparkles;
                      return (
                        <Link
                          key={srv.key}
                          to={getLocalizedPath(`/services/${srv.slug}`)}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-sage/50 transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-medium text-forest-dark group-hover:text-deep-green group-hover:translate-x-0.5 transition-transform">
                            {t(`navigation.servicesMenu.${srv.key}`, srv.slug)}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-sand-border/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gold-dark font-semibold">
                      {t('navigation.allServices', 'All Services Overview')}
                    </span>
                    <Link
                      to={getLocalizedPath('/services')}
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-semibold text-deep-green hover:text-forest inline-flex items-center gap-1 group"
                    >
                      <span>{t('navigation.menu.overview', 'View All Services')}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}

              {/* SUBMENU 2: Latest (Exact match to EcoSecurities Image 2: News, Events, Resources, Consultations) */}
              {activeDropdown === 'latest' && (
                <div className="max-w-xs space-y-2 text-sm">
                  <Link
                    to={getLocalizedPath('/insights')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.news', 'News & Insights')}
                  </Link>
                  <Link
                    to={getLocalizedPath('/training')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.events', 'Events & Workshops')}
                  </Link>
                  <Link
                    to={getLocalizedPath('/insights')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.resources', 'Resources & Briefings')}
                  </Link>
                  <Link
                    to={getLocalizedPath('/contact')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.consultations', 'Consultations')}
                  </Link>
                </div>
              )}

              {/* SUBMENU 3: About */}
              {activeDropdown === 'about' && (
                <div className="max-w-sm space-y-2 text-sm">
                  <Link
                    to={getLocalizedPath('/about-us')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.whoWeAre', 'About Green Gate Advisory')}
                  </Link>
                  <Link
                    to={getLocalizedPath('/about-us')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.purpose', 'Purpose, Mission & Vision')}
                  </Link>
                  <Link
                    to={getLocalizedPath('/about-us')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.approach', 'Our Approach & Methodology')}
                  </Link>
                  <Link
                    to={getLocalizedPath('/about-us')}
                    onClick={() => setActiveDropdown(null)}
                    className="block py-1 text-forest-dark/85 hover:text-forest hover:font-semibold transition-colors"
                  >
                    {t('navigation.menu.whyUs', 'Why Green Gate Advisory')}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-forest-dark/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-5 border-b border-sand-border">
                <Logo variant="default" imgClassName="h-8 w-auto" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-charcoal hover:bg-sage focus:outline-none focus:ring-2 focus:ring-forest"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-6 space-y-1.5 text-base font-medium">
                <Link
                  to={getLocalizedPath('/')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.home', 'Home')}
                </Link>

                <Link
                  to={getLocalizedPath('/services')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.ourServices', 'Our services')}
                </Link>

                <div className="pl-6 py-1 space-y-1 border-l-2 border-gold/40 my-1">
                  {SERVICES_LIST.map((srv) => (
                    <Link
                      key={srv.key}
                      to={getLocalizedPath(`/services/${srv.slug}`)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-charcoal hover:text-forest truncate"
                    >
                      {t(`navigation.servicesMenu.${srv.key}`, srv.slug)}
                    </Link>
                  ))}
                </div>

                <Link
                  to={getLocalizedPath('/sectors')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.sectors', 'Sectors')}
                </Link>

                <Link
                  to={getLocalizedPath('/who-we-serve')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.whoWeServe', 'Who We Serve')}
                </Link>

                <Link
                  to={getLocalizedPath('/insights')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.latest', 'Latest')}
                </Link>

                <Link
                  to={getLocalizedPath('/training')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.training', 'Training')}
                </Link>

                <Link
                  to={getLocalizedPath('/about-us')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.about', 'About')}
                </Link>

                <Link
                  to={getLocalizedPath('/contact')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-forest hover:bg-sage transition-colors"
                >
                  {t('navigation.contact', 'Contact')}
                </Link>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-sand-border space-y-4">
              <Link
                to={getLocalizedPath('/contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-primary rounded-full justify-center py-3 text-xs uppercase tracking-wider font-display flex items-center gap-2"
              >
                <span>{t('navigation.requestConsultation', 'Request Consultation')}</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
              
              <div className="flex items-center justify-between text-xs text-charcoal-muted pt-2">
                <span>{t('common.languageLabel', 'Language')}</span>
                <LanguageSwitcher isDark={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
