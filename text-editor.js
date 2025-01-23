const textEditor = () => {
  let result = ""; // Current text
  let history = []; // History stack to track changes for UNDO

  return function (operation = "") {
    const [operator, text] = operation.split(" ");

    switch (operator) {
      case "ADD":
        history.push(result); // Save the current state before modification
        result += (result ? " " : "") + text; // Add text with a space if needed
        break;

      case "DELETE":
        history.push(result); // Save the current state before modification
        result = result.split(" ").slice(0, -1).join(" "); // Remove the last word
        break;

      case "UNDO":
        if (history.length > 0) {
          result = history.pop(); // Revert to the last saved state
        } else {
          console.log("No more history to undo.");
        }
        break;

      default:
        console.log("Invalid operation.");
    }

    return result;
  };
};

// Example usage:
const runEditor = textEditor();

runEditor("ADD how");
runEditor("ADD are");
runEditor("ADD you");
runEditor("ADD doing");
runEditor("DELETE kl");
runEditor("DELETE kl");
console.log(runEditor("DELETE kl")); // No more history to undo.
