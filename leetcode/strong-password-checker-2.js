/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
        if (password.length < 8) return false;

    let isUpperCaseExist = false;
    let isLowerCaseExist=false;
    let isNumberExist=false;
    let isSpecialExist=false;
    const specials = new Set('!@#$%^&*()-+');

    for(let i=0;i<password.length;i++){
        const ch = password[i];

        if(i>0 && ch === password[i-1])return false;

         if (ch >= 'a' && ch <= 'z') isLowerCaseExist = true;
        else if (ch >= 'A' && ch <= 'Z') isUpperCaseExist = true;
        else if (ch >= '0' && ch <= '9') isNumberExist = true;
        else if (specials.has(ch)) isSpecialExist = true;

    }

return isUpperCaseExist && isLowerCaseExist && isNumberExist && isSpecialExist;
};