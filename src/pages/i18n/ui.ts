export const defaultLang: keyof typeof ui = "es";

export const languages = {
    es: 'Español',
    en: 'English',
};

export const ui = {
    es: {
        "intro.rol": "Desarrollador Fullstack",
        "intro.desc1": "He vivido y estudiado en China durante 15 años y me considero una persona con mucha capacidad de adaptación y resolutiva. Por la influencia de la eduación oriental, se me ha enseñado siempre a aprender y a trabajar de forma continua y enérgica.",
        "intro.desc2": "Me gusta mucho el mundo de la programación y la tecnología, mi objetivo es dar lo mejor de mí en cada proyecto que se me presente.",
        "exp.accenture.title1": "Simulación de calibración para bancos - Angular",
        "exp.accenture.title2": "Aplicación web para gestión de formaciones en empresas - Angular",
        "exp.accenture.desc1": [
            "Implementación y desarrollo de una aplicación web para simular calibración.",
            "Integración en la plataforma de Cornerstone.",
        ],
        "exp.accenture.desc2": [
            "Implementación y desarrollo de una aplicación web para gestión de formación de nuevos empleados y RRHH.",
            "Integración en la plataforma de Cornerstone.",
        ],
        "exp.actualidad": "Actualidad"
    },
    en: {
        "intro.rol": "Fullstack Developer",
        "intro.desc1": "I have lived and studied in China for 15 years and I consider myself to be a very adaptable and resolute person. Due to the influence of oriental education, I have always been taught to learn and to work continuously and energetically.",
        "intro.desc2": "I really like the world of programming and technology, my goal is to give the best of me in every project that comes my way.",
        "exp.accenture.title1": "Calibration Simulation for Banks - Angular",
        "exp.accenture.title2": "Web application for training management in companies - Angular",
        "exp.accenture.desc1": [
            "Implementation and development of a web application to simulate calibration.",
            "Cornerstone platform integration.",
        ],
        "exp.accenture.desc2": [
            "Implementation and development of a web application for HR and new employee training management.",
            "Cornerstone platform integration.",
        ],
        "exp.actualidad": "Current"
    }
};

// Obtener el idioma actual desde localStorage o usar el idioma por defecto
export function getActualLang(): keyof typeof ui {
    if (typeof window !== "undefined") {
        const savedLang = localStorage.getItem('language') as keyof typeof ui;
        if (savedLang && languages[savedLang]) {
            return savedLang; // Devolver el idioma guardado en localStorage
        }
    }
    return defaultLang;  // Retornar el idioma por defecto si no se encuentra en localStorage
}

// Establecer el idioma actual y guardarlo en localStorage
export function setActualLang(lang: keyof typeof ui): void {
    if (languages[lang]) {
        if (typeof window !== "undefined") {
            localStorage.setItem('language', lang); // Guardar el idioma en localStorage
        }
    }
}

// Obtener las traducciones del idioma dado
export function getLang(lang: keyof typeof ui) {
    return ui[lang];
}

// Obtener las traducciones del idioma actual
export function getCurrentTranslations() {
    return getLang(getActualLang());
}