import { useRef, useState } from 'react';
import { FieldCanvas } from '../Field/FieldCanvas';
import { links, profile } from '../../content';
import { gsap, useGSAP } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import type { Vec } from '../../lib/robot';

type Props = {
  obstacle?: Vec | null;
  spriteUrl?: string;
  children?: React.ReactNode;
};

export function Hero({ obstacle = null, spriteUrl, children }: Props) {
  const [coords, setCoords] = useState('');
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [touch] = useState(() => window.matchMedia('(hover: none)').matches);

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from('[data-hero-line]', {
        yPercent: 110,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.08,
        delay: 0.15,
      });
      gsap.from('[data-hero-fade]', { opacity: 0, y: 12, duration: 0.8, delay: 0.6, stagger: 0.06 });
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );

  return (
    <section ref={root} id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <FieldCanvas onReadout={setCoords} obstacle={obstacle} spriteUrl={spriteUrl} />
      {children}

      <div className="pointer-events-none relative flex min-h-[100svh] flex-col justify-end px-4 pb-8 pt-24 sm:px-8 sm:pb-10">
        <p data-hero-fade className="label mb-4">
          {profile.role}
        </p>

        <h1 className="font-display text-[clamp(3.4rem,12vw,10rem)] font-extrabold leading-[0.86] tracking-tightest">
          <span className="block overflow-hidden pb-[0.04em]">
            <span data-hero-line className="block">
              {profile.first}
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <span data-hero-line className="block">
              {profile.last}
            </span>
          </span>
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-hero-fade>
            <p className="max-w-md font-mono text-[14px] leading-relaxed">
              Desenvolvedor back-end. {profile.line}
            </p>
            <ul className="pointer-events-auto mt-5 flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <a className="link-line" href={links.curriculo} target="_blank" rel="noreferrer">
                  currículo ↗
                </a>
              </li>
              <li>
                <a className="link-line" href={links.github} target="_blank" rel="noreferrer">
                  github ↗
                </a>
              </li>
              <li>
                <a className="link-line" href={links.linkedin} target="_blank" rel="noreferrer">
                  linkedin ↗
                </a>
              </li>
              <li>
                <a className="link-line" href={`mailto:${links.email}`}>
                  e-mail ↗
                </a>
              </li>
            </ul>
          </div>

          <div data-hero-fade className="font-mono text-[12px] sm:text-right">
            <p className="min-h-[1.2em] text-signal-text" aria-hidden="true">
              {coords}
            </p>
            <p className="mt-1 text-ink-soft">
              {reduced ? 'rota planejada' : `${touch ? 'toque' : 'clique'} no campo para mudar a rota`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
