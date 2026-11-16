export type Lang = 'pt' | 'en';

const isLang = (v: unknown): v is Lang => v === 'pt' || v === 'en';

type Input = { search: string; stored: string | null; languages: readonly string[] };

/** Ordem: ?lang= na URL, escolha salva, idioma do navegador (pt → português, resto → inglês). */
export function detectLang({ search, stored, languages }: Input): Lang {
  const fromUrl = new URLSearchParams(search).get('lang');
  if (isLang(fromUrl)) return fromUrl;
  if (isLang(stored)) return stored;
  if (languages.length === 0) return 'pt';
  return languages.some((l) => l.toLowerCase().startsWith('pt')) ? 'pt' : 'en';
}
