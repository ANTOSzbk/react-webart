import { createContext } from "react";

// create the language context with default selected language
export const LanguageContext = createContext({
  language: window.navigator.language.slice(0, 2)
});