var halvesAreAlike = function(s) {
    const set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let aCount = 0, bCount = 0;
    const n = s.length;
 
    for (let i = 0; i < n; i++) {
        if (set.has(s[i])) {
            if (i < n / 2) aCount++;
            else bCount++;
        }
    }
 
    return aCount === bCount;
};