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
  BarChart3,
  Newspaper,
  Calendar,
  BookOpen,
  MessageSquare,
  Building2,
  Target,
  Layers,
  Award
} from 'lucide-react';
import Logo from '../common/Logo';
import LanguageSwitcher, { UkFlag, SpainFlag } from '../common/LanguageSwitcher';
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

const SERVICE_TITLES = {
  carbonMarket: 'Carbon Market Advisory',
  etsCarbonPricing: 'ETS, Carbon Pricing & Article 6',
  ets: 'ETS, Carbon Pricing & Article 6',
  cbam: 'CBAM Advisory',
  climateFinance: 'Climate Finance Advisory',
  natureBased: 'Nature-Based Solutions',
  climatePolicy: 'Environmental & Climate Policy',
  corporateClimate: 'Corporate Climate, GHG Accounting & ESG'
};

const SERVICE_DESCRIPTIONS = {
  carbonMarket: 'Carbon crediting, project certification & Article 6 transfer strategy',
  etsCarbonPricing: 'Cap-and-trade compliance, emissions allowances & carbon tax readiness',
  cbam: 'EU CBAM exposure, embedded emissions calculations & reporting',
  climateFinance: 'Bankable climate proposal design & multilateral concessional capital',
  natureBased: 'High-integrity AFOLU, jurisdictional forestry & blue carbon assets',
  climatePolicy: 'National regulatory architecture, NDC alignment & policy design',
  corporateClimate: 'Scope 1-3 GHG accounting, SBTi net-zero roadmaps & ESG disclosure'
};

