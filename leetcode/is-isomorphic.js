function isIsomorphicOptimized(s, t) {
  const mapst = {};
  const mapts = {};

  for (let i = 0; i < s.length; i++) {
    const sc = s[i],
      tc = t[i];

    if ((mapst[sc] && mapst[sc] !== tc) || (mapts[tc] && mapts[tc] !== sc)) {
      return false;
    }

    mapst[sc] = tc;
    mapts[tc] = sc;
  }

  return true;
}

function isIsomorphic(s, t) {
  const mapst = {};
  const mapts = {};

  for (let i = 0; i < s.length; i++) {
    if (
      (!mapst[s[i]] && !mapts[t[i]]) ||
      (mapst[s[i]] === t[i] && mapts[t[i]] === s[i])
    ) {
      mapst[s[i]] = t[i];
      mapts[t[i]] = s[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
