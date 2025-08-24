/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let count=0;

    for(let i=0;i<word.length;i++){
      if(i===0){
         let currentVal = word[i].charCodeAt(0) - 96;
       let prevVal = 'a'.charCodeAt(0) - 96;
      let minValue = Math.min(Math.abs(prevVal - currentVal), 26 - Math.abs(prevVal - currentVal))
      count+=minValue +1;
      }else{
         let currentVal = word[i].charCodeAt(0) - 96;
       let prevVal = word[i-1].charCodeAt(0) - 96;
      let minValue = Math.min(Math.abs(prevVal - currentVal), 26 - Math.abs(prevVal - currentVal))
      count+=minValue +1;
      }
    }

    return count;
};