import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../hooks/useTheme";
import { LanguageContext } from "../hooks/useLanguage";
import { translations } from "../translations";

export const Header = () => {
   const { toggleTheme } = useContext(ThemeContext);   
   const { language, changeLanguage } = useContext(LanguageContext);   
   const t = translations[language];

   return (
       <header className="header">
           <h1>{t.welcome}</h1>
               <button onClick={toggleTheme}>{t.changeTheme}</button>
               <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
                   <option value="en">English</option>
                   <option value="es">Українська</option>
               </select>
       </header>
   );
};