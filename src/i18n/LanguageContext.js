import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import translations from './translations';

/**
 * Contexte de langue (FR / EN).
 *
 *   const { lang, setLang, t, tr } = useLang();
 *   t('nav.home')          → texte d'interface depuis translations.js
 *   tr({ fr: '…', en: '…' }) → choisit la bonne langue dans une donnée bilingue
 *                             (renvoie la valeur telle quelle si ce n'est pas un objet {fr, en})
 */
const LanguageContext = createContext(null);
const STORAGE_KEY = 'portfolio-lang';

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    /* stockage indisponible : on retombe sur la langue du navigateur */
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language || '' : '';
  return nav.toLowerCase().startsWith('fr') || !nav ? 'fr' : 'en';
}

function lookup(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* rien */
    }
  }, [lang]);

  const setLang = useCallback((l) => setLangState(l === 'en' ? 'en' : 'fr'), []);

  const t = useCallback(
    (key) => {
      const value = lookup(translations[lang], key);
      return value ?? lookup(translations.fr, key) ?? key;
    },
    [lang]
  );

  const tr = useCallback(
    (value) => {
      if (value && typeof value === 'object' && !Array.isArray(value) && ('fr' in value || 'en' in value)) {
        return value[lang] ?? value.fr;
      }
      return value;
    },
    [lang]
  );

  const ctx = useMemo(() => ({ lang, setLang, t, tr }), [lang, setLang, t, tr]);

  return <LanguageContext.Provider value={ctx}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang doit être utilisé dans <LanguageProvider>');
  return ctx;
}
