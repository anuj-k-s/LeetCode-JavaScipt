var findDisappearedNumbers = function(nums) {
    let returnedArr = new Array(nums.length);
    console.log(returnedArr);
    for(let i=0;i<nums.length;i++){
        returnedArr[nums[i]-1] = nums[i];
    }
    let count = 0;
    for (let i = 0; i < returnedArr.length; i++) {
        if(!returnedArr[i]){
            returnedArr[count] = i+1;
            count++;
        }
    }
    return returnedArr.slice(0,count);
};

let nums = [1,2,3,4,5,4,7,8];
console.log(findDisappearedNumbers(nums));