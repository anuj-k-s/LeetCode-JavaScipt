var countPrimes = function (n) {
let notPrime = new Array(n).fill(false);
let count = 0;
for (let i = 2; i < n; i++) {
    if (notPrime[i] == false) {
        count++;
        for (let j = 2; i*j < n; j++) {
            notPrime[i*j] = true;
        }
    }
}

return count;
}
console.log(countPrimes(10));