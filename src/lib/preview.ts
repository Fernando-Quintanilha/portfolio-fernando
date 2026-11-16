const GAP = 24;

/**
 * Posição horizontal da prévia flutuante dentro da linha: à direita do ponteiro quando cabe,
 * senão à esquerda, sem nunca sair da linha.
 */
export function previewX(pointerX: number, containerWidth: number, previewWidth: number): number {
  const right = pointerX + GAP;
  if (right + previewWidth <= containerWidth) return right;
  return Math.max(0, pointerX - GAP - previewWidth);
}
