/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length; // avoid overflow rotations

    const rotatedHalf = nums.slice(nums.length - k);
    const rest = nums.slice(0, nums.length - k);

    nums.length = 0; // clear array
    nums.push(...rotatedHalf, ...rest); // modify in-place
};
// ===========================================================
var rotato = function(nums, k) {
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
