import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 opacity-80 overflow-hidden">
        <iframe 
          src='https://my.spline.design/distortingtypography-gGCQCGUOgtxhTUayKRVvAKQT/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-125 origin-center"
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white break-keep leading-tight drop-shadow-2xl"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-zinc-300 font-mono drop-shadow-md"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 font-mono text-xs pointer-events-none"
      >
        <span>SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
