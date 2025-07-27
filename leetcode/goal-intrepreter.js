function intrepreter(command) {
  let result = "";
  let i = 0;

  while (i < command.length) {
    if (command[i] === "(" && command[i + 1] === ")") {
      result += "o";
      i += 2;
    } else if (command[i] === "(" && command[i + 1] === "a") {
      result += "al";
      i += 4;
    } else {
      result += "G";
      i++;
    }
  }
  return result;
}
