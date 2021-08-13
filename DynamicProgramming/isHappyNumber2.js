


var isHappy = function (n) {
    let numArr = n.toString().split('');
    let sum = null;
    let memoObj = new Set();
    while(sum !==1){
        sum = numArr.reduce(function(accu,current){
             accu += Number(current) ** 2;
             return accu;
        },0)
        if(memoObj.has(sum)) return false;
        memoObj.add(sum);
        numArr = sum.toString().split('');
    }
    return true;
  };
  
  console.log(isHappy(19));