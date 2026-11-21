import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ChevronRight,
  X,
  ExternalLink,
  Mail,
  MessageCircle
} from 'lucide-react';
import Logo from '../common/Logo';
import { UkFlag, SpainFlag } from '../common/LanguageSwitcher';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';
import { CONTACT_CONFIG } from '../../config/contactConfig';
import { openOutlookCompose } from '../../utils/emailHandler';

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
  ets: 'ETS, Carbon Pricing & Article 6',
  cbam: 'EU CBAM exposure, embedded emissions calculations & reporting',
  climateFinance: 'Bankable climate proposal design & multilateral concessional capital',
  natureBased: 'High-integrity AFOLU, jurisdictional forestry & blue carbon assets',
  climatePolicy: 'National regulatory architecture, NDC alignment & policy design',
  corporateClimate: 'Scope 1-3 GHG accounting, SBTi net-zero roadmaps & ESG disclosure'
};

function HamburgerIcon() {
  return (
    <span className="flex flex-col justify-between w-[28px] h-[18px]" aria-hidden="true">
      <span className="block w-full h-[1.75px] bg-current transition-colors duration-200" />
      <span className="block w-full h-[1.75px] bg-current transition-colors duration-200" />
      <span className="block w-full h-[1.75px] bg-current transition-colors duration-200" />
    </span>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const { locale, switchLanguage, getLocalizedPath } = useLocale();
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null); // 'about' | 'services' | null
  const [searchQuery, setSearchQuery] = useState('');

  const menuButtonRef = useRef(null);
  const searchInputRef = useRef(null);

  // Sticky white header appears cleanly after scrolling past the main header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 140);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  const currentPath = location.pathname;
  useEffect(() => {
    setDrawerOpen(false);
    setExpandedSection(null);
    setSearchQuery('');
  }, [currentPath]);

  // Escape key closes drawer
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && drawerOpen) {
      setDrawerOpen(false);
      menuButtonRef.current?.focus();
    }
  }, [drawerOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when sliding drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const handleSectionClick = (targetId) => {
    setDrawerOpen(false);
    if (location.pathname.includes('/about-us')) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleSubmenu = (key) => {
    setExpandedSection((prev) => (prev === key ? null : key));
  };

  // About submenu items (exact existing links & labels)
  const aboutSubItems = useMemo(() => [
    {
      id: 'who-we-are',
      label: t('navigation.menu.whoWeAre', 'Who We Are'),
      to: `${getLocalizedPath('/about-us')}#who-we-are`
    },
    {
      id: 'purpose-mission',
      label: t('navigation.menu.purpose', 'Purpose & Mission'),
      to: `${getLocalizedPath('/about-us')}#purpose-mission`
    },
    {
      id: 'our-approach',
      label: t('navigation.menu.approach', 'Our Approach'),
      to: `${getLocalizedPath('/about-us')}#our-approach`
    },
    {
      id: 'why-green-gate',
      label: t('navigation.menu.whyUs', 'Why Green Gate'),
      to: `${getLocalizedPath('/about-us')}#why-green-gate`
    }
  ], [t, getLocalizedPath]);

  // Searchable index of existing Green Gate Advisory pages & services
  const searchableItems = useMemo(() => {
    const basePages = [
      { label: t('navigation.home', 'Home'), to: getLocalizedPath('/'), category: '' },
      { label: t('navigation.about', 'About Us'), to: getLocalizedPath('/about-us'), category: '' },
      { label: t('navigation.ourServices', 'Our services'), to: getLocalizedPath('/services'), category: '' },
      { label: t('navigation.sectors', 'Sectors'), to: getLocalizedPath('/sectors'), category: '' },
      { label: t('navigation.whoWeServe', 'Who We Serve'), to: getLocalizedPath('/who-we-serve'), category: '' },
      { label: t('navigation.training', 'Training'), to: getLocalizedPath('/training'), category: '' },
      { label: t('navigation.contact', 'Contact'), to: getLocalizedPath('/contact'), category: '' }
    ];

    const servicePages = SERVICES_LIST.map((srv) => ({
      label: t(`navigation.servicesMenu.${srv.key}`, SERVICE_TITLES[srv.key] || srv.slug),
      desc: SERVICE_DESCRIPTIONS[srv.key] || '',
      to: getLocalizedPath(`/services/${srv.slug}`),
      category: t('navigation.ourServices', 'Our services')
    }));

    return [...basePages, ...servicePages];
  }, [t, getLocalizedPath]);

  const filteredSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return searchableItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q))
    );
  }, [searchQuery, searchableItems]);

  return (
    <>
      {/* Static Two-Tier Institutional Header (Pure White, GCC Reference Architecture) */}
      <header
        className="w-full bg-white font-['Poppins',sans-serif] relative z-30"
        aria-label="Site Header"
      >
        {/* Tier 1: Top Utility Bar (.site-topbar) */}
        <div className="w-full bg-white border-b border-[#efefef]">
          <div className="w-[90%] max-w-[1680px] mx-auto py-2.5 flex items-center justify-end gap-x-5 xl:gap-x-7 text-[13.5px] leading-[1.3] font-normal text-[#7f7f7f]">
            {/* Portal / Practice Shortcut Links with subtle external-style icon (Desktop) */}
            <div className="hidden xl:flex items-center gap-x-7">
              <Link
                to={getLocalizedPath('/services/carbon-market-advisory')}
                className="inline-flex items-center gap-1.5 text-[#7f7f7f] hover:text-[#019934] transition-colors duration-200 whitespace-nowrap"
              >
                <ExternalLink className="w-3.5 h-3.5 stroke-[1.75] flex-shrink-0" />
                <span>{t('navigation.topStrip.carbon', 'Carbon Markets & Article 6')}</span>
              </Link>

              <Link
                to={getLocalizedPath('/services/cbam-advisory')}
                className="inline-flex items-center gap-1.5 text-[#7f7f7f] hover:text-[#019934] transition-colors duration-200 whitespace-nowrap"
              >
                <ExternalLink className="w-3.5 h-3.5 stroke-[1.75] flex-shrink-0" />
                <span>{t('navigation.topStrip.cbam', 'EU CBAM Readiness')}</span>
              </Link>

              <Link
                to={getLocalizedPath('/services/climate-finance-advisory')}
                className="inline-flex items-center gap-1.5 text-[#7f7f7f] hover:text-[#019934] transition-colors duration-200 whitespace-nowrap"
              >
                <ExternalLink className="w-3.5 h-3.5 stroke-[1.75] flex-shrink-0" />
                <span>{t('navigation.servicesMenu.climateFinance', 'Climate Finance Advisory')}</span>
              </Link>
            </div>

            {/* Utility Direct Page Links (Tablet & Desktop) */}
            <div className="hidden md:flex items-center gap-x-6 xl:gap-x-7">
              <Link
                to={getLocalizedPath('/sectors')}
                className="text-[#7f7f7f] hover:text-[#019934] transition-colors duration-200 whitespace-nowrap"
              >
                {t('navigation.sectors', 'Sectors')}
              </Link>

              <Link
                to={getLocalizedPath('/training')}
                className="text-[#7f7f7f] hover:text-[#019934] transition-colors duration-200 whitespace-nowrap"
              >
                {t('navigation.training', 'Training')}
              </Link>

              <Link
                to={getLocalizedPath('/contact')}
                className="text-[#7f7f7f] hover:text-[#019934] transition-colors duration-200 whitespace-nowrap"
              >
                {t('navigation.contact', 'Contact')}
              </Link>
            </div>

            {/* Right Utility Icons + Compact Language Selector */}
            <div className="flex items-center gap-x-4 text-[#7f7f7f]">
              <a
                href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(CONTACT_CONFIG.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openOutlookCompose({ to: CONTACT_CONFIG.email });
                }}
                aria-label={`Email via Outlook ${CONTACT_CONFIG.email}`}
                title={`Email via Outlook: ${CONTACT_CONFIG.email}`}
                className="hover:text-[#019934] transition-colors duration-200"
              >
                <Mail className="w-[16px] h-[16px] stroke-[1.75]" />
              </a>

              <a
                href={`https://wa.me/${CONTACT_CONFIG.whatsapp.raw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title={`WhatsApp: ${CONTACT_CONFIG.whatsapp.display}`}
                className="hover:text-[#019934] transition-colors duration-200"
              >
                <MessageCircle className="w-[16px] h-[16px] stroke-[1.75]" />
              </a>

              <span className="h-3.5 w-[1px] bg-[#dddddd]" aria-hidden="true" />

              {/* Clean Minimal Inline EN / ES Switcher */}
              <div className="inline-flex items-center gap-2 text-[12.5px] font-medium" role="group" aria-label="Language switcher">
                <button
                  type="button"
                  onClick={() => switchLanguage('en')}
                  className={`inline-flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                    locale === 'en'
                      ? 'text-[#019934] font-semibold'
                      : 'text-[#7f7f7f] hover:text-[#019934]'
                  }`}
                >
                  <UkFlag className="w-3.5 h-2.5 flex-shrink-0" />
                  <span>EN</span>
                </button>
                <span className="text-[#cccccc]">/</span>
                <button
                  type="button"
                  onClick={() => switchLanguage('es')}
                  className={`inline-flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                    locale === 'es'
                      ? 'text-[#019934] font-semibold'
                      : 'text-[#7f7f7f] hover:text-[#019934]'
                  }`}
                >
                  <SpainFlag className="w-3.5 h-2.5 flex-shrink-0" />
                  <span>ES</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Header Row (.site-header) — Logo Left, Minimal Teal Hamburger Right */}
        <div className="w-full bg-white">
          <div className="w-[90%] max-w-[1680px] mx-auto py-5 sm:py-6 lg:py-7 flex items-center justify-between">
            <Logo
              variant="default"
              imgClassName="h-11 sm:h-14 lg:h-[62px] w-auto"
            />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              className="p-2 -mr-2 text-[#019934] hover:text-[#0A7A32] transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Compact White Header on Scroll (.site-header-sticky) */}
      <div
        aria-hidden={!isSticky}
        className={`fixed top-0 left-0 right-0 z-40 bg-white font-['Poppins',sans-serif] shadow-[0_2px_20px_rgba(26,92,59,0.08)] transition-all duration-300 ease-out ${
          isSticky
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-[90%] max-w-[1680px] mx-auto py-3.5 sm:py-4 lg:py-5 flex items-center justify-between">
          <Logo
            variant="default"
            imgClassName="h-10 sm:h-12 lg:h-[52px] w-auto"
          />

          <button
            type="button"
            tabIndex={isSticky ? 0 : -1}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            className="p-2 -mr-2 text-[#019934] hover:text-[#0A7A32] transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Off-Canvas Sliding Navigation Drawer (.sliding-menu) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-50 font-['Poppins',sans-serif] transition-visibility duration-300 ${
          drawerOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        {/* Subtle Backdrop keeping left side crisp and readable */}
        <div
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
          className={`fixed inset-0 bg-black/15 transition-opacity duration-300 ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Right-Half White Drawer Panel */}
        <aside
          className={`fixed top-0 right-0 bottom-0 w-full sm:w-[75%] md:w-[55%] lg:w-[50%] bg-white shadow-[-12px_0_40px_rgba(0,0,0,0.08)] flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 pb-10">
            {/* Drawer Top Row: Sharp Rectangular Search Input + Thin Teal Close X */}
            <div className="flex items-center justify-between gap-5 sm:gap-10">
              <div className="relative flex-1">
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ..."
                  aria-label="Search pages and services"
                  className="w-full h-[50px] sm:h-[54px] px-5 bg-white border border-[#2c2c2c]/60 rounded-none text-[15px] font-normal text-[#3C3C3C] placeholder:text-[#888888] focus:border-[#019934] focus:outline-none transition-colors duration-200"
                />
              </div>

              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-[#019934] hover:text-[#1A5C3B] transition-colors duration-200 cursor-pointer flex-shrink-0 focus:outline-none"
              >
                <X className="w-7 h-7 stroke-[1.5]" />
              </button>
            </div>

            {/* Signature Bold Black Horizontal Rule */}
            <div className="mt-7 sm:mt-8 mb-6 sm:mb-8 h-[3px] w-full bg-[#3C3C3C]" />

            {/* Live Search Results View OR Main Navigation List */}
            {searchQuery.trim() ? (
              <div className="space-y-1">
                {filteredSearchResults.length > 0 ? (
                  filteredSearchResults.map((item) => (
                    <Link
                      key={item.to + item.label}
                      to={item.to}
                      onClick={() => setDrawerOpen(false)}
                      className="block py-3.5 border-b border-[#efefef] group"
                    >
                      <div className="text-[20px] sm:text-[22px] font-normal text-[#1A5C3B] group-hover:text-[#57D182] transition-colors duration-200">
                        {item.label}
                      </div>
                      {item.desc && (
                        <p className="text-[13.5px] font-light text-[#7f7f7f] mt-1 leading-snug">
                          {item.desc}
                        </p>
                      )}
                    </Link>
                  ))
                ) : (
                  <p className="py-6 text-[16px] font-light text-[#7f7f7f]">
                    No matching results for &ldquo;{searchQuery}&rdquo;.
                  </p>
                )}
              </div>
            ) : (
              <nav aria-label="Main Navigation" className="flex flex-col">
                {/* 1. Home */}
                <NavLink
                  to={getLocalizedPath('/')}
                  end
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) =>
                    `py-3.5 sm:py-4 text-[22px] sm:text-[26px] md:text-[28px] leading-[1.2] font-normal transition-colors duration-200 ${
                      isActive ? 'text-[#57D182]' : 'text-[#1A5C3B] hover:text-[#57D182]'
                    }`
                  }
                >
                  {t('navigation.home', 'Home')}
                </NavLink>

                {/* 2. About Us (Expandable Parent) */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu('about')}
                    aria-expanded={expandedSection === 'about'}
                    className={`w-full py-3.5 sm:py-4 flex items-center justify-between text-left text-[22px] sm:text-[26px] md:text-[28px] leading-[1.2] font-normal transition-colors duration-200 cursor-pointer focus:outline-none ${
                      expandedSection === 'about'
                        ? 'text-[#57D182]'
                        : 'text-[#1A5C3B] hover:text-[#57D182]'
                    }`}
                  >
                    <span>{t('navigation.about', 'About Us')}</span>
                    <ChevronRight
                      className={`w-6 h-6 stroke-[1.5] text-[#3C3C3C] transition-transform duration-200 flex-shrink-0 ${
                        expandedSection === 'about' ? 'rotate-90 text-[#019934]' : ''
                      }`}
                    />
                  </button>

                  {expandedSection === 'about' && (
                    <div className="pl-5 sm:pl-6 pb-4 pt-1 flex flex-col space-y-2.5 border-l-2 border-[#019934] ml-1 mb-2">
                      {aboutSubItems.map((sub) => (
                        <Link
                          key={sub.id}
                          to={sub.to}
                          onClick={() => handleSectionClick(sub.id)}
                          className="text-[16px] sm:text-[18px] font-light text-[#1A5C3B] hover:text-[#019934] transition-colors duration-200 py-0.5"
                        >
                          {sub.label}
                        </Link>
                      ))}
                      <Link
                        to={getLocalizedPath('/about-us')}
                        onClick={() => setDrawerOpen(false)}
                        className="text-[15px] sm:text-[16px] font-medium text-[#019934] hover:text-[#0A7A32] transition-colors duration-200 pt-1"
                      >
                        {t('navigation.about', 'About Us')} →
                      </Link>
                    </div>
                  )}
                </div>

                {/* 3. Our services (Expandable Parent) */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu('services')}
                    aria-expanded={expandedSection === 'services'}
                    className={`w-full py-3.5 sm:py-4 flex items-center justify-between text-left text-[22px] sm:text-[26px] md:text-[28px] leading-[1.2] font-normal transition-colors duration-200 cursor-pointer focus:outline-none ${
                      expandedSection === 'services'
                        ? 'text-[#57D182]'
                        : 'text-[#1A5C3B] hover:text-[#57D182]'
                    }`}
                  >
                    <span>{t('navigation.ourServices', 'Our services')}</span>
                    <ChevronRight
                      className={`w-6 h-6 stroke-[1.5] text-[#3C3C3C] transition-transform duration-200 flex-shrink-0 ${
                        expandedSection === 'services' ? 'rotate-90 text-[#019934]' : ''
                      }`}
                    />
                  </button>

                  {expandedSection === 'services' && (
                    <div className="pl-5 sm:pl-6 pb-4 pt-1 flex flex-col space-y-2.5 border-l-2 border-[#019934] ml-1 mb-2">
                      {SERVICES_LIST.map((srv) => (
                        <Link
                          key={srv.key}
                          to={getLocalizedPath(`/services/${srv.slug}`)}
                          onClick={() => setDrawerOpen(false)}
                          className="text-[16px] sm:text-[18px] font-light text-[#1A5C3B] hover:text-[#019934] transition-colors duration-200 py-0.5"
                        >
                          {t(`navigation.servicesMenu.${srv.key}`, SERVICE_TITLES[srv.key] || srv.slug)}
                        </Link>
                      ))}
                      <Link
                        to={getLocalizedPath('/services')}
                        onClick={() => setDrawerOpen(false)}
                        className="text-[15px] sm:text-[16px] font-medium text-[#019934] hover:text-[#0A7A32] transition-colors duration-200 pt-1"
                      >
                        {t('navigation.menu.overview', 'View All Services')} →
                      </Link>
                    </div>
                  )}
                </div>

                {/* 4. Sectors */}
                <NavLink
                  to={getLocalizedPath('/sectors')}
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) =>
                    `py-3.5 sm:py-4 text-[22px] sm:text-[26px] md:text-[28px] leading-[1.2] font-normal transition-colors duration-200 ${
                      isActive ? 'text-[#57D182]' : 'text-[#1A5C3B] hover:text-[#57D182]'
                    }`
                  }
                >
                  {t('navigation.sectors', 'Sectors')}
                </NavLink>

                {/* 5. Who We Serve */}
                <NavLink
                  to={getLocalizedPath('/who-we-serve')}
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) =>
                    `py-3.5 sm:py-4 text-[22px] sm:text-[26px] md:text-[28px] leading-[1.2] font-normal transition-colors duration-200 ${
                      isActive ? 'text-[#57D182]' : 'text-[#1A5C3B] hover:text-[#57D182]'
                    }`
                  }
                >
                  {t('navigation.whoWeServe', 'Who We Serve')}
                </NavLink>

                {/* 6. Training */}
                <NavLink
                  to={getLocalizedPath('/training')}
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) =>
                    `py-3.5 sm:py-4 text-[22px] sm:text-[26px] md:text-[28px] leading-[1.2] font-normal transition-colors duration-200 ${
                      isActive ? 'text-[#57D182]' : 'text-[#1A5C3B] hover:text-[#57D182]'
                    }`
                  }
                >
                  {t('navigation.training', 'Training')}
                </NavLink>

                {/* 7. Contact */}
                <NavLink
                  to={getLocalizedPath('/contact')}
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) =>
                    `py-3.5 sm:py-4 text-[22px] sm:text-[26px] md:text-[28px] leading-[1.2] font-normal transition-colors duration-200 ${
                      isActive ? 'text-[#57D182]' : 'text-[#1A5C3B] hover:text-[#57D182]'
                    }`
                  }
                >
                  {t('navigation.contact', 'Contact')}
                </NavLink>
              </nav>
            )}
          </div>

          {/* Drawer Footer: Request Consultation & Language Toggle */}
          <div className="px-6 sm:px-10 lg:px-14 py-6 border-t border-[#efefef] flex flex-wrap items-center justify-between gap-4">
            <Link
              to={getLocalizedPath('/contact')}
              onClick={() => setDrawerOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white text-[14px] font-normal transition-colors duration-200"
            >
              {t('navigation.requestConsultation', 'Request Consultation')}
            </Link>

            <div className="inline-flex items-center gap-3 text-[13.5px]">
              <button
                type="button"
                onClick={() => {
                  switchLanguage('en');
                  setDrawerOpen(false);
                }}
                className={`inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                  locale === 'en'
                    ? 'text-[#019934] font-medium'
                    : 'text-[#7f7f7f] hover:text-[#019934]'
                }`}
              >
                <UkFlag className="w-4 h-3 flex-shrink-0" />
                <span>English</span>
              </button>
              <span className="text-[#dddddd]">|</span>
              <button
                type="button"
                onClick={() => {
                  switchLanguage('es');
                  setDrawerOpen(false);
                }}
                className={`inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                  locale === 'es'
                    ? 'text-[#019934] font-medium'
                    : 'text-[#7f7f7f] hover:text-[#019934]'
                }`}
              >
                <SpainFlag className="w-4 h-3 flex-shrink-0" />
                <span>Español</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
