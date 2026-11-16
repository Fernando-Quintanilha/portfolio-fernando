import { useRef } from 'react';
import { Section } from '../Section';
import type { Project } from '../../content';
import { useLang } from '../../i18n';
import { gsap } from '../../lib/gsap';
import { previewX } from '../../lib/preview';

const FLOAT_QUERY = '(hover: hover) and (min-width: 768px)';

function Row({ p, i, shotLabel }: { p: Project; i: number; shotLabel: string }) {
  const preview = useRef<HTMLImageElement>(null);
  const moveX = useRef<((v: number) => void) | null>(null);
  const moveY = useRef<((v: number) => void) | null>(null);

  // Mesma condição das classes `float:` abaixo: prévia flutuante só com mouse e tela larga.
  const canHover = () => window.matchMedia(FLOAT_QUERY).matches;

  const onEnter = () => {
    if (!preview.current || !canHover()) return;
    moveX.current ??= gsap.quickTo(preview.current, 'x', { duration: 0.5, ease: 'power3.out' });
    moveY.current ??= gsap.quickTo(preview.current, 'y', { duration: 0.5, ease: 'power3.out' });
    gsap.to(preview.current, { autoAlpha: 1, scale: 1, duration: 0.3 });
  };
  const onLeave = () => {
    if (preview.current) gsap.to(preview.current, { autoAlpha: 0, scale: 0.96, duration: 0.25 });
  };
  const onMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const w = preview.current?.offsetWidth ?? 320;
    moveX.current?.(previewX(e.clientX - r.left, r.width, w));
    moveY.current?.(e.clientY - r.top - 100);
  };

  return (
    <li
      data-reveal
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      className="relative grid gap-4 border-t border-ink py-8 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.4fr)] md:gap-8"
    >
      <p className="font-mono text-[13px] text-ink-soft">{String(i + 1).padStart(2, '0')}</p>
      <h3 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-tightest">
        {p.name}
      </h3>
      <div>
        <p className="leading-relaxed">{p.summary}</p>
        <p className="mt-3 font-mono text-[12px] text-ink-soft">{p.stack.join(' · ')}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-line">
              {l.label} ↗
            </a>
          ))}
          {p.note && <span className="font-mono text-[12px] text-ink-soft">{p.note}</span>}
        </div>
        {p.image && (
          <img
            src={p.image}
            alt={`${shotLabel} ${p.name}`}
            loading="lazy"
            className="mt-6 aspect-[16/10] w-full border border-ink object-cover object-top float:hidden"
          />
        )}
      </div>

      {p.image && (
        <img
          ref={preview}
          src={p.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none invisible absolute left-0 top-0 z-10 hidden aspect-[16/10] w-80 scale-95 border border-ink object-cover object-top opacity-0 float:block"
        />
      )}
    </li>
  );
}

export function Projects() {
  const { t } = useLang();
  return (
    <Section id="projetos" index="02" label={t.projects.label} title={t.projects.title}>
      <ul className="border-b border-ink">
        {t.projects.items.map((p, i) => (
          <Row key={p.name} p={p} i={i} shotLabel={t.projects.screenshotOf} />
        ))}
      </ul>
    </Section>
  );
}
