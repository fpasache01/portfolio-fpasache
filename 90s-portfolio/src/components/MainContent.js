import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  return <div>{t('about')}</div>;
};

const Projects = () => {
  const { t } = useTranslation();
  return <div>{t('projects')}</div>;
};

const Skills = () => {
  const { t } = useTranslation();
  return <div>{t('skillsDetails')}</div>;
};

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('contact')}</h2>
      <p>Phone 1: {t('phone1')}</p>
      <p>Phone 2: {t('phone2')}</p>
      <p>Email: {t('email')}</p>
    </div>
  );
};

const MainContent = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<About />} />
      </Routes>
    </main>
  );
};

export default MainContent;