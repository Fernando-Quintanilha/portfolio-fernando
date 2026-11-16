import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useLang } from '../../i18n';

export function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const { locale } = useLang();
  const fmt = (n: number) => Math.round(n).toLocaleString(locale);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reduced) return;
      const state = { n: 0 };
      el.textContent = fmt(0);
      gsap.to(state, {
        n: value,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => {
          el.textContent = fmt(state.n);
        },
      });
    },
    { dependencies: [value, reduced, locale], revertOnUpdate: true },
  );

  return <span ref={ref}>{fmt(value)}</span>;
}
