function maxNumberOfBalloons(text) {
  const count = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (const char of text) {
    count[char]++;
  }

  // 'l' and 'o' appear twice in "balloon"
  count.l = Math.floor(count.l / 2);
  count.o = Math.floor(count.o / 2);

  return Math.min(count.b, count.a, count.l, count.o, count.n);
}
