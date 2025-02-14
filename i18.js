import i18next from "i18next"

import backend from 'i18next-http-backend'

import LaguageDetector from 'i18next-browser-languagedetector'

import enTranslation from './assets/locales/en/translation.json'
import nlTranslation from './assets/locales/nl/translation.json'
import frTranslation from './assets/locales/fr/translation.json'

import { initReactI18next } from "react-i18next"

const resources =  {
    en: {
        translation: enTranslation,
    },
    nl: {
        translation: nlTranslation,
    },
    fr: {
        translation: frTranslation
    }
}

i18next
    .use(LaguageDetector)
    .use(backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: ['en', 'nl', 'fr'],
        interpolation: {
            escapeValue: false
        },

        react: {
            suspense: false
        }

    });


export default i18next;
