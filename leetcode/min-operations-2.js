var minOperations = function(nums) {
    let total = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            let diff = nums[i - 1] - nums[i] + 1;
            nums[i] += diff;
            total += diff;
        }
    }

    return total;
};
