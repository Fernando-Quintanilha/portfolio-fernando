import { useState } from 'react';
import { links } from '../../content';
import { scrollToId } from '../../hooks/useSmoothScroll';
import { useLang } from '../../i18n';
import type { Lang } from '../../lib/lang';

type Props = { onLogoTap?: () => void };

function LangToggle() {
  const { lang, setLang } = useLang();
  const opt = (l: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      lang={l === 'pt' ? 'pt-BR' : 'en'}
      className={lang === l ? 'text-ink underline decoration-signal decoration-2 underline-offset-4' : 'text-ink-soft hover:text-ink'}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Idioma / Language">
      {opt('pt', 'PT')}
      <span className="text-ink-soft">/</span>
      {opt('en', 'EN')}
    </div>
  );
}

export function Navbar({ onLogoTap }: Props) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const items = [
    { id: 'trabalho', n: '01', label: t.nav.work },
    { id: 'projetos', n: '02', label: t.nav.projects },
    { id: 'robotica', n: '03', label: t.nav.robotics },
    { id: 'contato', n: '04', label: t.nav.contact },
  ];

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/15 bg-paper/95">
      <nav className="mx-auto flex h-14 max-w-[1240px] items-center justify-between gap-4 px-4 font-mono text-[13px] sm:px-8 xl:border-x xl:border-ink/15">
        <a
          href="#inicio"
          onClick={(e) => {
            go('inicio')(e);
            onLogoTap?.();
          }}
          className="font-medium"
          aria-label={t.nav.home}
        >
          FQ/
        </a>

        <ul className="hidden gap-6 md:flex">
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} onClick={go(it.id)} className="hover:text-signal-text">
                <span className="text-ink-soft">{it.n}</span> {it.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <LangToggle />
          <a href={links.curriculo} target="_blank" rel="noreferrer" className="link-line hidden md:inline-flex">
            {t.nav.resume} ↗
          </a>
          <button
            type="button"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          data-lenis-prevent
          className="h-[calc(100svh-3.5rem)] overflow-y-auto overscroll-contain bg-paper px-4 pb-8 pt-8 md:hidden"
        >
          <ul className="flex flex-col">
            {items.map((it) => (
              <li key={it.id} className="border-t border-ink/20">
                <a
                  href={`#${it.id}`}
                  onClick={go(it.id)}
                  className="flex items-baseline gap-4 py-4 font-display text-4xl font-extrabold tracking-tightest"
                >
                  <span className="font-mono text-[12px] font-normal tracking-normal text-ink-soft">{it.n}</span>
                  {it.label}
                </a>
              </li>
            ))}
            <li className="border-t border-ink/20 pt-6">
              <a href={links.curriculo} target="_blank" rel="noreferrer" className="link-line">
                {t.nav.resume} ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
