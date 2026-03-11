/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-50 selection:bg-white/30 font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <footer className="py-8 text-center border-t border-white/10 text-zinc-600 font-mono text-sm">
          © {new Date().getFullYear()} Audio Engineer. All rights reserved.
        </footer>
      </div>
    </LanguageProvider>
  );
}
