var bubbleSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
           if(arr[j+1] < arr[j]){
               let temp = arr[j+1];
               arr[j+1] = arr[j];
               arr[j] = temp;
           }
        }
    }
}

let arr = [5,1,4,2,8];
let oldArr = [...arr];
bubbleSort(arr);
console.log(oldArr);
console.log(arr);