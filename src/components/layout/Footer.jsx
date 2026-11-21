import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Mail,
  ArrowUp,
  ShieldCheck,
  Sprout,
  MapPin
} from 'lucide-react';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { useLocale } from '../../hooks/useLocale';
import { SERVICES_LIST } from '../../data/servicesList';
import { CONTACT_CONFIG } from '../../config/contactConfig';
import { openOutlookCompose } from '../../utils/emailHandler';

// Official WhatsApp Vector Icon Component
function WhatsAppLogo({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const QUICK_LINKS = [
    { label: t('navigation.home', 'Home'), path: '/' },
    { label: t('navigation.about', 'About Us'), path: '/about-us' },
    { label: t('navigation.services', 'Services'), path: '/services' },
    { label: t('navigation.sectors', 'Sectors'), path: '/sectors' },
    { label: t('navigation.whoWeServe', 'Who We Serve'), path: '/who-we-serve' },
    { label: 'Capital & Proposals', path: '/services/climate-finance-advisory' },
    { label: t('navigation.training', 'Training'), path: '/training' },
    { label: 'Register with Consultant Roster', path: '/contact?type=expert', isHighlighted: true },
    { label: t('navigation.contact', 'Contact'), path: '/contact' },
    { label: t('footer.privacyPolicy', 'Privacy Policy'), path: '/privacy-policy', isHighlighted: true }
  ];

  const quickLinksCol1 = QUICK_LINKS.slice(0, 5);
  const quickLinksCol2 = QUICK_LINKS.slice(5);

  return (
    <footer className="relative w-full bg-[#1A5C3B] text-white font-['Poppins',sans-serif] pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 overflow-hidden">
      {/* Preserved Botanical Background Texture softly blended into Deep Navy */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-[0.06] mix-blend-luminosity"
        style={{ backgroundImage: `url('/images/footer-bg.jpg')` }}
      />

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto">
        {/* ============================================================
            UPPER ZONE: GCC ASYMMETRIC 2-ZONE INSTITUTIONAL GRID
           ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 sm:pb-16">
          {/* LEFT ZONE (~58%): Link Columns + Direct Teal-Icon Contact Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12 sm:space-y-14">
            {/* Upper Link Columns (Exact GCC Mint Uppercase Headers + Crisp White Light Links) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-8">
              {/* Key Services Column */}
              <div className="sm:col-span-6 space-y-5">
                <h3 className="font-['Poppins',sans-serif] text-[13.5px] font-medium uppercase tracking-[0.14em] text-[#57D182]">
                  {t('footer.keyServices', 'KEY SERVICES')}
                </h3>

                <ul className="space-y-3">
                  {SERVICES_LIST.map((srv) => (
                    <li key={srv.key}>
                      <Link
                        to={getLocalizedPath(`/services/${srv.slug}`)}
                        className="text-[14.5px] font-light text-white/95 hover:text-[#57D182] transition-colors duration-200 inline-block leading-snug"
                      >
                        {t(`navigation.servicesMenu.${srv.key}`, srv.slug)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Columns (Balanced 2-Subcolumn Layout matching GCC 3-Column Rhythm) */}
              <div className="sm:col-span-6 space-y-5">
                <h3 className="font-['Poppins',sans-serif] text-[13.5px] font-medium uppercase tracking-[0.14em] text-[#57D182]">
                  {t('footer.quickLinks', 'QUICK LINKS')}
                </h3>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <ul className="space-y-3">
                    {quickLinksCol1.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={getLocalizedPath(item.path)}
                          className="text-[14.5px] font-light text-white/95 hover:text-[#57D182] transition-colors duration-200 inline-block leading-snug"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-3">
                    {quickLinksCol2.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={getLocalizedPath(item.path)}
                          className={`text-[14.5px] transition-colors duration-200 inline-block leading-snug ${
                            item.isHighlighted
                              ? 'font-normal text-[#57D182] hover:text-white'
                              : 'font-light text-white/95 hover:text-[#57D182]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Contact Grid (Horizontal icon + label + value layout) */}
            <div className="pt-2 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-start pt-4">
                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsapp.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#246E49]/80 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-[#57D182] transition-colors mt-0.5">
                    <WhatsAppLogo className="w-5 h-5 fill-[#57D182]" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-[12.5px] font-light text-white/70 uppercase tracking-wider">
                      WhatsApp · Chat
                    </div>
                    <div className="text-[14.5px] font-medium text-white group-hover:text-[#57D182] transition-colors truncate">
                      {CONTACT_CONFIG.whatsapp.display}
                    </div>
                  </div>
                </a>

                {/* Email Direct - Opens Strictly in Outlook */}
                <a
                  href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(CONTACT_CONFIG.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openOutlookCompose({ to: CONTACT_CONFIG.email });
                  }}
                  className="group flex items-start gap-3.5 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#246E49]/80 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-[#57D182] transition-colors mt-0.5">
                    <Mail className="w-5 h-5 text-[#57D182] stroke-[1.6]" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-[12.5px] font-light text-white/70 uppercase tracking-wider">
                      Email
                    </div>
                    <div className="text-[14px] font-medium text-white group-hover:text-[#57D182] transition-colors break-words">
                      {CONTACT_CONFIG.email}
                    </div>
                  </div>
                </a>

                {/* Headquarters Location */}
                <a
                  href={CONTACT_CONFIG.address.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on Google Maps"
                  className="group flex items-start gap-3.5 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#246E49]/80 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-[#57D182] transition-colors mt-0.5">
                    <MapPin className="w-5 h-5 text-[#57D182] stroke-[1.6]" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-[12.5px] font-light text-white/70 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-[13.5px] font-light text-white/85 group-hover:text-[#57D182] transition-colors leading-relaxed">
                      {CONTACT_CONFIG.address.street}, {CONTACT_CONFIG.address.postalCode} {CONTACT_CONFIG.address.city}, {CONTACT_CONFIG.address.country}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT ZONE (~42%): Two Stacked Elevated Navy Glass Cards (Exact GCC Footer Card Style) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Elevated Card 1: Brand Statement & Language Selector */}
            <div className="bg-[#246E49]/70 border border-white/15 rounded-[12px] p-7 sm:p-8 shadow-[0_12px_30px_rgba(14,58,36,0.22)] space-y-5">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Logo variant="white" imgClassName="h-11 sm:h-13 w-auto" />
                <div className="flex items-center gap-2.5">
                  <span className="text-[12.5px] font-light text-white/70">Language / Idioma:</span>
                  <LanguageSwitcher isDark={false} />
                </div>
              </div>

              <p className="font-['Poppins',sans-serif] text-[14px] font-light text-white/85 leading-[1.7]">
                {t(
                  'footer.brandTagline',
                  'Green Gate Advisory is an environmental, climate and carbon market advisory consultancy firm supporting governments, businesses, exporters, project developers, investors and institutions.'
                )}
              </p>
            </div>

            {/* Elevated Card 2: Governance Safeguard & Independence Notice */}
            <div className="bg-[#246E49]/70 border border-white/15 rounded-[12px] p-7 sm:p-8 shadow-[0_12px_30px_rgba(14,58,36,0.22)] space-y-5">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[#57D182] stroke-[1.5] flex-shrink-0 mt-0.5" />
                <p className="font-['Poppins',sans-serif] text-[13.5px] font-light text-white/90 leading-[1.65]">
                  {t(
                    'footer.confidentiality',
                    'Case studies and specific client references are published only following formal verification and client consent.'
                  )}
                </p>
              </div>

              <div className="border-t border-white/12 pt-5 flex items-start gap-3.5">
                <Sprout className="w-6 h-6 text-[#57D182] stroke-[1.5] flex-shrink-0 mt-0.5" />
                <p className="font-['Poppins',sans-serif] text-[13px] font-light text-white/75 leading-[1.65]">
                  {t(
                    'footer.disclaimer',
                    'Green Gate Advisory provides independent technical, regulatory and project advisory. We do not provide guaranteed funding outcomes or carbon credit issuances, which remain subject to independent registries and funding bodies.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM LEGAL BAR (Exact GCC Logo + Divider + Copyright + Circular Teal GO TO TOP)
           ============================================================ */}
        <div className="pt-8 border-t border-white/12 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: White Monochrome Logo + Thin Vertical Divider + Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <Logo variant="white" imgClassName="h-9 sm:h-10 w-auto" />
            <span className="hidden sm:block h-8 w-[1px] bg-white/25" aria-hidden="true" />
            <div className="text-[13.5px] font-light text-white/70">
              © {new Date().getFullYear()} {t('footer.copyright', 'All rights reserved. Green Gate Advisory.')} • Barcelona, Spain
            </div>
          </div>

          {/* Center: Credit Link */}
          <div className="text-[13px] font-light text-white/70 text-center">
            Designed and Developed by{' '}
            <a
              href="https://www.worknestconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#57D182] hover:text-[#57D182] transition-colors duration-200"
            >
              Worknest Connect
            </a>
          </div>

          {/* Right: Teal Quick Contact Icons + Iconic GCC Circular Outline Back-to-Top Button */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[#57D182]">
              <a
                href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(CONTACT_CONFIG.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openOutlookCompose({ to: CONTACT_CONFIG.email });
                }}
                aria-label={`Email in Outlook ${CONTACT_CONFIG.email}`}
                className="hover:text-[#57D182] transition-colors duration-200"
              >
                <Mail className="w-5 h-5 stroke-[1.6]" />
              </a>
              <a
                href={`https://wa.me/${CONTACT_CONFIG.whatsapp.raw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#57D182] transition-colors duration-200"
              >
                <WhatsAppLogo className="w-5 h-5 fill-current" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-3 text-[12px] font-normal uppercase tracking-[0.16em] text-white/75 hover:text-[#57D182] transition-colors duration-200 group cursor-pointer focus:outline-none"
            >
              <span>Back to top</span>
              <span className="w-10 h-10 rounded-full border border-[#57D182] text-[#57D182] group-hover:bg-[#019934] group-hover:text-white flex items-center justify-center transition-all duration-200">
                <ArrowUp className="w-4 h-4 stroke-[1.6] group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
