import { useState } from 'react';
import { links } from '../../content';
import { scrollToId } from '../../hooks/useSmoothScroll';

const items = [
  { id: 'trabalho', n: '01', label: 'trabalho' },
  { id: 'projetos', n: '02', label: 'projetos' },
  { id: 'robotica', n: '03', label: 'robótica' },
  { id: 'contato', n: '04', label: 'contato' },
];

type Props = { onLogoTap?: () => void };

export function Navbar({ onLogoTap }: Props) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/15 bg-paper/95">
      <nav className="flex h-14 items-center justify-between px-4 font-mono text-[13px] sm:px-8">
        <a
          href="#inicio"
          onClick={(e) => {
            go('inicio')(e);
            onLogoTap?.();
          }}
          className="font-medium"
          aria-label="Fernando Quintanilha, voltar ao início"
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

        <a href={links.curriculo} target="_blank" rel="noreferrer" className="link-line hidden md:inline-flex">
          currículo ↗
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'fechar' : 'menu'}
        </button>
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
                currículo ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
