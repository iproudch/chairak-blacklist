import { Switch } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from "react-i18next";

enum ELanguage {
  EN = "en",
  TH = "th",
}

const Languages = [ELanguage.EN, ELanguage.TH];
export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = () => {
    const currentLang = i18n.language;
    const langIndex = Languages.indexOf(currentLang as ELanguage);
    const nextIndex = (langIndex + 1) % Languages.length;
    i18n.changeLanguage(Languages[nextIndex]);
  };

  return (
    <div className="flex">
      {Object.entries(ELanguage).map(([key, value]) => (
        <button
          key={key}
          className={`px-2 py-1 text-sm  font-semibold transition-colors duration-500 ${
            value === i18n.language
              ? "bg-[#FF7043] text-white"
              : "bg-[#e5e5e5] text-black"
          }`}
          onClick={() => changeLanguage()}
        >
          {t(`languages:${key}`)}
        </button>
      ))}
    </div>
  );
}
