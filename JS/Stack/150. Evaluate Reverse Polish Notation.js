/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
    const popAndCalculate = () => {
        if (tokens.length <= 0) {
            return 0;
        }
        const operatorOrNumber = tokens.pop();
        const actualValue = Number(operatorOrNumber);
        const isOperator = Number.isNaN(actualValue);
        if (isOperator) {
            const secondNumber = popAndCalculate();
            const firstNumber = popAndCalculate();
            switch (operatorOrNumber) {
                case "+":
                    return firstNumber + secondNumber;
                case "-":
                    return firstNumber - secondNumber;
                case "*":
                    return firstNumber * secondNumber;
                case "/":
                    const divisionRes = String(
                        firstNumber / secondNumber
                    ).split(".")[0];
                    return Number(divisionRes);
                default:
                    throw new Error(
                        `${operatorOrNumber} is not a valid operator`
                    );
            }
        }
        return actualValue;
    };
    return popAndCalculate();
};
