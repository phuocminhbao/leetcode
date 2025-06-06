/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let chicken = 0;
    let duck = 0;
    let chickenAdded = 0;
    let duckAdded = 0;
    const temp = [];

    while (chickenAdded < m || duckAdded < n) {
        const chickenNum = nums1[chicken] ?? Infinity;
        const duckNum = nums2[duck] ?? Infinity;
        if (chickenNum === 0) {
            chicken++;
            continue;
        }
        if (duckNum === 0) {
            duck++;
            continue;
        }
        if (chickenNum <= duckNum) {
            temp.push(chickenNum);
            chicken++;
            chickenAdded++;
            continue;
        }
        if (duckNum < chickenNum) {
            temp.push(duckNum);
            duck++;
            duckAdded++;
            continue;
        }
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === Infinity) {
            nums1[i] = 0;
            continue;
        }
        nums1[i] = temp[i];
    }
};

const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
const nums2 = [1, 2, 2];

merge(nums1, 6, nums2, 3);
console.log(nums1);
