import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import type { Vec } from '../../lib/robot';
import { useLatest } from '../../hooks/useLatest';

export function DinoDrawing({ walking = false, className = '' }: { walking?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={`${className} ${walking ? 'dino-walking' : ''}`}
      fill="none"
      stroke="#0E1B24"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M70 30 V14 Q70 8 76 8 H102 Q108 8 108 14 V20 Q108 24 104 24 H90 V28 Q88 36 84 40 Q78 47 72 52 Q62 60 50 58 Q30 56 6 52 Q34 46 56 44 Q66 40 70 30 Z"
        fill="#E3EAEE"
      />
      <path d="M90 24 H97" />
      <path d="M80 44 l7 3 l-1 4" />
      <g className="dino-legs-a">
        <path d="M56 58 l-4 12 h7" />
        <path d="M68 56 l5 14 h7" />
      </g>
      <g className="dino-legs-b">
        <path d="M56 58 l3 12 h7" />
        <path d="M68 56 l-2 14 h7" />
      </g>
      <circle cx="98" cy="14" r="2.2" fill="#FF4F1A" stroke="none" />
    </svg>
  );
}

type Props = {
  walking: boolean;
  onDone: () => void;
  onPosition?: (p: Vec | null) => void;
};

const LANE_Y = 0.4;

/** Atravessa o campo da entrada da esquerda para a direita em 6 s. */
export function Dino({ walking, onDone, onPosition }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const done = useLatest(onDone);
  const pos = useLatest(onPosition);

  useEffect(() => {
    const node = el.current;
    const parent = node?.parentElement;
    if (!walking || !node || !parent) return;
    const pw = parent.clientWidth;
    const nw = node.clientWidth;
    const tween = gsap.fromTo(
      node,
      { x: -nw },
      {
        x: pw + nw,
        duration: 6,
        ease: 'none',
        onUpdate: () => {
          const x = Number(gsap.getProperty(node, 'x'));
          pos.current?.({ x: (x + nw / 2) / pw, y: LANE_Y });
        },
        onComplete: () => {
          pos.current?.(null);
          done.current();
        },
      },
    );
    return () => {
      tween.kill();
      pos.current?.(null);
    };
  }, [walking, done, pos]);

  if (!walking) return null;
  return (
    <div
      ref={el}
      className="pointer-events-none absolute left-0 z-[1] w-28 sm:w-36"
      style={{ top: `calc(${LANE_Y * 100}% - 4.5rem)` }}
    >
      <DinoDrawing walking />
    </div>
  );
}
