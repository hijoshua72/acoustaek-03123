import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen overflow-hidden bg-onyx">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <iframe 
          src='https://my.spline.design/distortingtypographycopy-f3Mi7sXadmv6aNDMaoIWSkea/' 
          frameBorder='0' 
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-full lg:scale-[1.5] origin-center"
        ></iframe>
      </div>
      {/* Overlay to hide Spline logo */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-onyx z-10 pointer-events-none" />
    </section>
  );
}