export default function Header() {
  const { t } = useTranslation();
  const { locale, switchLanguage, getLocalizedPath } = useLocale();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'latest' | 'about' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null); // 'services' | 'latest' | 'about' | null
  
  const headerRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const lastScrollYRef = useRef(0);

  // Directional scroll detection: hide on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const diff = currentScrollY - lastScrollY;

      setIsScrolled(currentScrollY > 20);

      // Always show at the top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (diff > 8 && currentScrollY > 120 && !activeDropdown && !mobileMenuOpen) {
        // Scrolling DOWN -> Hide navbar
        setIsVisible(false);
      } else if (diff < -6) {
        // Scrolling UP -> Reveal navbar immediately
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDropdown, mobileMenuOpen]);

  // Close menus on route change
  const currentPath = location.pathname;
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setIsVisible(true);
  }, [currentPath]);

  // Click outside listener to close dropdowns
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

  const handleSectionClick = (targetId, isMobile = false) => {
    setActiveDropdown(null);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
    // If already on /about-us, smoothly scroll to element
    if (location.pathname.includes('/about-us')) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Floating Header Wrapper with Smooth Directional Show/Hide on Scroll */}
      <header 
        ref={headerRef}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-3.5 sm:top-2 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-none transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative w-full">
          {/* Main Navigation Container - Expands vertically when dropdown is active */}
          <div 
            className={`pointer-events-auto w-full transition-colors duration-200 ${
              activeDropdown ? 'rounded-2xl' : 'rounded-2xl sm:rounded-full'
            } ${
              isScrolled
                ? 'bg-white shadow-xl text-forest'
                : 'bg-green-200/20 backdrop-blur-xl border border-white/10 shadow-2xl text-white'
            }`}
          >
            <div className="flex items-start justify-between px-4 sm:px-8 py-3 sm:py-3.5">
              {/* Left: Brand Logo (Flex item 1) */}
              <div className="flex-1 flex justify-start items-center pt-0.5">
                <Logo 
                  variant={isScrolled ? 'default' : 'light'} 
                  imgClassName="h-9 sm:h-11 md:h-12 w-auto" 
                />
              </div>

              {/* Center: Desktop Navigation Links with seamless inline expansion (Flex item 2 - Centered) */}
              <nav 
                className="hidden lg:flex items-start justify-center gap-1 xl:gap-2.5 flex-none text-sm sm:text-[14px] font-semibold"
                aria-label="Main Navigation"
              >
                {/* 1. Our services Column */}
                <div 
                  className="flex flex-col items-start"
                  onMouseEnter={() => handleMouseEnter('services')}
                >
                  <button
                    type="button"
                    onClick={(e) => handleDropdownClick('services', e)}
                    aria-expanded={activeDropdown === 'services'}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm sm:text-[14px] font-semibold tracking-normal cursor-pointer ${
                      activeDropdown === 'services'
                        ? isScrolled
                          ? 'text-forest font-bold underline underline-offset-4 decoration-2 decoration-forest'
                          : 'text-white font-bold underline underline-offset-4 decoration-2 decoration-gold'
                        : isScrolled
                          ? 'text-forest hover:text-deep-green hover:underline underline-offset-4'
                          : 'text-white/95 hover:text-white hover:underline underline-offset-4'
                    }`}
                  >
                    <span>{t('navigation.ourServices', 'Our services')}</span>
                    <ChevronDown 
                      className={`w-4 h-4 stroke-[2.2] transition-transform duration-150 ${
                        activeDropdown === 'services' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Dropdown items seamlessly inside the navbar */}
                  {activeDropdown === 'services' && (
                    <div 
                      className="pt-2 pb-2 px-3.5 space-y-2 min-w-[260px]"
                      onMouseEnter={() => handleMouseEnter('services')}
                    >
                      {SERVICES_LIST.map((srv) => {
                        const title = t(`navigation.servicesMenu.${srv.key}`, SERVICE_TITLES[srv.key] || srv.slug);
                        return (
                          <Link
                            key={srv.key}
                            to={getLocalizedPath(`/services/${srv.slug}`)}
                            onClick={() => setActiveDropdown(null)}
                            className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                              isScrolled
                                ? 'text-forest/80 hover:text-forest hover:font-bold'
                                : 'text-white/90 hover:text-white hover:font-bold'
                            }`}
                          >
                            {title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Sectors */}
                <NavLink
                  to={getLocalizedPath('/sectors')}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 text-sm sm:text-[14px] font-semibold tracking-normal transition-all duration-150 ${
                      isActive
                        ? isScrolled
                          ? 'text-forest font-bold underline underline-offset-4 decoration-2 decoration-forest'
                          : 'text-white font-bold underline underline-offset-4 decoration-2 decoration-gold'
                        : isScrolled
                          ? 'text-forest hover:text-deep-green hover:underline underline-offset-4'
                          : 'text-white/95 hover:text-white hover:underline underline-offset-4'
                    }`
                  }
                >
                  {t('navigation.sectors', 'Sectors')}
                </NavLink>

                {/* 3. Who We Serve */}
                <NavLink
                  to={getLocalizedPath('/who-we-serve')}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 text-sm sm:text-[14px] font-semibold tracking-normal transition-all duration-150 ${
                      isActive
                        ? isScrolled
                          ? 'text-forest font-bold underline underline-offset-4 decoration-2 decoration-forest'
                          : 'text-white font-bold underline underline-offset-4 decoration-2 decoration-gold'
                        : isScrolled
                          ? 'text-forest hover:text-deep-green hover:underline underline-offset-4'
                          : 'text-white/95 hover:text-white hover:underline underline-offset-4'
                    }`
                  }
                >
                  {t('navigation.whoWeServe', 'Who We Serve')}
                </NavLink>

                {/* 4. Latest Column */}
                <div 
                  className="flex flex-col items-start "
                  onMouseEnter={() => handleMouseEnter('latest')}
                >
                  <button
                    type="button"
                    onClick={(e) => handleDropdownClick('latest', e)}
                    aria-expanded={activeDropdown === 'latest'}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm sm:text-[14px] font-semibold tracking-normal transition-all duration-150 cursor-pointer ${
                      activeDropdown === 'latest'
                        ? isScrolled
                          ? 'text-forest font-bold underline underline-offset-4 decoration-2 decoration-forest'
                          : 'text-white font-bold underline underline-offset-4 decoration-2 decoration-gold'
                        : isScrolled
                          ? 'text-forest hover:text-deep-green hover:underline underline-offset-4'
                          : 'text-white/95 hover:text-white hover:underline underline-offset-4'
                    }`}
                  >
                    <span>{t('navigation.latest', 'Latest')}</span>
                    <ChevronDown 
                      className={`w-4 h-4 stroke-[2.2] transition-transform duration-200 ${
                        activeDropdown === 'latest' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Dropdown items seamlessly inside the navbar */}
                  {activeDropdown === 'latest' && (
                    <div 
                      className="pt-2 pb-2 px-3.5 space-y-2 min-w-[220px]"
                      onMouseEnter={() => handleMouseEnter('latest')}
                    >
                      <Link
                        to={getLocalizedPath('/insights')}
                        onClick={() => setActiveDropdown(null)}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.news', 'News & Insights')}
                      </Link>
                      <Link
                        to={getLocalizedPath('/training')}
                        onClick={() => setActiveDropdown(null)}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.events', 'Events & Workshops')}
                      </Link>
                      <Link
                        to={getLocalizedPath('/insights')}
                        onClick={() => setActiveDropdown(null)}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.resources', 'Resources & Briefings')}
                      </Link>
                      <Link
                        to={getLocalizedPath('/contact')}
                        onClick={() => setActiveDropdown(null)}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.consultations', 'Consultations')}
                      </Link>
                    </div>
                  )}
                </div>

                {/* 5. About Column */}
                <div 
                  className="flex flex-col items-start"
                  onMouseEnter={() => handleMouseEnter('about')}
                >
                  <button
                    type="button"
                    onClick={(e) => handleDropdownClick('about', e)}
                    aria-expanded={activeDropdown === 'about'}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm sm:text-[14px] font-semibold tracking-normal transition-all duration-150 cursor-pointer ${
                      activeDropdown === 'about'
                        ? isScrolled
                          ? 'text-forest font-bold underline underline-offset-4 decoration-2 decoration-forest'
                          : 'text-white font-bold underline underline-offset-4 decoration-2 decoration-gold'
                        : isScrolled
                          ? 'text-forest hover:text-deep-green hover:underline underline-offset-4'
                          : 'text-white/95 hover:text-white hover:underline underline-offset-4'
                    }`}
                  >
                    <span>{t('navigation.about', 'About')}</span>
                    <ChevronDown 
                      className={`w-4 h-4 stroke-[2.2] transition-transform duration-200 ${
                        activeDropdown === 'about' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Dropdown items seamlessly inside the navbar */}
                  {activeDropdown === 'about' && (
                    <div 
                      className="pt-2 pb-2 px-3.5 space-y-2 min-w-[250px]"
                      onMouseEnter={() => handleMouseEnter('about')}
                    >
                      <Link
                        to={`${getLocalizedPath('/about-us')}#who-we-are`}
                        onClick={() => handleSectionClick('who-we-are')}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.whoWeAre', 'About Green Gate Advisory')}
                      </Link>
                      <Link
                        to={`${getLocalizedPath('/about-us')}#purpose-mission`}
                        onClick={() => handleSectionClick('purpose-mission')}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.purpose', 'Purpose, Mission & Vision')}
                      </Link>
                      <Link
                        to={`${getLocalizedPath('/about-us')}#our-approach`}
                        onClick={() => handleSectionClick('our-approach')}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.approach', 'Our Approach & Methodology')}
                      </Link>
                      <Link
                        to={`${getLocalizedPath('/about-us')}#why-green-gate`}
                        onClick={() => handleSectionClick('why-green-gate')}
                        className={`block text-[13.5px] font-medium transition-colors leading-snug ${
                          isScrolled
                            ? 'text-forest/80 hover:text-forest hover:font-bold'
                            : 'text-white/90 hover:text-white hover:font-bold'
                        }`}
                      >
                        {t('navigation.menu.whyUs', 'Why Green Gate Advisory')}
                      </Link>
                    </div>
                  )}
                </div>

                {/* 6. Contact Direct Link */}
                <NavLink
                  to={getLocalizedPath('/contact')}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 text-sm sm:text-[14px] font-semibold tracking-normal transition-all duration-150 ${
                      isActive
                        ? isScrolled
                          ? 'text-forest font-bold underline underline-offset-4 decoration-2 decoration-forest'
                          : 'text-white font-bold underline underline-offset-4 decoration-2 decoration-gold'
                        : isScrolled
                          ? 'text-forest hover:text-deep-green hover:underline underline-offset-4'
                          : 'text-white/95 hover:text-white hover:underline underline-offset-4'
                    }`
                  }
                >
                  {t('navigation.contact', 'Contact')}
                </NavLink>
              </nav>

              {/* Right: Language Selector & Mobile Trigger (Flex item 3 - Right aligned) */}
              <div className="flex-1 flex justify-end items-center gap-3 pt-0.5">
                <LanguageSwitcher isDark={isScrolled} />

                {/* Mobile Menu Hamburger Button */}
                <button
                  ref={menuButtonRef}
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-1.5 rounded-lg lg:hidden transition-colors ${
                    isScrolled
                      ? 'text-forest hover:bg-forest/5'
                      : 'text-white hover:bg-white/10'
                  }`}
                  aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible & Highly Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Backdrop with smooth blur */}
          <div 
            className="fixed inset-0 bg-forest-dark/70 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] xs:max-w-sm bg-white shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
          >
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-sand-border">
                <div className="flex items-center gap-2">
                  <Logo variant="default" imgClassName="h-7 w-auto" />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-charcoal hover:bg-forest/5 active:bg-forest/10 transition-colors focus:outline-none focus:ring-2 focus:ring-forest"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 text-forest" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="py-4 space-y-2">
                {/* 1. Home */}
                <Link
                  to={getLocalizedPath('/')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-forest hover:bg-forest/5 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>{t('navigation.home', 'Home')}</span>
                </Link>

                {/* 2. Our Services (Collapsible Accordion) */}
                <div className="rounded-2xl border border-sand-border/80 overflow-hidden bg-sand-surface/40">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedSection(prev => prev === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-forest hover:bg-forest/5 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span>{t('navigation.ourServices', 'Our Services')}</span>
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-forest/10 text-deep-green">
                        7
                      </span>
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-forest transition-transform duration-200 ${
                        mobileExpandedSection === 'services' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {mobileExpandedSection === 'services' && (
                    <div className="px-2.5 pb-2.5 space-y-1 pt-1 border-t border-sand-border/60 bg-white animate-in fade-in duration-150">
                      {SERVICES_LIST.map((srv) => {
                        const IconComp = SERVICE_ICONS[srv.iconName] || Sparkles;
                        const title = t(`navigation.servicesMenu.${srv.key}`, SERVICE_TITLES[srv.key] || srv.slug);
                        return (
                          <Link
                            key={srv.key}
                            to={getLocalizedPath(`/services/${srv.slug}`)}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5 hover:text-deep-green transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg bg-forest/5 text-forest flex items-center justify-center flex-shrink-0">
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <span className="truncate">{title}</span>
                          </Link>
                        );
                      })}
                      
                      <Link
                        to={getLocalizedPath('/services')}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-2 pt-2 border-t border-sand-border/50 flex items-center justify-between px-2.5 py-1.5 text-xs font-bold text-deep-green hover:text-forest"
                      >
                        <span>{t('navigation.menu.overview', 'View All 7 Services')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* 3. Sectors */}
                <Link
                  to={getLocalizedPath('/sectors')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-forest hover:bg-forest/5 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>{t('navigation.sectors', 'Sectors')}</span>
                </Link>

                {/* 4. Who We Serve */}
                <Link
                  to={getLocalizedPath('/who-we-serve')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-forest hover:bg-forest/5 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>{t('navigation.whoWeServe', 'Who We Serve')}</span>
                </Link>

                {/* 5. Latest (Collapsible Accordion) */}
                <div className="rounded-2xl border border-sand-border/80 overflow-hidden bg-sand-surface/40">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedSection(prev => prev === 'latest' ? null : 'latest')}
                    className="w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-forest hover:bg-forest/5 transition-colors"
                  >
                    <span>{t('navigation.latest', 'Latest')}</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-forest transition-transform duration-200 ${
                        mobileExpandedSection === 'latest' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {mobileExpandedSection === 'latest' && (
                    <div className="px-2.5 pb-2.5 space-y-1 pt-1 border-t border-sand-border/60 bg-white animate-in fade-in duration-150">
                      <Link 
                        to={getLocalizedPath('/insights')} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Newspaper className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.news', 'News & Insights')}</span>
                      </Link>
                      <Link 
                        to={getLocalizedPath('/training')} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Calendar className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.events', 'Events & Workshops')}</span>
                      </Link>
                      <Link 
                        to={getLocalizedPath('/insights')} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.resources', 'Resources & Briefings')}</span>
                      </Link>
                      <Link 
                        to={getLocalizedPath('/contact')} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.consultations', 'Consultations')}</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* 6. Training */}
                <Link
                  to={getLocalizedPath('/training')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-forest hover:bg-forest/5 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>{t('navigation.training', 'Training')}</span>
                </Link>

                {/* 7. About (Collapsible Accordion) */}
                <div className="rounded-2xl border border-sand-border/80 overflow-hidden bg-sand-surface/40">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedSection(prev => prev === 'about' ? null : 'about')}
                    className="w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-forest hover:bg-forest/5 transition-colors"
                  >
                    <span>{t('navigation.about', 'About')}</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-forest transition-transform duration-200 ${
                        mobileExpandedSection === 'about' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {mobileExpandedSection === 'about' && (
                    <div className="px-2.5 pb-2.5 space-y-1 pt-1 border-t border-sand-border/60 bg-white animate-in fade-in duration-150">
                      <Link 
                        to={`${getLocalizedPath('/about-us')}#who-we-are`} 
                        onClick={() => handleSectionClick('who-we-are', true)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Building2 className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.whoWeAre', 'About Green Gate Advisory')}</span>
                      </Link>
                      <Link 
                        to={`${getLocalizedPath('/about-us')}#purpose-mission`} 
                        onClick={() => handleSectionClick('purpose-mission', true)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Target className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.purpose', 'Purpose, Mission & Vision')}</span>
                      </Link>
                      <Link 
                        to={`${getLocalizedPath('/about-us')}#our-approach`} 
                        onClick={() => handleSectionClick('our-approach', true)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Layers className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.approach', 'Our Approach & Methodology')}</span>
                      </Link>
                      <Link 
                        to={`${getLocalizedPath('/about-us')}#why-green-gate`} 
                        onClick={() => handleSectionClick('why-green-gate', true)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Award className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.whyUs', 'Why Green Gate Advisory')}</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* 8. Contact */}
                <Link
                  to={getLocalizedPath('/contact')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-forest hover:bg-forest/5 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>{t('navigation.contact', 'Contact')}</span>
                </Link>
              </div>
            </div>

            {/* Drawer Bottom Actions: Consultation CTA & Dual Flag Switcher */}
            <div className="pt-4 border-t border-sand-border space-y-3.5">
              <Link
                to={getLocalizedPath('/contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-primary rounded-full justify-center py-3 text-xs uppercase tracking-wider font-display flex items-center gap-2 shadow-md"
              >
                <span>{t('navigation.requestConsultation', 'Request Consultation')}</span>
                <ArrowRight className="w-4 h-4 text-forest-dark" />
              </Link>
              
              {/* Dual Flag Language Toggle - Ultra Thumb-Friendly */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-charcoal-muted block text-center">
                  {t('common.languageLabel', 'Language / Idioma')}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      switchLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      locale === 'en'
                        ? 'bg-forest text-gold border-forest shadow-xs'
                        : 'bg-sand-surface text-charcoal border-sand-border hover:bg-sand'
                    }`}
                  >
                    <UkFlag className="w-4 h-3 rounded-xs flex-shrink-0" />
                    <span>English</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      switchLanguage('es');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                      locale === 'es'
                        ? 'bg-forest text-gold border-forest shadow-xs'
                        : 'bg-sand-surface text-charcoal border-sand-border hover:bg-sand'
                    }`}
                  >
                    <SpainFlag className="w-4 h-3 rounded-xs flex-shrink-0" />
                    <span>Español</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
