import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "ka",
  fallbackLng: "en",
  debug: process.env.NODE_ENV !== "production",
  resources: {
    en: {
      translation: require("./public/locales/en/translation.json"),
    },
    ka: {
      translation: require("./public/locales/ka/translation.json"),
    },
  },
});

export default i18n;
