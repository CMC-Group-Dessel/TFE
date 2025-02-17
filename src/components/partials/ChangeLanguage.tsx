import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage: FunctionComponent = () => {
  
  const { t, i18n } = useTranslation();

  const onChangeLanguage = () => {
    let taal = prompt("Kies je taal (Dit dient enkel voor te testen)");
    if (taal) {
      let accept = window.confirm(`Wil je de taal wijzigen naar: ${taal}?`);
      if (accept) {
        i18n.changeLanguage(taal);
      }
    }
  };

  return (
    <div className="w-[120px] text-center cursor-pointer p-2 bg-gray-200 rounded-md hover:bg-gray-300" onClick={onChangeLanguage}>
      <p>Verander taal</p>
    </div>
  );
};

export default ChangeLanguage;
