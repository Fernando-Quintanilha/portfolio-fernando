import { expect, test } from 'vitest';
import { createSecretMatcher } from './secretWord';

const type = (keys: string[]) => {
  const m = createSecretMatcher('rawr');
  return keys.map((k) => m(k));
};

test('dispara na última tecla de rawr', () => {
  expect(type(['r', 'a', 'w', 'r'])).toEqual([false, false, false, true]);
});

test('não diferencia maiúsculas', () => {
  expect(type(['R', 'A', 'W', 'R']).at(-1)).toBe(true);
});

test('tecla errada no meio quebra a sequência', () => {
  expect(type(['r', 'a', 'x', 'w', 'r']).at(-1)).toBe(false);
});

test('teclas especiais são ignoradas', () => {
  expect(type(['r', 'a', 'Shift', 'w', 'r']).at(-1)).toBe(true);
});
