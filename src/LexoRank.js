const minChar = '0';
const maxChar = 'z';

function mid(prev, next) {
  const middleASCII = parseInt((prev.charCodeAt(0) + next.charCodeAt(0)) / 2, 10);
  return String.fromCharCode(middleASCII);
}

const getChar = (str, i, defaultChar) => i >= str.length ? defaultChar : str[i];

export default function LexoRank(prev='', next='') {
  if (prev === '') prev = minChar;
  if (next === '') next = maxChar;

  let rank = '';
  let i = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const prevChar = getChar(prev, i, minChar);
    const nextChar = getChar(next, i, maxChar);

    if (prevChar === nextChar) {
      rank += prevChar;
      i++;
      continue;
    }

    const midChar = mid(prevChar, nextChar)
    if (midChar === prevChar || midChar == nextChar) {
      rank += prevChar;
      i++;
      continue;
    }

    rank += midChar;
    break;
  }

  return rank >= next ? prev : rank;
}