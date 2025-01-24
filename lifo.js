function one() {
  two();
  console.log("first one");
}
function two() {
  three();
  console.log("second one");
}
function three() {
  four();
  console.log("third one");
}
function four() {
  five();
  console.log("fourth one");
}
function five() {
  console.log("five one");
}

one();
