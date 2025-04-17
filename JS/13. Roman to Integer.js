/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let total = 0;
  let curr = 0;
  while (curr < s.length) {
    const twoLetters = s[curr] + s[curr + 1];
    if (map[twoLetters]) {
      total += map[twoLetters];
      curr += 2;
      continue;
    }
    total += map[s[curr]];
    curr++;
  }
  return total;
};
