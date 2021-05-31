var validMountainArray = function(arr) {
    let i = 0;
    let j = arr.length -1;
    let n = arr.length -1;
    while(i<n && arr[i+1]> arr[i]){
        i++;
    }
    while(j>0 && arr[j-1]> arr[j]){
        j--;
    }
    return i>0 && i==j && j<n;


};

let arr = [3,5,3]
console.log(validMountainArray(arr));