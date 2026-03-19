import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-onyx">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-12">
          <h3 className="text-5xl md:text-8xl font-bold text-silver leading-[0.9] mb-8 tracking-tighter">
            {t('contact.title')}
          </h3>
          <p className="text-xl text-silver/60 mb-12 max-w-xl">
            {t('contact.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-zinc-card border border-silver/10 text-silver px-10 py-5 rounded-full font-bold hover:bg-silver/10 transition-colors"
            >
              <Instagram size={20} />
              {t('contact.instagram')}
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-zinc-card border border-silver/10 text-silver px-10 py-5 rounded-full font-bold hover:bg-silver/10 transition-colors"
            >
              <Youtube size={20} />
              {t('contact.youtube')}
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center justify-center gap-3 bg-zinc-card border border-silver/10 text-silver px-10 py-5 rounded-full font-bold hover:bg-silver/10 transition-colors"
            >
              <Mail size={20} />
              {t('contact.email')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
