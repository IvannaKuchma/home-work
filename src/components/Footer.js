import React, {useContext} from "react";
import { LanguageContext} from "../hooks/useLanguage";
import { translations } from "../translations";

export const Footer = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <footer className="footer">
            <p>{t.footerText}</p>
        </footer>
    );
}