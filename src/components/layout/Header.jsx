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
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'latest' | 'about' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null); // 'services' | 'latest' | 'about' | null
  
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

  return (
    <>
      {/* Floating Header Wrapper */}
      <header 
        ref={headerRef}
        onMouseLeave={handleMouseLeave}
        className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-none transition-all duration-300"
      >
        <div className="relative w-full">
          {/* Main Top Navigation Pill */}
          <div 
            className={`pointer-events-auto w-full transition-all duration-300 ease-out border rounded-full ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-xl text-charcoal border-sand-border/90 shadow-xl'
                : 'bg-forest/85 hover:bg-forest/90 backdrop-blur-xl text-white border-white/20 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5">
              {/* Left: Brand Logo */}
              <div className="flex-shrink-0">
                <Logo 
                  variant={isScrolled ? 'default' : 'light'} 
                  imgClassName="h-8 sm:h-9 w-auto" 
                />
              </div>

              {/* Center: Desktop Navigation Links */}
              <nav 
                className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0 text-sm font-medium"
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
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      activeDropdown === 'services'
                        ? isScrolled 
                          ? 'bg-forest text-white shadow-xs' 
                          : 'bg-white text-forest shadow-xs'
                        : isScrolled
                          ? 'text-charcoal hover:text-forest hover:bg-forest/5'
                          : 'text-white/95 hover:text-white hover:bg-white/10'
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

                {/* 2. Sectors */}
                <NavLink
                  to={getLocalizedPath('/sectors')}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? 'bg-forest/10 text-forest font-bold'
                          : 'bg-white/20 text-white font-bold'
                        : isScrolled
                          ? 'text-charcoal hover:text-forest hover:bg-forest/5'
                          : 'text-white/95 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {t('navigation.sectors', 'Sectors')}
                </NavLink>

                {/* 3. Who We Serve */}
                <NavLink
                  to={getLocalizedPath('/who-we-serve')}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? 'bg-forest/10 text-forest font-bold'
                          : 'bg-white/20 text-white font-bold'
                        : isScrolled
                          ? 'text-charcoal hover:text-forest hover:bg-forest/5'
                          : 'text-white/95 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {t('navigation.whoWeServe', 'Who We Serve')}
                </NavLink>

                {/* 4. Latest Dropdown Trigger */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('latest')}
                >
                  <button
                    type="button"
                    onClick={(e) => handleDropdownClick('latest', e)}
                    aria-expanded={activeDropdown === 'latest'}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      activeDropdown === 'latest'
                        ? isScrolled 
                          ? 'bg-forest text-white shadow-xs' 
                          : 'bg-white text-forest shadow-xs'
                        : isScrolled
                          ? 'text-charcoal hover:text-forest hover:bg-forest/5'
                          : 'text-white/95 hover:text-white hover:bg-white/10'
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
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      activeDropdown === 'about'
                        ? isScrolled 
                          ? 'bg-forest text-white shadow-xs' 
                          : 'bg-white text-forest shadow-xs'
                        : isScrolled
                          ? 'text-charcoal hover:text-forest hover:bg-forest/5'
                          : 'text-white/95 hover:text-white hover:bg-white/10'
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
                    `px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? 'bg-forest/10 text-forest font-bold'
                          : 'bg-white/20 text-white font-bold'
                        : isScrolled
                          ? 'text-charcoal hover:text-forest hover:bg-forest/5'
                          : 'text-white/95 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {t('navigation.contact', 'Contact')}
                </NavLink>
              </nav>

              {/* Right: Language Selector & Mobile Trigger */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <LanguageSwitcher isDark={isScrolled} />

                {/* Mobile Menu Hamburger Button */}
                <button
                  ref={menuButtonRef}
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-1.5 rounded-lg lg:hidden transition-colors ${
                    isScrolled
                      ? 'text-charcoal hover:text-forest hover:bg-forest/5'
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

          {/* Independent Floating Dropdown Menu Card (Mega Menu & Flyouts) */}
          {activeDropdown && (
            <div 
              className="pointer-events-auto absolute left-0 right-0 top-full pt-2.5 z-50 flex justify-center"
              onMouseEnter={() => {
                if (leaveTimerRef.current) {
                  clearTimeout(leaveTimerRef.current);
                  leaveTimerRef.current = null;
                }
              }}
              onMouseLeave={handleMouseLeave}
            >
              {/* SUBMENU 1: Our Services (Full 7 Practices Mega-Menu) */}
              {activeDropdown === 'services' && (
                <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-sand-border p-6 sm:p-7 text-charcoal animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-sand-border">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-deep-green"></span>
                      <span className="text-xs font-mono uppercase tracking-widest font-bold text-forest-dark">
                        7 Specialized Advisory Practices
                      </span>
                    </div>
                    <span className="text-xs text-charcoal-muted hidden sm:inline font-sans">
                      Independent Technical, Regulatory & Project Advisory
                    </span>
                  </div>

                  {/* 7 Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {SERVICES_LIST.map((srv) => {
                      const IconComponent = SERVICE_ICONS[srv.iconName] || Sparkles;
                      const title = t(`navigation.servicesMenu.${srv.key}`, SERVICE_TITLES[srv.key] || srv.slug);
                      const desc = SERVICE_DESCRIPTIONS[srv.key] || '';

                      return (
                        <Link
                          key={srv.key}
                          to={getLocalizedPath(`/services/${srv.slug}`)}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-forest/5 border border-transparent hover:border-sand-border/70 transition-all duration-200 group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-200 shadow-xs mt-0.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-forest-dark group-hover:text-deep-green flex items-center gap-1.5 transition-colors">
                              <span className="truncate">{title}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-deep-green flex-shrink-0" />
                            </div>
                            {desc && (
                              <p className="text-xs text-charcoal-muted leading-relaxed mt-0.5 line-clamp-1">
                                {desc}
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom Strip: Overview & Consultation */}
                  <div className="mt-5 pt-4 border-t border-sand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-charcoal-muted">
                      <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-xs">Strict technical and regulatory compliance applied across all advisory practices.</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link
                        to={getLocalizedPath('/services')}
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-forest hover:text-deep-green inline-flex items-center gap-1.5 group"
                      >
                        <span>{t('navigation.menu.overview', 'View All 7 Services')}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBMENU 2: Latest Dropdown */}
              {activeDropdown === 'latest' && (
                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-sand-border p-3.5 text-charcoal animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-sand-border mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest font-bold text-forest-dark">
                      Updates & Knowledge
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      to={getLocalizedPath('/insights')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <Newspaper className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.news', 'News & Insights')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Market analysis & regulatory updates</div>
                      </div>
                    </Link>

                    <Link
                      to={getLocalizedPath('/training')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.events', 'Events & Workshops')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Masterclasses and industry briefings</div>
                      </div>
                    </Link>

                    <Link
                      to={getLocalizedPath('/insights')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.resources', 'Resources & Briefings')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Technical whitepapers and guides</div>
                      </div>
                    </Link>

                    <Link
                      to={getLocalizedPath('/contact')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.consultations', 'Consultations')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Direct advisory inquiries</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {/* SUBMENU 3: About Dropdown */}
              {activeDropdown === 'about' && (
                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-sand-border p-3.5 text-charcoal animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-sand-border mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest font-bold text-forest-dark">
                      Institutional Advisory
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      to={getLocalizedPath('/about-us')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.whoWeAre', 'About Green Gate Advisory')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Background and institutional focus</div>
                      </div>
                    </Link>

                    <Link
                      to={getLocalizedPath('/about-us')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.purpose', 'Purpose, Mission & Vision')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Strategic direction and values</div>
                      </div>
                    </Link>

                    <Link
                      to={getLocalizedPath('/about-us')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.approach', 'Our Approach & Methodology')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Practical, measurable execution</div>
                      </div>
                    </Link>

                    <Link
                      to={getLocalizedPath('/about-us')}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forest-dark group-hover:text-deep-green">
                          {t('navigation.menu.whyUs', 'Why Green Gate Advisory')}
                        </div>
                        <div className="text-[11px] text-charcoal-muted">Our core competitive advantages</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
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
                        to={getLocalizedPath('/about-us')} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Building2 className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.whoWeAre', 'About Green Gate Advisory')}</span>
                      </Link>
                      <Link 
                        to={getLocalizedPath('/about-us')} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Target className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.purpose', 'Purpose, Mission & Vision')}</span>
                      </Link>
                      <Link 
                        to={getLocalizedPath('/about-us')} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium text-forest-dark hover:bg-forest/5"
                      >
                        <Layers className="w-3.5 h-3.5 text-deep-green" />
                        <span>{t('navigation.menu.approach', 'Our Approach & Methodology')}</span>
                      </Link>
                      <Link 
                        to={getLocalizedPath('/about-us')} 
                        onClick={() => setMobileMenuOpen(false)} 
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
