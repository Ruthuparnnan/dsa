/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bullCount = 0;
  let cowCount = 0;
  let secretMap = new Map();
  let guessMap = new Map();

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) bullCount++;
    else {
      secretMap.set(secret[i], (secretMap.get(secret[i]) || 0) + 1);
      guessMap.set(guess[i], (guessMap.get(guess[i]) || 0) + 1);
    }
  }

  for (let [key, value] of secretMap.entries()) {
    cowCount += Math.min(value, guessMap.get(key) || 0);
  }

  return `${bullCount}A${cowCount}B`;
};
