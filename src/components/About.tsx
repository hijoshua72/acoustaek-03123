import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-mono text-sm text-zinc-500 tracking-widest">{t('about.label')}</h2>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
            {t('about.title')}
          </h3>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            {t('about.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
