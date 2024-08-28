import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./translations/components.en.json";
import Thai from "./translations/components.th.json";

const resources = {
  en: {
    components: English,
    pages: English,
  },
  th: {
    components: Thai,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "th",
  fallbackLng: "en",
  ns: ["components", "pages"],
  defaultNS: "components",
  debug: false, // Optional: turn on debugging to see what happens during translation loading and usage
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
