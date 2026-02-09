import React, { createContext, useContext, useState } from 'react';
import translations, { SupportedLang } from './translations';

type LanguageContextType = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: (key: string) => string | string[];
};



const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialLang = (): SupportedLang => {
    const savedLang = localStorage.getItem('lang');
    return savedLang === 'en' || savedLang === 'fr' ? savedLang : 'fr';
  };

  const [lang, setLangState] = useState<SupportedLang>(getInitialLang());

  // Fonction personnalisée pour mettre à jour le state ET localStorage
  const setLang = (newLang: SupportedLang) => {
    localStorage.setItem('lang', newLang);
    setLangState(newLang);
  };

const t = (key: string): string | string[] => {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  return value; // peut être string OU array
};



  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
