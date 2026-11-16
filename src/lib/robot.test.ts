import { describe, expect, test } from 'vitest';
import { clampToField, readout, reached, stepRobot, type RobotState } from './robot';

const deg = (d: number) => (d * Math.PI) / 180;

describe('stepRobot', () => {
  test('aproxima do alvo', () => {
    let s: RobotState = { x: 0.2, y: 0.7, heading: 0 };
    const alvo = { x: 0.8, y: 0.3 };
    for (let i = 0; i < 200; i++) s = stepRobot(s, alvo, 16);
    expect(reached(s, alvo)).toBe(true);
  });

  test('vira pelo menor ângulo', () => {
    const s: RobotState = { x: 0.5, y: 0.5, heading: deg(350) };
    const alvo = { x: 0.5 + Math.cos(deg(10)) * 0.3, y: 0.5 + Math.sin(deg(10)) * 0.3 };
    const n = stepRobot(s, alvo, 16);
    const delta = Math.atan2(Math.sin(n.heading - s.heading), Math.cos(n.heading - s.heading));
    expect(delta).toBeGreaterThan(0);
  });

  test('limita dt grande', () => {
    const s: RobotState = { x: 0.2, y: 0.2, heading: 0 };
    const alvo = { x: 0.9, y: 0.2 };
    const grande = stepRobot(s, alvo, 60000);
    const normal = stepRobot(s, alvo, 50);
    const dist = (a: RobotState) => Math.hypot(a.x - s.x, a.y - s.y);
    expect(dist(grande)).toBeLessThanOrEqual(dist(normal) + 1e-9);
  });
});

test('clampToField', () => {
  expect(clampToField({ x: -1, y: 2 })).toEqual({ x: 0.04, y: 0.96 });
});

test('readout', () => {
  expect(readout({ x: 0.5, y: 0.3, heading: Math.PI / 2 })).toBe('x 1.83  y 1.10  θ 90°');
});
