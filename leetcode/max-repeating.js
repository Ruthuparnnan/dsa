function maxRepeating(sequence,word) {
  let seq = word;
  let count = 1;

  while (sequence.includes(seq)) {
    seq += word;
    count++;
  }

  return count - 1;
}
