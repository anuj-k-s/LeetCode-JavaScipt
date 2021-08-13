


var isHappy = function (n) {
  let ocrnceOfNum = {};
  while (n != 1) {
    let sum = 0;
    while (n > 0) {
      sum += Math.pow(Math.floor(n % 10), 2);
      n = Math.floor(n / 10);
    }
    if (ocrnceOfNum[sum]) {
      return false;
    }else{
      ocrnceOfNum[sum] = sum
    }
    n = sum;
  }
  return true;
};

console.log(isHappy(2));