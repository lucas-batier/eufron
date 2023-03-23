import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import fr from "./locales/fr.json";

const expoLanguageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    const locale = Localization.locale;
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(expoLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    debug: false,
    resources: {
      //   en: { translation: en }, @todo add english translations
      fr: { translation: fr },
    },
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
