import i18n from "i18next";
import { languages } from "./resources/languages";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: languages,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;