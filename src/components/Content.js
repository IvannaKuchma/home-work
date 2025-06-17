import React, {useContext} from "react";
import { LanguageContext} from "../hooks/useLanguage";
import { translations } from "../translations";

export const Content = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <div className="content">
            <h2>{t.about}</h2>
            <p>This is some main content.</p>
        </div>
    );
}