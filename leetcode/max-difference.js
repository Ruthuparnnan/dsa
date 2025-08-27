/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minVal = nums[0];       // smallest number seen so far
    let maxDifference = -1;     // default if no valid difference exists

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minVal) {
            maxDifference = Math.max(maxDifference, nums[i] - minVal);
        }
        minVal = Math.min(minVal, nums[i]); // update min if current is smaller
    }

    return maxDifference;
};
