

var replaceElements = function(arr) {
    let newMax = arr[arr.length-1];
    for (let i = arr.length-2; i >= 0; i--) {
        let temp = arr[i+1];
        arr[i+1] = newMax;
        if(temp>newMax){
            newMax = temp
        }
       
    }
    arr[0] = newMax;
    arr[arr.length-1] = -1;
    return arr;
};

var arr =  [17,18,5,4,6,1];
console.log(replaceElements(arr));