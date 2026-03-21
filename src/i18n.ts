import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import et from './locales/et.json'

const savedLanguage = localStorage.getItem('language')
const initialLanguage = savedLanguage === 'en' || savedLanguage === 'et' ? savedLanguage : 'et'

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    et: {
      translation: et,
    },
  },
  lng: initialLanguage,
  fallbackLng: 'et',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
  localStorage.setItem('language', language)
})

document.documentElement.lang = i18n.language

export default i18n
