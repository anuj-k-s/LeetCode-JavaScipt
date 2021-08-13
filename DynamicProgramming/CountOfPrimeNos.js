var countPrimes = function (n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  let countPrimeNos = 0;
  for (let i = 2; i < n; i++) {
    countPrimeNos += isPrimeNo(i);
  }
  return countPrimeNos;
};
var isPrimeNo = function (n) {
  for (let j = 2; j * j <= n; j = j+1) {
      if(n%j===0) return 0;
  }
  return 1;
};
console.log(countPrimes(10));
