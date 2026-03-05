/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
     const count = new Array(26).fill(0);

    for (let c of s) {
        count[c.charCodeAt(0) - 97]++;
    }

    const digit = new Array(10).fill(0);

    digit[0] = count['z'.charCodeAt(0) - 97];
    digit[2] = count['w'.charCodeAt(0) - 97];
    digit[4] = count['u'.charCodeAt(0) - 97];
    digit[6] = count['x'.charCodeAt(0) - 97];
    digit[8] = count['g'.charCodeAt(0) - 97];

    digit[3] = count['h'.charCodeAt(0) - 97] - digit[8];
    digit[5] = count['f'.charCodeAt(0) - 97] - digit[4];
    digit[7] = count['s'.charCodeAt(0) - 97] - digit[6];

    digit[1] = count['o'.charCodeAt(0) - 97] - digit[0] - digit[2] - digit[4];

    digit[9] = count['i'.charCodeAt(0) - 97] - digit[5] - digit[6] - digit[8];

    let result = "";

    for (let i = 0; i <= 9; i++) {
        result += String(i).repeat(digit[i]);
    }

    return result;
};