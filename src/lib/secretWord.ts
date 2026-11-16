/** Devolve uma função que recebe `KeyboardEvent.key` e diz se a palavra acabou de ser digitada. */
export function createSecretMatcher(word: string): (key: string) => boolean {
  const target = word.toLowerCase();
  let buffer = '';
  return (key: string) => {
    if (key.length !== 1) return false;
    buffer = (buffer + key.toLowerCase()).slice(-target.length);
    return buffer === target;
  };
}
