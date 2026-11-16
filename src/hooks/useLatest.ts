import { useLayoutEffect, useRef } from 'react';

/** Ref que sempre aponta para o valor mais recente, sem reiniciar efeitos. */
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref;
}
