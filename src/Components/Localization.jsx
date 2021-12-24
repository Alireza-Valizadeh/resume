import React, { createContext, useContext } from "react";
import usePersistedState from "./PersistedValue";
// import ar from "../l10n/ar.json";
// import da from "../l10n/da.json";
import de from "../i10n/de.json";
import en from "../i10n/en.json";
// import es from "../l10n/es.json";
import fa from "../i10n/fa.json";
// import fr from "../l10n/fr.json";
// import it from "../l10n/it.json";
// import nl from "../l10n/nl.json";

const languages = {
  //   ar: { data: ar, name: "العربية" },
  de: { data: de, name: "Deutsch" },
  //   da: { data: da, name: "Dansk" },
  en: { data: en, name: "English" },
  //   es: { data: es, name: "Español" },
  fa: { data: fa, name: "فارسی" },
  //   fr: { data: fr, name: "Français" },
  //   it: { data: it, name: "Italiano" },
  //   nl: { data: nl, name: "Nederlands" },
};

const getDefaultLanguage = () => {
  const browserLanguages = window.navigator.languages
    ? window.navigator.languages.slice()
    : [];
  const browserLanguage =
    window.navigator.userLanguage || window.navigator.language;
  browserLanguages.push(browserLanguage);
  browserLanguages.push(browserLanguage.substring(0, 2));

  for (let i = 0; i < browserLanguages.length; i += 1) {
    let language = browserLanguages[i].replace("-", "");
    if (language in languages) {
      return language;
    }
    if (language.length > 2) {
      language = language.substring(0, 2);
      if (language in languages) {
        return language;
      }
    }
  }
  return "en";
};

const LocalizationContext = createContext({
  languages,
  language: "en",
  setLanguage: () => {},
});

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = usePersistedState(
    "language",
    getDefaultLanguage()
  );

  return (
    <LocalizationContext.Provider value={{ languages, language, setLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);

export const useTranslation = () => {
  const context = useContext(LocalizationContext);
  const { data } = context.languages[context.language];
  return (key) => data[key];
};

export const useTranslationKeys = (predicate) => {
  const context = useContext(LocalizationContext);
  const { data } = context.languages[context.language];
  return Object.keys(data).filter(predicate);
};
