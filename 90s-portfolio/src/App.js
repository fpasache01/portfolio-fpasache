import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/90s-theme.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LanguageSwitcher />
        <Header />
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;