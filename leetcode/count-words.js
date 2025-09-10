/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count = 0;
    const freq1 = new Map()
    const freq2 = new Map()

    for(let char of words1){
        freq1.set(char,(freq1.get(char)||0)+1)
    }

    for(let char of words2){
        freq2.set(char,(freq2.get(char)||0)+1)
    }

    for(let [char,value] of freq1.entries()){
        if(value === 1){
            if(freq2.get(char) === 1)count++
        }
    }

    return count;
}
;