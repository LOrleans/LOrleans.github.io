export type Language = 'pt' | 'en' | 'es' | 'de';

export interface Translations {
    aboutMe: {
        title: string;
        profileTitle: string;
        greeting: string;
        role: string;
        greetingEnd: string;
        specialty: string;
        specialtyHighlight: string;
        specialtyEnd: string;
        techStackTitle: string;
    };
    techCategories: {
        frontend: string;
        backend: string;
        tools: string;
    };
    hero: {
        role: string;
        titlePart1: string;
        titleHighlight: string;
        description: string;
        btnWork: string;
        btnStack: string;
    };
}

export const translations: Record<Language, Translations> = {
    en: {
        aboutMe: {
            title: "ABOUT ME",
            profileTitle: "Personal Profile",
            greeting: "Hello! I'm a ",
            role: "Software Developer",
            greetingEnd: " passionate about tech.",
            specialty: "I specialize in ",
            specialtyHighlight: "AI and Frontend Engineering",
            specialtyEnd: ", building high-performance apps.",
            techStackTitle: "Tech Stack"
        },
        techCategories: {
            frontend: "Front-end",
            backend: "Back-end",
            tools: "Tools"
        },
        hero: {
            role: "FRONTEND ENGINEER & AI SCIENTIST",
            titlePart1: "Developing your",
            titleHighlight: "digital presence",
            description: "I'm a software developer passionate about creating innovative solutions.",
            btnWork: "See my work",
            btnStack: "My development stack"
        }
    },
    pt: {
        aboutMe: {
            title: "SOBRE MIM",
            profileTitle: "Perfil Pessoal",
            greeting: "Olá! Eu sou um ",
            role: "Desenvolvedor de Software",
            greetingEnd: " apaixonado por tecnologia.",
            specialty: "Eu me especializo em ",
            specialtyHighlight: "IA e Engenharia Frontend",
            specialtyEnd: ", construindo aplicativos de alta performance.",
            techStackTitle: "Tecnologias"
        },
        techCategories: {
            frontend: "Front-end",
            backend: "Back-end",
            tools: "Ferramentas"
        },
        hero: {
            role: "ENGENHEIRO FRONTEND E CIENTISTA DE IA",
            titlePart1: "Desenvolvendo sua",
            titleHighlight: "presença digital",
            description: "Sou um desenvolvedor de software apaixonado por criar soluções inovadoras.",
            btnWork: "Ver meu trabalho",
            btnStack: "Minha stack de desenvolvimento"
        }
    },
    es: {
        aboutMe: {
            title: "SOBRE MÍ",
            profileTitle: "Perfil Personal",
            greeting: "¡Hola! Soy un ",
            role: "Desarrollador de Software",
            greetingEnd: " apasionado por la tecnología.",
            specialty: "Me especializo en ",
            specialtyHighlight: "IA e Ingeniería Frontend",
            specialtyEnd: ", construyendo aplicaciones de alto rendimiento.",
            techStackTitle: "Tecnologías"
        },
        techCategories: {
            frontend: "Front-end",
            backend: "Back-end",
            tools: "Herramientas"
        },
        hero: {
            role: "INGENIERO FRONTEND Y CIENTÍFICO DE IA",
            titlePart1: "Desarrollando tu",
            titleHighlight: "presencia digital",
            description: "Soy un desarrollador de software apasionado por crear soluciones innovadoras.",
            btnWork: "Ver mi trabajo",
            btnStack: "Mi stack de desarrollo"
        }
    },
    de: {
        aboutMe: {
            title: "ÜBER MICH",
            profileTitle: "Persönliches Profil",
            greeting: "Hallo! Ich bin ein ",
            role: "Softwareentwickler",
            greetingEnd: " mit Leidenschaft für Technik.",
            specialty: "Ich spezialisiere mich auf ",
            specialtyHighlight: "KI und Frontend-Engineering",
            specialtyEnd: " und entwickle leistungsstarke Apps.",
            techStackTitle: "Technologien"
        },
        techCategories: {
            frontend: "Front-end",
            backend: "Back-end",
            tools: "Werkzeuge"
        },
        hero: {
            role: "FRONTEND-INGENIEUR & KI-WISSENSCHAFTLER",
            titlePart1: "Entwicklung deiner",
            titleHighlight: "digitalen Präsenz",
            description: "Ich bin ein Softwareentwickler mit Leidenschaft für die Entwicklung innovativer Lösungen.",
            btnWork: "Meine Arbeit ansehen",
            btnStack: "Mein Entwicklungs-Stack"
        }
    }
};
