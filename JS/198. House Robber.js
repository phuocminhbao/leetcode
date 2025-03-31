const rob = (nums) => {
    if (nums.length === 0) return 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            max += nums[i];
            continue;
        }
        if (nums[i] > nums[i + 1]) {
            max += nums[i];
            i++;
        } else {
            max += nums[i + 1];
            i += 2;
        }
    }
    return max;
};

const res = rob([1, 2, 3, 1]);
console.log(res);
