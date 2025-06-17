import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { LanguageProvider } from "./hooks/useLanguage";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import "./index.css";

export const App = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="app">
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}
export default App;