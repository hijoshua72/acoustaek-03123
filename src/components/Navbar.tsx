import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-10 flex justify-end items-center text-silver pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto">
        <div className="hidden md:flex items-center gap-1 font-sans text-base bg-white/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-1.5 rounded-full border border-white/20">
          <a href="#about" className="px-6 py-2.5 hover:bg-black/5 rounded-full transition-all font-semibold text-black/70 hover:text-black">{t('nav.about')}</a>
          <a href="#services" className="px-6 py-2.5 hover:bg-black/5 rounded-full transition-all font-semibold text-black/70 hover:text-black">{t('nav.services')}</a>
          <a href="#portfolio" className="px-6 py-2.5 hover:bg-black/5 rounded-full transition-all font-semibold text-black/70 hover:text-black">{t('nav.portfolio')}</a>
          <a href="#contact" className="px-8 py-2.5 bg-lime text-black font-bold rounded-full transition-all shadow-sm hover:scale-105 ml-2">{t('nav.contact')}</a>
        </div>
        <button 
          onClick={toggleLanguage}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20 hover:border-lime transition-all hover:scale-110 text-black font-bold text-xs"
        >
          {language === 'en' ? 'KR' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
