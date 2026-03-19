import React from 'react';
import { motion } from 'framer-motion';

const albums = [
  { id: 1, image: '/albums/Hansol-Disagreement_and_deception.jpg', link: 'https://example.com/1' },
  { id: 2, image: '/albums/stellive-vol42.jpg', link: 'https://example.com/2' },
  { id: 3, image: '/albums/yunhyup-Winter.jpg', link: 'https://example.com/3' },
  { id: 4, image: '/albums/Zenda-Lily.jpg', link: 'https://example.com/4' },
  { id: 5, image: '/albums/yudam-adult_nightmare.jpg', link: 'https://example.com/5' },
  { id: 6, image: '/albums/dooriechoi-IAMWHATIA.jpeg', link: 'https://example.com/6' },
  { id: 7, image: '/albums/Zenda-Fake_Summer.jpg', link: 'https://example.com/7' },
  { id: 8, image: '/albums/dooriechoi-Shining.jpg', link: 'https://example.com/8' },
  { id: 9, image: '/albums/onsong-Singing.jpg', link: 'https://example.com/7' },
];

export default function AlbumBanner() {
  // Duplicate the list to create a seamless loop
  const duplicatedAlbums = [...albums, ...albums];

  return (
    <div className="py-20 bg-onyx overflow-hidden relative z-10">
      <div className="flex w-max animate-infinite-scroll gap-6 px-3">
        {duplicatedAlbums.map((album, index) => (
          <motion.a
            key={`${album.id}-${index}`}
            href={album.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden border border-silver/10 shadow-xl relative"
            whileHover={{ 
              scale: 1.1, 
              zIndex: 20,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <img
              src={album.image}
              alt={`Album ${album.id}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-lime text-black flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
