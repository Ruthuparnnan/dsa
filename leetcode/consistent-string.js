/**
* @param {string} allowed
* @param {string[]} words
* @return {number}
*/
var countConsistentStrings = function(allowed, words) {
    let count =0;
    const set = new Set(allowed);
 
    for(let word of words){
        let isAllowed = true;
 
        for(let char of word){
            if(!set.has(char)){
                isAllowed = false
                break;
            }
        }
 
        if(isAllowed)count++
    }
 
    return count
};