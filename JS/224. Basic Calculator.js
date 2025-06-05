/**
 * @param {string} s
 * @return {number}
 */
const calculate1 = (s) => {
  const str = s.replaceAll(" ", "");
  let i = 0;
  const getGroup = () => {
    const group = [];
    while (i < str.length) {
      const char = str[i];
      if (char === "(") {
        i++;
        group.push(getGroup());
        continue;
      }
      if (char === ")") {
        i++;
        return group;
      }
      if (
        ["+", "-"].some((operator) =>
          [char, group[group.length - 1]].includes(operator)
        ) ||
        group.length === 0
      ) {
        group.push(char);
        i++;
        continue;
      }
      group[group.length - 1] = `${group[group.length - 1]}${char}`;
      i++;
    }
    return group;
  };
  const main = getGroup();

  // Calculate
  const calculate = (strArr) => {
    let operator = "+";
    return strArr.reduce((total, item, index) => {
      if (["+", "-"].includes(item)) {
        operator = item;
        return total;
      }
      let number = item;
      if (typeof item === "object") {
        number = calculate(item);
      }
      if (index === 0) {
        return Number(number);
      }
      if (operator === "+") {
        return total + Number(number);
      }
      if (operator === "-") {
        return total - Number(number);
      }
    }, 0);
  };
  return calculate(main);
};

const calculate = (s) => {
  const str = s;
  let i = 0;
  const isOperator = (char) => ["+", "-"].includes(char);
  const calculatedNumber = () => {
    const stack = [];
    let isCalculated = true;
    const calculateStack = () => {
      if (stack.length === 1) {
        stack.push(Number(stack.pop()));
        return;
      }
      const secondNumber = stack.pop() ?? 0;
      const operator = stack.pop();
      const firstNumber = stack.pop() ?? 0;
      const res = (() => {
        if (operator === "+") {
          return Number(firstNumber) + Number(secondNumber);
        }
        if (operator === "-") {
          return Number(firstNumber) - Number(secondNumber);
        }
        throw new Error("Unexpected operator");
      })();
      stack.push(res);
      isCalculated = true;
    };
    while (i <= str.length) {
      const currSChar = str[i];
      if (currSChar === " ") {
        i++;
        continue;
      }
      if (currSChar === "(") {
        i++;
        const subCalculatedNumber = calculatedNumber();
        stack.push(subCalculatedNumber);
        continue;
      }
      if (currSChar === ")" || i === str.length) {
        calculateStack();
        i++;
        return stack[0];
      }
      if (stack.length === 0) {
        if (isOperator(currSChar)) {
          stack.push(0);
          isCalculated = false;
        }
        stack.push(currSChar);
        i++;
        continue;
      }
      if (isOperator(currSChar) && isCalculated) {
        stack.push(currSChar);
        i++;
        isCalculated = false;
        continue;
      }
      if (isOperator(currSChar) && !isCalculated) {
        calculateStack();
        continue;
      }

      const previousItem = stack.pop();
      if (isOperator(previousItem)) {
        stack.push(previousItem);
        stack.push(currSChar);
      } else {
        stack.push(`${previousItem}${currSChar}`);
      }
      i++;
    }
    return stack[0];
  };
  return calculatedNumber();
};

const s = "-2+ 1";
console.log(calculate(s));
