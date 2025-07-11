const oddCount = () => {
  if (low % 2 === 0 && high % 2 === 0) {
    return Math.floor((high - low) / 2);
  } else {
    return Math.floor((high - low) / 2) + 1;
  }
};
