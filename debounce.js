const debounce = (fn, delay) => {
  let timeout;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    const timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
