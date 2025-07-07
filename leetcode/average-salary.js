function averageSalary(salary) {
  salary.sort((a, b) => a - b);
  const slicedArray = salary.slice(1, salary.length - 1);

  return slicedArray.reduce((acc, elem) => acc + elem, 0) / slicedArray.length;
}

console.log(averageSalary([1, 3, 2, 4]));
