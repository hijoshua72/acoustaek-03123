import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neon Nights',
    artist: 'Synthwave Collective',
    role: 'Mixing & Mastering',
    image: 'https://picsum.photos/seed/album1/600/600',
    link: 'https://youtube.com',
  },
  {
    id: 2,
    title: 'Acoustic Sessions',
    artist: 'Jane Doe',
    role: 'Recording & Mixing',
    image: 'https://picsum.photos/seed/album2/600/600',
    link: 'https://youtube.com',
  },
  {
    id: 3,
    title: 'Urban Echoes',
    artist: 'The City Beats',
    role: 'Mastering',
    image: 'https://picsum.photos/seed/album3/600/600',
    link: 'https://youtube.com',
  },
  {
    id: 4,
    title: 'Ethereal Dreams',
    artist: 'Ambient Mind',
    role: 'Mixing',
    image: 'https://picsum.photos/seed/album4/600/600',
    link: 'https://youtube.com',
  },
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <h2 className="font-mono text-sm text-zinc-500 tracking-widest">{t('portfolio.label')}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-900 block"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-mono text-xs text-zinc-300 mb-2">{project.role}</p>
                  <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                  <p className="text-zinc-400">{project.artist}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
