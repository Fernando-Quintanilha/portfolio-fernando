import type { RobotState, Vec } from '../../lib/robot';

export const INK = '#151515';
export const SIGNAL = '#FF4F1A';

/** Grade de placas quadradas (6 no lado menor), com subgrade de 3 por placa. */
export function drawField(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const tile = Math.min(w, h) / 6;
  const sub = tile / 3;
  const ox = (w % tile) / 2;
  const oy = (h % tile) / 2;

  const lines = (step: number, alpha: number) => {
    ctx.strokeStyle = `rgba(21,21,21,${alpha})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = ox % step; x <= w; x += step) {
      ctx.moveTo(Math.round(x) + 0.5, 0);
      ctx.lineTo(Math.round(x) + 0.5, h);
    }
    for (let y = oy % step; y <= h; y += step) {
      ctx.moveTo(0, Math.round(y) + 0.5);
      ctx.lineTo(w, Math.round(y) + 0.5);
    }
    ctx.stroke();
  };
  lines(sub, 0.04);
  lines(tile, 0.08);
}

export function drawTrail(ctx: CanvasRenderingContext2D, pts: Vec[], w: number, h: number) {
  if (pts.length < 2) return;
  ctx.save();
  ctx.strokeStyle = SIGNAL;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 4]);
  ctx.beginPath();
  pts.forEach((p, i) => (i ? ctx.lineTo(p.x * w, p.y * h) : ctx.moveTo(p.x * w, p.y * h)));
  ctx.stroke();
  ctx.restore();
}

export function drawTarget(ctx: CanvasRenderingContext2D, p: Vec, w: number, h: number) {
  const x = p.x * w;
  const y = p.y * h;
  ctx.save();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, 7, 0, Math.PI * 2);
  ctx.moveTo(x - 13, y);
  ctx.lineTo(x - 4, y);
  ctx.moveTo(x + 4, y);
  ctx.lineTo(x + 13, y);
  ctx.moveTo(x, y - 13);
  ctx.lineTo(x, y - 4);
  ctx.moveTo(x, y + 4);
  ctx.lineTo(x, y + 13);
  ctx.stroke();
  ctx.restore();
}

/**
 * Robô visto de cima. Com `sprite` (silhueta tirada do modelo 3D), desenha a imagem;
 * sem ela, o desenho provisório: chassi, 4 rodas mecanum e a frente em laranja.
 */
export function drawRobot(
  ctx: CanvasRenderingContext2D,
  s: RobotState,
  w: number,
  h: number,
  size: number,
  sprite?: HTMLImageElement | null,
) {
  ctx.save();
  ctx.translate(s.x * w, s.y * h);
  ctx.rotate(s.heading);

  if (sprite && sprite.complete && sprite.naturalWidth > 0) {
    // Na imagem, a frente do robô aponta para cima; no campo, heading 0 aponta para a direita.
    ctx.rotate(Math.PI / 2);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    const k = size / Math.max(sprite.naturalWidth, sprite.naturalHeight);
    const sw = sprite.naturalWidth * k;
    const sh = sprite.naturalHeight * k;
    ctx.drawImage(sprite, -sw / 2, -sh / 2, sw, sh);
    ctx.restore();
    return;
  }

  const half = size / 2;
  const wheelL = size * 0.36;
  const wheelW = size * 0.16;

  ctx.fillStyle = INK;
  ctx.fillRect(-half * 0.78, -half * 0.78, half * 1.56, half * 1.56);

  for (const [wx, wy] of [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ]) {
    const cx = wx * (half - wheelL / 2);
    const cy = wy * (half * 0.78 + wheelW / 2);
    ctx.fillStyle = INK;
    ctx.fillRect(cx - wheelL / 2, cy - wheelW / 2, wheelL, wheelW);
    ctx.strokeStyle = '#ECE9E2';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = -2; i <= 2; i++) {
      const x = cx + i * (wheelL / 5);
      ctx.moveTo(x - wheelW / 2 * wx * wy, cy - wheelW / 2);
      ctx.lineTo(x + wheelW / 2 * wx * wy, cy + wheelW / 2);
    }
    ctx.stroke();
  }

  ctx.fillStyle = SIGNAL;
  ctx.fillRect(half * 0.35, -size * 0.07, half * 0.55, size * 0.14);
  ctx.restore();
}
