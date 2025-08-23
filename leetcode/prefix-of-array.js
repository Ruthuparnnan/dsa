/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let string='';

    for(let word of words){
        if(!s.includes(word))return false;
        string+=word;
        if(string === s)return true;
    }

    return string === s;
};