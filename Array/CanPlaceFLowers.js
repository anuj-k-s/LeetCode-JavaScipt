var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && flowerbed[i] === 0 && (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)) {
      flowerbed[i] = 1;
      n--;
    } else if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
      flowerbed[i] = 1;
      n--;
    } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n<=0;
};
let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));
