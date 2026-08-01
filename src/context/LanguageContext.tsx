import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    'nav.about': 'Tentang',
    'nav.skills': 'Skill',
    'nav.projects': 'Project',
    'nav.experience': 'Pengalaman',
    'nav.contact': 'Kontak',
    'hero.greeting': 'Halo, Saya',
    'hero.viewProjects': 'Lihat Project',
    'hero.downloadCV': 'Download CV',
    'about.title': 'Tentang Saya',
    'about.subtitle': 'Mengenal saya lebih dekat',
    'about.university': 'Universitas',
    'about.semester': 'Semester',
    'about.interest': 'Bidang yang Diminati',
    'skills.title': 'Kemampuan',
    'skills.subtitle': 'Tools & teknologi yang saya kuasai',
    'projects.title': 'Karya Pilihan',
    'projects.subtitle': 'Featured Projects',
    'projects.viewAll': 'Lihat semua project',
    'gallery.title': 'Semua Karya',
    'gallery.subtitle': 'Project Gallery',
    'experience.title': 'Perjalanan',
    'experience.subtitle': 'Experience',
    'achievements.title': 'Pencapaian',
    'achievements.subtitle': 'Achievements',
    'techstack.title': 'Tech Stack',
    'techstack.subtitle': 'Teknologi yang saya gunakan',
    'contact.title': 'Hubungi Saya',
    'contact.subtitle': 'Mari berkolaborasi',
    'contact.description': 'Terbuka untuk proyek magang, kolaborasi, atau sekadar diskusi seputar teknologi.',
    'contact.name': 'Nama',
    'contact.email': 'Email',
    'contact.message': 'Pesan',
    'contact.namePlaceholder': 'Nama kamu',
    'contact.emailPlaceholder': 'email@contoh.com',
    'contact.messagePlaceholder': 'Ceritakan proyek atau ide kamu...',
    'contact.send': 'Kirim Pesan',
    'contact.sending': 'Mengirim...',
    'contact.sent': 'Terkirim',
    'contact.error': 'Gagal mengirim. Coba lagi atau hubungi langsung lewat email.',
    'footer.allRights': 'All rights reserved',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello, I am',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    'about.title': 'About Me',
    'about.subtitle': 'Getting to know me better',
    'about.university': 'University',
    'about.semester': 'Semester',
    'about.interest': 'Interests',
    'skills.title': 'Skills',
    'skills.subtitle': 'Tools & technologies I master',
    'projects.title': 'Featured Work',
    'projects.subtitle': 'Featured Projects',
    'projects.viewAll': 'View all projects',
    'gallery.title': 'All Works',
    'gallery.subtitle': 'Project Gallery',
    'experience.title': 'Journey',
    'experience.subtitle': 'Experience',
    'achievements.title': 'Achievements',
    'achievements.subtitle': 'Achievements',
    'techstack.title': 'Tech Stack',
    'techstack.subtitle': 'Technologies I use',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s collaborate',
    'contact.description': 'Open to internship projects, collaborations, or tech discussions.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'email@example.com',
    'contact.messagePlaceholder': 'Tell me about your project or idea...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.sent': 'Sent',
    'contact.error': 'Failed to send. Try again or contact me directly via email.',
    'footer.allRights': 'All rights reserved',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
