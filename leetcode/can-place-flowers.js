function canPlaceFlowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const emptyLeft = i === 0 || flowerbed[i - 1] === 0;
      const emptyRight = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }

  return n <= 0;
}

// Test cases
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
