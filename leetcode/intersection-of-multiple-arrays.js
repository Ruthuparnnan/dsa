/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let countMap=new Map();

    for(let array of nums){
        for(let num of array){
            countMap.set(num,(countMap.get(num)||0)+1);
        }
    }

    return [...countMap.entries()].filter(([key,value])=>value>=nums.length).map(([key])=>key).sort((a,b)=>a-b);

}