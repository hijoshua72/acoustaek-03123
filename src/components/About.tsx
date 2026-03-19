import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-onyx relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-4xl">
          <h3 className="text-5xl md:text-8xl font-bold text-silver leading-[0.9] mb-12 break-keep tracking-tighter">
            {t('about.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <p className="text-xl text-silver/70 leading-relaxed">
              {t('about.desc')}
            </p>
            <div className="p-10 rounded-[3rem] bg-zinc-card border border-silver/5 relative overflow-hidden group">
              <div style={{ color: '#7e9300', fontSize: '17px' }} className="font-mono mb-6 uppercase tracking-[0.2em] font-bold">Philosophy</div>
              <p className="text-silver/80 text-lg leading-relaxed italic relative z-10">
                "Sound is the architecture of emotion. I build the space where your music lives."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
