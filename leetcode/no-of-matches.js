/**
* @param {number} n
* @return {number}
*/
var numberOfMatches = function(n) {
    let sum=0
 
    while(n>1){
        sum += Math.floor(n/2);
        n = Math.round(n/2)
    }
 
    return sum
};