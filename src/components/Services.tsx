import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mic, Sliders, Disc3 } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'recording',
      icon: <Mic className="w-8 h-8 mb-6 text-zinc-300" />,
      title: t('services.recording'),
      desc: t('services.recording.desc'),
      price: t('services.recording.price'),
    },
    {
      id: 'mixing',
      icon: <Sliders className="w-8 h-8 mb-6 text-zinc-300" />,
      title: t('services.mixing'),
      desc: t('services.mixing.desc'),
      price: t('services.mixing.price'),
    },
    {
      id: 'mastering',
      icon: <Disc3 className="w-8 h-8 mb-6 text-zinc-300" />,
      title: t('services.mastering'),
      desc: t('services.mastering.desc'),
      price: t('services.mastering.price'),
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <h2 className="font-mono text-sm text-zinc-500 tracking-widest">{t('services.label')}</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900 transition-colors group">
            {service.icon}
            <h3 className="text-2xl font-medium text-white mb-4">{service.title}</h3>
            <p className="text-zinc-400 mb-12 min-h-[80px]">{service.desc}</p>
            <div className="pt-6 border-t border-white/10 font-mono text-zinc-300 group-hover:text-white transition-colors">
              {service.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
