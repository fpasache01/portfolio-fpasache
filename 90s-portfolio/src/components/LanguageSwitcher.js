import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button className="language-btn" onClick={() => changeLanguage('en')}>EN</button>
      <button className="language-btn" onClick={() => changeLanguage('es')}>ES</button>
    </div>
  );
};

export default LanguageSwitcher;