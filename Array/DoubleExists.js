/* Check If N and Its Double Exist */

let arr = [-2,0,10,-19,4,6,-8];

var checkIfExist = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]*2 == newArr[(arr[i]*2)]  || (arr[i]%2 == 0 && arr[i]/2 == newArr[arr[i]/2])){
            return true
        }
        newArr[arr[i]] = arr[i];
    }
    return false;

};
checkIfExist(arr);
