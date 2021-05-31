var validMountainArray = function(arr) {
    if(arr.length < 3){
        return false;
    }
    let flag = true;
    for(let i=0;i<arr.length-1;i++){
       if(flag){
            if(arr[i+1] > arr[i]){
                continue;
            }else if(arr[i+1] < arr[i] && i){
                 flag = false;
            }else{
                return false;
            }
       }else{
            if(arr[i+1] < arr[i]){
                continue;
            }else{
                return false;
            }
       }
    }
    return flag == false ? true : false;

};

let arr = [3,5,3]
console.log(validMountainArray(arr));