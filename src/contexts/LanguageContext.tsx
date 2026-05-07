import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Language, translations, type Translations } from '../locales';

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations; // t stands for translations
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // We can try to get the initial language from localStorage, or default to 'pt'
    const [language, setLanguageState] = useState<Language>(() => {
        const savedLang = localStorage.getItem('app-language') as Language;
        return savedLang && Object.keys(translations).includes(savedLang) ? savedLang : 'pt';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('app-language', lang); // Save choice
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
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
