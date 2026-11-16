export type Lang = 'pt' | 'en';

const isLang = (v: unknown): v is Lang => v === 'pt' || v === 'en';

/** Se a URL já traz ?lang=, devolve a query com o idioma novo; senão, null (não mexe no endereço). */
export function searchWithLang(search: string, lang: Lang): string | null {
  const params = new URLSearchParams(search);
  if (!params.has('lang')) return null;
  params.set('lang', lang);
  return `?${params.toString()}`;
}

type Input ={ search: string; stored: string | null; languages: readonly string[] };

/** Ordem: ?lang= na URL, escolha salva, idioma do navegador (pt → português, resto → inglês). */
export function detectLang({ search, stored, languages }: Input): Lang {
  const fromUrl = new URLSearchParams(search).get('lang');
  if (isLang(fromUrl)) return fromUrl;
  if (isLang(stored)) return stored;
  if (languages.length === 0) return 'pt';
  return languages.some((l) => l.toLowerCase().startsWith('pt')) ? 'pt' : 'en';
}
