/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length)
        return findMedianSortedArrays(nums2, nums1);

    const m = nums1.length,
        n = nums2.length;
    let low = 0,
        high = m;

    while (low <= high) {
        const i = Math.floor((low + high) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;

        const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
        const minRight1 = i === m ? Infinity : nums1[i];

        const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
        const minRight2 = j === n ? Infinity : nums2[j];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 0) {
                return (
                    (Math.max(maxLeft1, maxLeft2) +
                        Math.min(minRight1, minRight2)) /
                    2
                );
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }

    throw new Error("Input arrays are not sorted");
};
