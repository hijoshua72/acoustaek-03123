/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AlbumBanner from './components/AlbumBanner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-onyx text-silver selection:bg-lime/30 font-sans relative overflow-hidden">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <AlbumBanner />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <footer className="relative z-10 py-8 text-center border-t border-silver/10 text-silver/40 font-mono text-sm bg-onyx">
          © {new Date().getFullYear()} Audio. All rights reserved.
        </footer>
      </div>
    </LanguageProvider>
  );
}
