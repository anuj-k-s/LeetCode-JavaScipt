var sortedSquares = function(nums) {
    let sortedArr = [];
    let i=0;
    let j= nums.length -1;
    let pointer = nums.length -1;
    while(i != j){
        if(Math.abs(nums[i]) > Math.abs(nums[j])){
           sortedArr[pointer] = Math.pow(nums[i],2);
           i++ 
           pointer--;
        }else{
            sortedArr[pointer] = Math.pow(nums[j],2);
            j--; 
            pointer--; 
        }
    }
    sortedArr[pointer] = Math.pow(nums[i],2);
    return sortedArr;
};

let nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums));