"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "mr";

type Translations = {
    hero: {
        title: string;
        subtitle: string;
        cta: string;
    };
    story: {
        title: string;
        heading: string;
        body1: string;
    };
    nav: {
        home: string;
        amenities: string;
        contact: string;
    };
};

const translations: Record<Language, Translations> = {
    en: {
        hero: {
            title: "Where Luxury Meets Serenity",
            subtitle: "Experience the perfect blend of modern living and natural tranquility at Mauli Green Park, Supa.",
            cta: "Explore The Master Plan",
        },
        story: {
            title: "The Philosophy",
            heading: "Silence in the heart of the chaos.",
            body1: "True luxury is not about adding more. It is about stripping away the non-essential until only the profound remains.",
        },
        nav: {
            home: "Home",
            amenities: "Amenities",
            contact: "Contact",
        }
    },
    mr: {
        hero: {
            title: "जिथे समृद्धी आणि शांतता एकत्र येतात",
            subtitle: "माऊली ग्रीन पार्क, सुपा येथे आधुनिक जीवनशैली आणि निसर्गाच्या सानिध्याचा अनुभव घ्या.",
            cta: "मास्टर प्लॅन पहा",
        },
        story: {
            title: "आमची विचारसरणी",
            heading: "गोंधळाच्या जगात शांततेचा शोध.",
            body1: "खरी समृद्धी म्हणजे अधिक मिळवणे नव्हे, तर अनावश्यक गोष्टी सोडून देऊन जीवनाचा खरा आनंद घेणे.",
        },
        nav: {
            home: "मुख्य पान",
            amenities: "सुविधा",
            contact: "संपर्क",
        }
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
