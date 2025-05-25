import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="header">
      <h1>{t('name')}</h1>
      <div className="marquee">
        <marquee>{t('welcome')}</marquee>
      </div>
    </header>
  );
};

export default Header;