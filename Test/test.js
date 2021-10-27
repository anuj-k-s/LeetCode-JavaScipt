let arr = [0,1,2,3,4,5,6,7,8,9];
var myArray = [[1, 2],[4, 4, 5], [6, 7, 8, 9]];
 var newArr = myArray.reduce((a,b) => a.concat(b));
 console.log(newArr);

function isPanDigitalNo(num){
    let strArr = num.split("");
    let set = new Set(strArr);
    console.log(set.size);

    num.split("").forEach(element => {
        arr[element] = -1
    });

    console.log(arr);

    let sum  = arr.reduce((a,b)=>{
       return  a+b
    });
    console.log(sum);
    return sum === -10;
   
}

console.log(isPanDigitalNo("854796321023456"));
