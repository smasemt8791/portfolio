import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.magazine': 'Magazine',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',

    // Hero
    'hero.title': 'Welcome to Health Informatics Hub',
    'hero.subtitle': 'MOHAMMED ALSHEHRI, Health Informatics Specialist & Full-Stack Developer',
    'hero.description': '11+ Years Experience | PWA Builder | AI for Healthcare Innovator',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.readMagazine': 'Read Magazine',
    'hero.contactMe': 'Contact Me',

    // Highlights
    'highlights.title': 'Areas of Expertise',
    'highlights.healthInformatics': 'Health Informatics Expertise',
    'highlights.pwa': 'Progressive Web Apps',
    'highlights.ai': 'AI/ML Healthcare Tools',
    'highlights.ehr': 'EHR Optimization',
    'highlights.analytics': 'Data Analytics',
    'highlights.automation': 'Workflow Automation',

    // Featured
    'featured.articles': 'Featured Articles',
    'featured.apps': 'Featured PWAs',
    'featured.readMore': 'Read More',
    'featured.viewDemo': 'View Demo',

    // Footer
    'footer.copyright': '© 2025 Health Informatics Hub. All rights reserved.',
    'footer.quickLinks': 'Quick Links',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.portfolio': 'الأعمال',
    'nav.magazine': 'المجلة',
    'nav.contact': 'اتصل بنا',
    'nav.resume': 'السيرة الذاتية',

    // Hero
    'hero.title': 'مرحبا بكم في واحة<br><br>المعلوماتية الصحية',
    'hero.subtitle': 'معكم محمد الشهري إخصائي معلوماتية صحية و مطور برمجيات متكاملة',
    'hero.description': '11+ سنة خبرة | مطور تطبيقات ويب تقدمية | مبتكر الذكاء الاصطناعي للرعاية الصحية',
    'hero.viewPortfolio': 'عرض الأعمال',
    'hero.readMagazine': 'قراءة المجلة',
    'hero.contactMe': 'اتصل بي',

    // Highlights
    'highlights.title': 'مجالات الخبرة',
    'highlights.healthInformatics': 'خبرة في المعلوماتية الصحية',
    'highlights.pwa': 'تطبيقات الويب التقدمية',
    'highlights.ai': 'أدوات الذكاء الاصطناعي للرعاية الصحية',
    'highlights.ehr': 'تحسين السجلات الطبية الإلكترونية',
    'highlights.analytics': 'تحليلات البيانات',
    'highlights.automation': 'أتمتة سير العمل',

    // Featured
    'featured.articles': 'مقالات مميزة',
    'featured.apps': 'تطبيقات مميزة',
    'featured.readMore': 'اقرأ المزيد',
    'featured.viewDemo': 'عرض تجريبي',

    // Footer
    'footer.copyright': '© 2025 واحة المعلوماتية الصحية. جميع الحقوق محفوظة.',
    'footer.quickLinks': 'روابط سريعة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
