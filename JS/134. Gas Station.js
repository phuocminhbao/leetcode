/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
    const gasSum = gas.reduce((total, gas) => total + gas, 0);
    const costSum = cost.reduce((total, consume) => total + consume, 0);
    if (gasSum < costSum) {
        return -1;
    }
    let total = 0;
    let start = 0;
    for (let i = start; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        total += diff;
        if (total < 0) {
            total = 0;
            start = i + 1;
        }
    }
    return start;
};

const gas = [5, 8, 2, 8];
const cost = [6, 5, 6, 6];
console.log(canCompleteCircuit(gas, cost));
