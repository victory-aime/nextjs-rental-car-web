import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { en, fr } from './locales'

const i18nInstance = i18n.createInstance()

const resources = { en: { translation: en }, fr: { translation: fr } }
i18nInstance
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  })

export default i18nInstance
