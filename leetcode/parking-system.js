function parkingSystemOptimized(carType) {
  if (carType === 1 && this.big > 0) {
    this.big--;
    return true;
  }
  if (carType === 2 && this.medium > 0) {
    this.medium--;
    return true;
  }
  if (carType === 3 && this.small > 0) {
    this.small--;
    return true;
  }
  return false;
}

function parkingSystem(carType) {
  const types = {
    1: "big",
    2: "medium",
    3: "small",
  };
  if (this[types[carType]] > 0) {
    this[types[carType]]--;
    return true;
  }
  return false;
}
