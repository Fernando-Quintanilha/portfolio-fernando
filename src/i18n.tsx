import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { content, type Content } from './content';
import { detectLang, searchWithLang, type Lang } from './lib/lang';

const KEY = 'fq-lang';

const readStored = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

type Ctx = { lang: Lang; t: Content; setLang: (l: Lang) => void; locale: string };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    detectLang({ search: window.location.search, stored: readStored(), languages: navigator.languages ?? [] }),
  );

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    // A URL vence a escolha salva; se ela traz ?lang=, atualiza para a recarga manter o idioma escolhido.
    const next = searchWithLang(window.location.search, l);
    if (next) window.history.replaceState(null, '', `${window.location.pathname}${next}${window.location.hash}`);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      // sem armazenamento (aba anônima): vale só para esta visita
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = content[lang].meta.title;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, t: content[lang], setLang, locale: lang === 'pt' ? 'pt-BR' : 'en-US' }),
    [lang, setLang],
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang precisa do LangProvider');
  return ctx;
}
