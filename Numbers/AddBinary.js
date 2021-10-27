var addBinary = function (a, b) {
  let till = Math.max(a.length, b.length);
  if (a.length > b.length) {
    b = b.padStart(a.length, "0");
  } else if (a.length < b.length) {
    a = a.padStart(b.length, "0");
  }
  let arr = [];
  let carry = 0;
  for (let i = till - 1; i >= 0; i--) {
   
    if (carry) {
     let result = getbinarysum(a[i] | 0, b[i] | 0);
     if(result == 10){
        carry = 1;
        arr[i] = 0;
     }
     getbinarysum()
    } else {
      let result = getbinarysum(a[i] | 0, b[i] | 0);
      if(result == 10){
          carry = 1;
          arr[i] = 0;
      }else{
        arr[i] = result; 
      }
      
    }
  }
  if (carry) arr.unshift(1);
  return arr.join("");
};
function getCarry(a, b) {
  if (a == 1 && b == 1) {
    return 1;
  } else if (a == 10 || b == 10) {
    return 1;
  } else {
    return 0;
  }
}
function getbinarysum(a, b) {
  if ((a == 0 && b == 1) || (a == 1 && b == 0)) {
    return 1;
  } else if (a == 0 && b == 0) {
    return 0;
  } else if (a == 1 && b == 1) {
    return 10;
  }
}

console.log(addBinary("11", "1"));
