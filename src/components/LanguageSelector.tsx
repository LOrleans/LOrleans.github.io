import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../locales';

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'pt', label: 'Português', flag: '🇧🇷' },
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    ];

    return (
        <div className="relative group z-50">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <span className="uppercase font-bold text-sm">{language}</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 pt-2 hidden group-hover:flex flex-col w-32">
                <div className="bg-[#080e1d] border border-white/10 rounded-xl shadow-xl flex flex-col overflow-hidden w-full">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                                language === lang.code ? 'bg-white/5 text-[#3bbffa]' : 'text-white'
                            }`}
                        >
                            <span>{lang.flag}</span>
                            <span className="text-sm font-medium">{lang.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
