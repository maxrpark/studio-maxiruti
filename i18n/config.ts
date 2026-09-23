import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

export const defaultLocale = "en";
export const locales = ["en", "es"] as const;

export const resources = {
  en: { translation: en },
  es: { translation: es },
} as const;

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18next;
