import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {t('name')} - 90s Style Portfolio</p>
      <p>Visitor Count: <img src="https://hitwebcounter.com/counter/counter.php?page=1234567&style=0006&nbdigits=5&type=page&initCount=0" alt="counter" /></p>
    </footer>
  );
};

export default Footer;