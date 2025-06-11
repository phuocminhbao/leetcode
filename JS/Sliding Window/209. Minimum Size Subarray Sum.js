/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    // let [windowTotal, min] = nums.reduce(
    //     (accumulator, num) => {
    //         const [total, preMin] = accumulator;
    //         if (total >= target) {
    //             return accumulator;
    //         }
    //         return [total + num, preMin + 1];
    //     },
    //     [0, 0]
    // );
    // if (windowTotal < target) {
    //     return 0;
    // }
    let leftWin = 0;
    let rightWin = leftWin;
    let min = Infinity,
        windowTotal = nums[leftWin];
    while (leftWin < nums.length && rightWin < nums.length) {
        if (windowTotal >= target) {
            min = Math.min(min, rightWin - leftWin + 1);
            windowTotal -= nums[leftWin];
            if (leftWin === rightWin) {
                rightWin++;
                windowTotal += nums[rightWin];
            }
            leftWin++;
            continue;
        }
        rightWin++;
        windowTotal += nums[rightWin];
    }
    return min === Infinity ? 0 : min;
};

const nums = [2, 3, 1, 2, 4, 3];
const target = 7;
console.log(minSubArrayLen(target, nums));
