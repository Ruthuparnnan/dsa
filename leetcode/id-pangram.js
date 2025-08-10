/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const arr = Array(26).fill(false);

   for(let char of sentence){
     let index = char.charCodeAt(0) - 97;

     arr[index] = true;
   }

   return arr.every(item=>item === true)
};