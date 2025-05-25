import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="navigation">
      <Link to="/about" className="nav-link">{t('about')}</Link>
      <Link to="/projects" className="nav-link">{t('projects')}</Link>
      <Link to="/skills" className="nav-link">{t('skills')}</Link>
      <Link to="/contact" className="nav-link">{t('contact')}</Link>
    </nav>
  );
};

export default Navigation;