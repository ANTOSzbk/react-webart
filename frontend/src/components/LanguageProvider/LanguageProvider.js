import React, { useContext, useState } from "react"
import { LanguageContext } from './LanguageContext'

export function LanguageProvider(props) {
    const languageContext = useContext(LanguageContext);
    const [language, setLanguage] = useState(languageContext.language);
  
    const provider = {
      language,
      setLanguage: (selectedLanguage) => {
        setLanguage(selectedLanguage); // it will update the language in state
      }
    };
  
    return (
      <LanguageContext.Provider value={provider}>
        {props.children}
      </LanguageContext.Provider>
    );
  };