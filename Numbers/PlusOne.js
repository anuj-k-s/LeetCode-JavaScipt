var plusOne = function(digits){
   let carry = 1;
    let i = digits.length -1;
    let val = 0;
   while(i>=0 && carry){
    val = digits[i] + 1;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
   }
   if (carry) digits.unshift(carry);
   return digits;
};
console.log(plusOne([9]));
/*
var plusOne = function(digits)  {
    digits[digits.length - 1] += 1
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] > 9) {
            digits[i] = digits[i] % 10;
            digits[i - 1] += 1;
        } else {
            break;
        }
    }
    
    if (digits[0] > 9) {
        digits[0] = digits[0] % 10;
        digits.unshift(1);
    }
    return digits;
};

*/
