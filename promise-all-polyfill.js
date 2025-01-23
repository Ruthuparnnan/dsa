const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          results[i] = res; // Preserve the order of results
          completed += 1;
          if (completed === promises.length) {
            resolve(results); // Resolve when all promises are resolved
          }
        })
        .catch((err) => {
          reject(err); // Reject immediately if any promise rejects
        });
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
const promise1 = new Promise((resolve) => resolve("HI"));
const promise2 = new Promise((resolve) => resolve("HI"));

console.log(promiseAll([promise1, promise2]));
