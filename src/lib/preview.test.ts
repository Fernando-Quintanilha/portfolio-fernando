import { expect, test } from 'vitest';
import { previewX } from './preview';

test('à direita do ponteiro quando cabe', () => {
  expect(previewX(100, 1200, 320)).toBe(124);
});

test('vira para a esquerda do ponteiro perto da borda direita', () => {
  expect(previewX(1100, 1200, 320)).toBe(1100 - 24 - 320);
});

test('nunca sai pela esquerda', () => {
  expect(previewX(200, 400, 320)).toBe(0);
});
