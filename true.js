// Create a function which returns the number of true values there are in an array.

function countTrue(array) {
  let count = 0;
  array.map((element) => {
    if (element) {
      count++;
    }
  });

  return count;
}

const count = countTrue([false, false, true, true, false]);
