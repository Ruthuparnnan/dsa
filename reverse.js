function reverse(str) {
  let output = [];
  let array = [...str];
  //   let array =  Array.from(str)
  array.forEach((element) => {
    output.unshift(element);
  });

  return output.join("");
}

console.log(reverse("uhtuR"));
