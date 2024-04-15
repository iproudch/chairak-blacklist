import { Switch } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from "react-i18next";

enum ELanguage {
  TH = "th",
  EN = "en",
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
    <div className="flex justify-end">
      <Switch crossOrigin={undefined} onChange={() => changeLanguage()} />
      <p className="ml-2 text-sm text-gray-600">
        {t("components:langSetting")}
      </p>
    </div>
  );
}
