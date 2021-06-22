/**
 * @fileoverview Initializes and exports the initialized i18next instance
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const en_Locales = require('assets/translations/en.json');

const resources = {
  en: { translation: en_Locales },
};

const config = {
  resources,
  lng: 'en',
  fallbackLng: {
    default: ['en'],
  },
  debug: true,
  interpolation: {
    escapeValue: false,
  },
};
i18n.use(initReactI18next).init(config);

export default i18n;
