import { useRef } from 'react';
import { gsap, SplitText, useGSAP } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type Props = {
  id: string;
  index: '01' | '02' | '03' | '04';
  label: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, index, label, title, children }: Props) {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;
      const trigger = { trigger: root.current, start: 'top 80%' };
      gsap.from('[data-rule]', { scaleX: 0, transformOrigin: 'left', duration: 1, ease: 'power3.inOut', scrollTrigger: trigger });
      const title = root.current.querySelector<HTMLElement>('[data-title]');
      if (!title) return;
      // autoSplit: espera a fonte carregar e refaz as linhas quando a largura muda;
      // sem isso, a primeira visita mede as linhas com a fonte reserva e quebra uma palavra por linha.
      const split = SplitText.create(title, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, { yPercent: 105, duration: 0.9, ease: 'power4.out', stagger: 0.08, scrollTrigger: trigger }),
      });
      gsap.utils.toArray<HTMLElement>('[data-reveal]', root.current).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 18,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
      return () => split.revert();
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );

  return (
    <section ref={root} id={id} className="scroll-mt-14 px-4 py-20 sm:px-8 sm:py-28">
      <div data-rule className="h-[2px] w-full bg-ink" />
      <div className="mt-4 flex items-baseline justify-between">
        <p className="label">
          {index} — {label}
        </p>
        <p className="label hidden sm:block">fernando quintanilha</p>
      </div>
      <h2
        data-title
        className="mt-8 max-w-5xl font-display text-[clamp(2.4rem,6.5vw,5.5rem)] font-extrabold leading-[0.92] tracking-tightest"
      >
        {title}
      </h2>
      <div className="mt-12 sm:mt-16">{children}</div>
    </section>
  );
}
