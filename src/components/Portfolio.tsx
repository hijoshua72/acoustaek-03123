import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '불일치랑 기만이',
    artist: '한솔',
    role: 'Mixing & Mastering',
    image: '/albums/Hansol-Disagreement_and_deception.jpg',
    link: 'https://youtube.com',
  },
  {
    id: 2,
    title: '노래를 부르네',
    artist: '온송',
    role: 'Mixing & Mastering',
    image: '/albums/onsong-Singing.jpg',
    link: 'https://youtube.com',
  },
  {
    id: 3,
    title: '가짜여름 (feat. Zenda)',
    artist: '박공원',
    role: 'Recording, Mixing & Mastering',
    image: '/albums/Zenda-Fake_Summer.jpg',
    link: 'https://youtube.com',
  },
  {
    id: 4,
    title: 'Lily',
    artist: '박공원, Zenda',
    role: 'Arrangement',
    image: '/albums/Zenda-Lily.jpg',
    link: 'https://youtube.com',
  },
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-onyx">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h3 className="text-5xl md:text-7xl font-bold text-silver tracking-tighter leading-none">
            Selected Works
          </h3>
        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-12 gap-4 px-8 py-4 border-b border-silver/10 text-silver/40 font-mono text-xs uppercase tracking-widest hidden md:grid">
          <div className="col-span-4">Project / Artist</div>
          <div className="col-span-4">Role / Description</div>
          <div className="col-span-3">Release Date</div>
          <div className="col-span-1 text-right">Link</div>
        </div>

        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-8 py-10 border-b border-silver/10 hover:bg-silver/5 transition-all items-center relative"
          >
            <div className="col-span-12 md:col-span-4 flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-silver/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-silver group-hover:text-lime transition-colors">{project.title}</h4>
                <p className="text-silver/40 font-mono text-sm">{project.artist}</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4">
              <p className="text-silver/60">{project.role}</p>
            </div>

            <div className="col-span-12 md:col-span-3">
              <p className="text-silver/40 font-mono">12/03/24</p>
            </div>

            <div className="col-span-12 md:col-span-1 flex justify-end">
              <div className="w-12 h-12 rounded-full border border-silver/10 flex items-center justify-center text-silver group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-all">
                <ExternalLink size={20} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
