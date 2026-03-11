import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-mono text-sm text-zinc-500 tracking-widest">{t('contact.label')}</h2>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-6">
            {t('contact.title')}
          </h3>
          <p className="text-xl text-zinc-400 mb-12 max-w-xl">
            {t('contact.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors"
            >
              <Mail size={20} />
              {t('contact.email')}
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              <Instagram size={20} />
              {t('contact.instagram')}
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              <Youtube size={20} />
              {t('contact.youtube')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
