import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useLatest } from '../../hooks/useLatest';
import {
  DEFAULT_ROUTE,
  clampToField,
  readout,
  reached,
  stepRobot,
  type RobotState,
  type Vec,
} from '../../lib/robot';
import { drawField, drawRobot, drawTarget, drawTrail } from './draw';

type Props = {
  onReadout?: (text: string) => void;
  /** Ponto (0..1) que o robô deve evitar, como o dinossauro. */
  obstacle?: Vec | null;
  /** Silhueta do robô vista de cima (PNG com fundo transparente). */
  spriteUrl?: string;
};

const TRAIL_MAX = 260;
const AVOID_RADIUS = 0.15;
const AVOID_OFFSET = 0.12;

export function FieldCanvas({ onReadout, obstacle = null, spriteUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const obstacleRef = useLatest<Vec | null>(obstacle);
  const readoutRef = useLatest(onReadout);
  const userTarget = useRef<Vec | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let sprite: HTMLImageElement | null = null;
    if (spriteUrl) {
      sprite = new Image();
      sprite.src = spriteUrl;
    }

    const first = DEFAULT_ROUTE[0];
    let robot: RobotState = {
      x: first.x - 0.12,
      y: first.y + 0.1,
      heading: Math.atan2(-0.1, 0.12),
    };
    let routeIndex = 0;
    const trail: Vec[] = [];

    const robotSize = () =>
      spriteUrl ? Math.max(64, Math.min(w, h) * 0.11) : Math.max(28, Math.min(w, h) * 0.045);

    const currentTarget = (): Vec => {
      const base = userTarget.current ?? DEFAULT_ROUTE[routeIndex];
      const obs = obstacleRef.current;
      if (!obs) return base;
      const dx = robot.x - obs.x;
      const dy = robot.y - obs.y;
      const d = Math.hypot(dx, dy);
      if (d > AVOID_RADIUS || d < 1e-6) return base;
      return clampToField({ x: robot.x + (dx / d) * AVOID_OFFSET, y: robot.y + (dy / d) * AVOID_OFFSET });
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      drawField(ctx, w, h);
      drawTrail(ctx, [...DEFAULT_ROUTE, DEFAULT_ROUTE[0]], w, h);
      DEFAULT_ROUTE.forEach((p) => drawTarget(ctx, p, w, h));
      const a = DEFAULT_ROUTE[0];
      const b = DEFAULT_ROUTE[1];
      const still: RobotState = { ...a, heading: Math.atan2(b.y - a.y, b.x - a.x) };
      drawRobot(ctx, still, w, h, robotSize(), sprite);
      readoutRef.current?.(readout(still));
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) drawStatic();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (sprite) sprite.onload = () => reduced && drawStatic();

    if (reduced) {
      return () => ro.disconnect();
    }

    let raf = 0;
    let last = performance.now();
    let visible = true;
    let frame = 0;

    const tick = (now: number) => {
      raf = 0;
      const dt = now - last;
      last = now;
      const target = currentTarget();
      robot = stepRobot(robot, target, dt);

      if (userTarget.current && reached(robot, userTarget.current)) userTarget.current = null;
      else if (!userTarget.current && reached(robot, DEFAULT_ROUTE[routeIndex])) {
        routeIndex = (routeIndex + 1) % DEFAULT_ROUTE.length;
      }

      trail.push({ x: robot.x, y: robot.y });
      if (trail.length > TRAIL_MAX) trail.shift();

      ctx.clearRect(0, 0, w, h);
      drawField(ctx, w, h);
      drawTrail(ctx, trail, w, h);
      drawTarget(ctx, userTarget.current ?? DEFAULT_ROUTE[routeIndex], w, h);
      drawRobot(ctx, robot, w, h, robotSize(), sprite);
      if (frame++ % 4 === 0) readoutRef.current?.(readout(robot));

      if (visible && !document.hidden) raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [reduced, spriteUrl, obstacleRef, readoutRef]);

  const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    userTarget.current = clampToField({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={onClick}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full cursor-crosshair"
    />
  );
}
