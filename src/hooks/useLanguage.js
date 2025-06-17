import React, {createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();
export const LanguageProvider = ({children}) => {
    const storedLanguage = localStorage.getItem("language") || "en";
    const [language, setLanguage] = useState(storedLanguage);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}