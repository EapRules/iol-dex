import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationES from "./Helpers/translationES.json";
import translationEN from "./Helpers/translationEN.json";
const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
