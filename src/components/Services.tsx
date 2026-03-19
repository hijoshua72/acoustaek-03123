import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mic, Sliders, Disc3 } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'recording',
      icon: <Mic className="w-8 h-8" />,
      title: t('services.recording'),
      desc: t('services.recording.desc'),
      price: t('services.recording.price'),
      image: 'https://picsum.photos/seed/audio1/800/600?grayscale',
      theme: 'black'
    },
    {
      id: 'mixing',
      icon: <Sliders className="w-8 h-8" />,
      title: t('services.mixing'),
      desc: t('services.mixing.desc'),
      price: t('services.mixing.price'),
      image: 'https://picsum.photos/seed/audio2/800/600?grayscale',
      theme: 'lime'
    },
    {
      id: 'mastering',
      icon: <Disc3 className="w-8 h-8" />,
      title: t('services.mastering'),
      desc: t('services.mastering.desc'),
      price: t('services.mastering.price'),
      image: 'https://picsum.photos/seed/audio3/800/600?grayscale',
      theme: 'white'
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-onyx">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h3 className="text-5xl md:text-7xl font-bold text-silver tracking-tighter leading-none">
            {t('services') || 'Our Services'}
          </h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Card 1 */}
        <div className="md:col-span-7 bg-zinc-card rounded-[3rem] overflow-hidden border border-silver/5 group relative h-[500px]">
          <img 
            src={services[0].image} 
            alt={services[0].title}
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent"></div>
          <div className="relative h-full p-12 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-4 rounded-2xl bg-lime/10 border border-lime/20 backdrop-blur-xl text-black">
                {services[0].icon}
              </div>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-silver mb-4">{services[0].title}</h4>
              <p className="text-silver/60 max-w-md mb-8">{services[0].desc}</p>
              <div className="inline-block px-6 py-2 rounded-full bg-silver/10 border border-silver/10 text-silver font-mono text-sm">
                {services[0].price}
              </div>
            </div>
          </div>
        </div>

        {/* Medium Card 2 */}
        <div className="md:col-span-5 bg-lime rounded-[3rem] overflow-hidden group relative h-[500px] p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-2xl bg-black/10 border border-black/10 text-black">
              {services[1].icon}
            </div>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-black mb-4">{services[1].title}</h4>
            <p className="text-black/70 mb-8">{services[1].desc}</p>
            <div className="inline-block px-6 py-2 rounded-full bg-black text-lime font-mono text-sm">
              {services[1].price}
            </div>
          </div>
        </div>

        {/* Small Card 3 */}
        <div className="md:col-span-5 bg-silver rounded-[3rem] overflow-hidden group relative h-[400px] p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-2xl bg-onyx/10 border border-onyx/10 text-black">
              {services[2].icon}
            </div>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-onyx mb-4">{services[2].title}</h4>
            <div className="inline-block px-6 py-2 rounded-full bg-onyx text-silver font-mono text-sm">
              {services[2].price}
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="md:col-span-7 bg-zinc-card rounded-[3rem] overflow-hidden border border-silver/5 group relative h-[400px]">
          <img 
            src="https://picsum.photos/seed/studio/1200/800?grayscale" 
            alt="Studio"
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 to-transparent flex items-center p-12">
            <h4 className="text-5xl font-bold text-silver tracking-tighter max-w-xs">
              Professional Results Today.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
