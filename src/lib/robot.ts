// Navegação do robô no campo. Unidades do campo: 0..1 em x e y (y cresce para baixo, como no canvas).

export type Vec = { x: number; y: number };
export type RobotState = { x: number; y: number; heading: number };

const FIELD_METERS = 3.66; // campo da FTC: 12 pés
const MAX_DT_MS = 50;
const MAX_TURN = 4; // rad/s
const TURN_GAIN = 6;
const MAX_SPEED = 0.35; // campo/s
const SPEED_GAIN = 4;
const REACHED = 0.012;

export const DEFAULT_ROUTE: Vec[] = [
  { x: 0.72, y: 0.22 },
  { x: 0.88, y: 0.48 },
  { x: 0.66, y: 0.78 },
  { x: 0.42, y: 0.62 },
  { x: 0.55, y: 0.35 },
];

const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

export function stepRobot(s: RobotState, target: Vec, dtMs: number): RobotState {
  const dt = Math.min(Math.max(dtMs, 0), MAX_DT_MS) / 1000;
  const dx = target.x - s.x;
  const dy = target.y - s.y;
  const dist = Math.hypot(dx, dy);
  if (dist < 1e-6) return s;

  const error = wrap(Math.atan2(dy, dx) - s.heading);
  const turn = Math.max(-MAX_TURN, Math.min(MAX_TURN, error * TURN_GAIN));
  const heading = s.heading + turn * dt;

  const speed = Math.min(MAX_SPEED, dist * SPEED_GAIN) * Math.max(0, Math.cos(error));
  const step = Math.min(speed * dt, dist);
  return { x: s.x + Math.cos(heading) * step, y: s.y + Math.sin(heading) * step, heading };
}

export function clampToField(p: Vec, margin = 0.04): Vec {
  const c = (v: number) => Math.min(1 - margin, Math.max(margin, v));
  return { x: c(p.x), y: c(p.y) };
}

export function reached(s: RobotState, target: Vec): boolean {
  return Math.hypot(target.x - s.x, target.y - s.y) < REACHED;
}

export function readout(s: RobotState): string {
  const deg = Math.round((((s.heading * 180) / Math.PI) % 360 + 360) % 360) % 360;
  const m = (v: number) => (v * FIELD_METERS).toFixed(2);
  return `x ${m(s.x)}  y ${m(s.y)}  θ ${deg}°`;
}
