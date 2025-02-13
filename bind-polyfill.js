Function.prototype.customBind = function (...args) {
  let fn = this;
  let args1 = args.slice(1);
  return function (...args2) {
    let mergedArgsArray = [...args1, ...args2];
    fn.apply(args[0], mergedArgsArray);
  };
};

function consol(a, b) {
  console.log(this.name, a, b);
}

const object = {
  name: "ruthu",
  age: 23,
};

const fn = consol.customBind(object);
fn(1, 2);
