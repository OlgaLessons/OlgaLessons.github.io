import 'dayjs/locale/en'
import 'dayjs/locale/fr'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEN from './locales/common.en.json'
import commonFR from './locales/common.fr.json'
import commonRU from './locales/common.ru.json'
import { Locale } from 'antd/es/locale'
import frFR from 'antd/locale/fr_FR'
import enGB from 'antd/locale/en_GB'
import ruRU from 'antd/locale/ru_RU'

export type LocaleType = 'fr' | 'en' | 'ru'

/**
 * Get the locale ant object from the locale string
 * @param locale i18n locale string
 * @returns Locale ant object
 */
export const antLocale: { [key: string]: Locale } = {
  fr: frFR,
  en: enGB,
  ru: ruRU,
}

export const resources = {
  en: {
    common: commonEN,
  },
  fr: {
    common: commonFR,
  },
  ru: {
    common: commonRU,
  },
} // as const

i18n.use(initReactI18next).init(
  {
    lng: localStorage.getItem('settingsLng') || process.env.REACT_APP_DEFAULT_LOCALE,
    fallbackLng: 'en',
    resources,
    nsSeparator: false,
  },
  () => {},
)

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('settingsLng', lng)
})

export default i18n
