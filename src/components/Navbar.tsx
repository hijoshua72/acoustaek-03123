import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center text-white mix-blend-difference pointer-events-none">
      <div className="font-mono font-bold text-xl tracking-tighter pointer-events-auto">
        ENGINEER.
      </div>
      <div className="flex items-center gap-8 pointer-events-auto">
        <div className="hidden md:flex gap-6 font-mono text-sm">
          <a href="#about" className="hover:opacity-70 transition-opacity">{t('nav.about')}</a>
          <a href="#services" className="hover:opacity-70 transition-opacity">{t('nav.services')}</a>
          <a href="#portfolio" className="hover:opacity-70 transition-opacity">{t('nav.portfolio')}</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">{t('nav.contact')}</a>
        </div>
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 font-mono text-sm hover:opacity-70 transition-opacity"
        >
          <Globe size={16} />
          <span>{language === 'en' ? 'KR' : 'EN'}</span>
        </button>
      </div>
    </nav>
  );
}
