function nothing(num) {
  for (let i = 0; i <= num; i++) {
    for (let j = num; j >= 0; j--) {
      if (j === i) {
        process.stdout.write("*".repeat(i));
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}
nothing(5);
