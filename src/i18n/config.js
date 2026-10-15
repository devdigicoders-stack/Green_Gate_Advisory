import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English namespaces
import enCommon from './locales/en/common.json';
import enNav from './locales/en/navigation.json';
import enFooter from './locales/en/footer.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enServices from './locales/en/services.json';
import enSectors from './locales/en/sectors.json';
import enAudience from './locales/en/audience.json';
import enInsights from './locales/en/insights.json';
import enTraining from './locales/en/training.json';
import enContact from './locales/en/contact.json';
import enMeta from './locales/en/meta.json';
import enPrivacy from './locales/en/privacy.json';

// Spanish namespaces
import esCommon from './locales/es/common.json';
import esNav from './locales/es/navigation.json';
import esFooter from './locales/es/footer.json';
import esHome from './locales/es/home.json';
import esAbout from './locales/es/about.json';
import esServices from './locales/es/services.json';
import esSectors from './locales/es/sectors.json';
import esAudience from './locales/es/audience.json';
import esInsights from './locales/es/insights.json';
import esTraining from './locales/es/training.json';
import esContact from './locales/es/contact.json';
import esMeta from './locales/es/meta.json';
import esPrivacy from './locales/es/privacy.json';

// Unified translation bundle supporting both namespaced and flat lookup keys
const enBundle = {
  common: enCommon,
  navigation: enNav,
  nav: enNav,
  footer: enFooter,
  home: enHome,
  about: enAbout,
  services: enServices,
  sectors: enSectors,
  audience: enAudience,
  whoWeServe: enAudience,
  insights: enInsights,
  training: enTraining,
  contact: enContact,
  meta: enMeta,
  privacy: enPrivacy,
  ...enCommon,
};

const esBundle = {
  common: esCommon,
  navigation: esNav,
  nav: esNav,
  footer: esFooter,
  home: esHome,
  about: esAbout,
  services: esServices,
  sectors: esSectors,
  audience: esAudience,
  whoWeServe: esAudience,
  insights: esInsights,
  training: esTraining,
  contact: esContact,
  meta: esMeta,
  privacy: esPrivacy,
  ...esCommon,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enBundle,
        common: enCommon,
        navigation: enNav,
        footer: enFooter,
        home: enHome,
        about: enAbout,
        services: enServices,
        sectors: enSectors,
        audience: enAudience,
        insights: enInsights,
        training: enTraining,
        contact: enContact,
        meta: enMeta,
        privacy: enPrivacy,
      },
      es: {
        translation: esBundle,
        common: esCommon,
        navigation: esNav,
        footer: esFooter,
        home: esHome,
        about: esAbout,
        services: esServices,
        sectors: esSectors,
        audience: esAudience,
        insights: esInsights,
        training: esTraining,
        contact: esContact,
        meta: esMeta,
        privacy: esPrivacy,
      },
    },
    defaultNS: 'translation',
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
