import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.title': 'Crafting Sound.\nEngineering Emotion.',
    'hero.subtitle': 'Mixing, Mastering, and Recording Engineer',
    'about.label': '01 // ABOUT',
    'about.title': 'The Intersection of Art and Science',
    'about.desc': 'I am an audio engineer specializing in mixing, mastering, and recording. I blend technical precision with musical intuition to bring your sonic vision to life.',
    'services.label': '02 // SERVICES & PRICING',
    'services.recording': 'Recording',
    'services.recording.desc': 'High-fidelity audio capture in a professionally treated environment.',
    'services.recording.price': '$50 / hr',
    'services.mixing': 'Mixing',
    'services.mixing.desc': 'Balancing and enhancing your tracks for clarity, punch, and depth.',
    'services.mixing.price': '$200 / song',
    'services.mastering': 'Mastering',
    'services.mastering.desc': 'The final polish to ensure your music translates perfectly across all systems.',
    'services.mastering.price': '$100 / song',
    'portfolio.label': '03 // SELECTED WORKS',
    'contact.label': '04 // CONTACT',
    'contact.title': 'Let\'s Work Together',
    'contact.desc': 'Ready to take your sound to the next level? Get in touch for bookings and inquiries.',
    'contact.email': 'Email Me',
    'contact.instagram': 'Instagram',
    'contact.youtube': 'YouTube',
  },
  ko: {
    'nav.about': '소개',
    'nav.services': '서비스',
    'nav.portfolio': '포트폴리오',
    'nav.contact': '연락처',
    'hero.title': '소리를 빚고,\n감정을 설계합니다.',
    'hero.subtitle': '믹싱, 마스터링, 레코딩 엔지니어',
    'about.label': '01 // 소개',
    'about.title': '예술과 공학의 교차점',
    'about.desc': '믹싱, 마스터링, 레코딩을 전문으로 하는 오디오 엔지니어입니다. 기술적인 정밀함과 음악적인 직관을 결합하여 당신의 사운드 비전을 현실로 만듭니다.',
    'services.label': '02 // 서비스 및 가격',
    'services.recording': '레코딩',
    'services.recording.desc': '전문적인 음향 환경에서의 고음질 오디오 캡처.',
    'services.recording.price': '₩50,000 / 시간',
    'services.mixing': '믹싱',
    'services.mixing.desc': '트랙의 밸런스를 맞추고 선명도와 깊이를 더하는 작업.',
    'services.mixing.price': '₩200,000 / 곡',
    'services.mastering': '마스터링',
    'services.mastering.desc': '모든 기기에서 완벽하게 재생되도록 하는 최종 마감 작업.',
    'services.mastering.price': '₩100,000 / 곡',
    'portfolio.label': '03 // 참여 작품',
    'contact.label': '04 // 연락처',
    'contact.title': '함께 작업해 볼까요?',
    'contact.desc': '당신의 사운드를 한 단계 끌어올릴 준비가 되셨나요? 예약 및 문의를 위해 연락주세요.',
    'contact.email': '이메일 보내기',
    'contact.instagram': '인스타그램',
    'contact.youtube': '유튜브',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ko' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
