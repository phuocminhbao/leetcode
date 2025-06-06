/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = (num) => {
  const map = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  const roman = [];
  let remainNum = num;
  while (remainNum > 0) {
    if (remainNum >= 1000) {
      const decimals = Math.floor(remainNum / 1000);
      remainNum = remainNum % 1000;
      roman.push(map[1000].repeat(decimals));
      continue;
    }
    const isSubtractive = [4, 9].some((num) =>
      String(remainNum).startsWith(num)
    );
    if (isSubtractive) {
      if (remainNum >= 900) {
        roman.push(map[900]);
        remainNum = remainNum - 900;
        continue;
      }
      if (remainNum >= 400) {
        roman.push(map[400]);
        remainNum = remainNum - 400;
        continue;
      }
      if (remainNum >= 90) {
        roman.push(map[90]);
        remainNum = remainNum - 90;
        continue;
      }
      if (remainNum >= 40) {
        roman.push(map[40]);
        remainNum = remainNum - 40;
        continue;
      }
      if (remainNum >= 9) {
        roman.push(map[9]);
        remainNum = remainNum - 9;
        continue;
      }
      if (remainNum >= 4) {
        roman.push(map[4]);
        remainNum = remainNum - 4;
        continue;
      }
    }
    if (remainNum >= 500) {
      roman.push(map[500]);
      remainNum = remainNum - 500;
      continue;
    }
    if (remainNum >= 100) {
      roman.push(map[100]);
      remainNum = remainNum - 100;
      continue;
    }
    if (remainNum >= 50) {
      roman.push(map[50]);
      remainNum = remainNum - 50;
      continue;
    }
    if (remainNum >= 10) {
      roman.push(map[10]);
      remainNum = remainNum - 10;
      continue;
    }
    if (remainNum >= 5) {
      roman.push(map[5]);
      remainNum = remainNum - 5;
      continue;
    }
    if (remainNum >= 1) {
      roman.push(map[1]);
      remainNum = remainNum - 1;
      continue;
    }
  }

  return roman.join("");
};

const num = 3749;
console.log(intToRoman(num));
