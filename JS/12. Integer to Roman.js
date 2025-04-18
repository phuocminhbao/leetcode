/**
 * @param {number} num
 * @return {string}
 */

const map = {
  oneDigit: {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    subtractiveForm: [4, 9],
  },
  twoDigits: {
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    subtractiveForm: [40, 90],
  },
  threeDigits: {
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
    subtractiveForm: [400, 900],
  },
};

const intToRoman = (num) => {
  const roman = [];
  let remainNum = num;
  const substract = (number) => {
    if (number >= 1000) {
      const decimals = Math.floor(number / 1000);
      const remain = number % 1000;
      roman.push(romanMap[1000].repeat(decimals));
      substract(remain);
      return;
    }
    const isSubtractiveForm =
      String(number).startsWith("4") || String(number).startsWith("9");
    if (number >= 100) {
      const romanMap = map.threeDigits;
      if (isSubtractiveForm) {
        for (let i = romanMap.subtractiveForm.length - 1; i >= 0; i--) {
            const SubtractiveFormNum = romanMap.subtractiveForm[i];
            if ()
        }
      }
    }
  };

  return roman.join("");
};

const num = "MCMXCIV";
console.log(intToRoman(num));
