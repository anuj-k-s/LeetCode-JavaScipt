var findDuplicates = function(nums) {
    let resultantArr = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[Math.abs(nums[i])-1] < 0){
            resultantArr.push(Math.abs(nums[i]));
        }else{
            nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1];
        }
        
    }
    return resultantArr;
};

//let nums = [4,3,2,7,8,2,3,1];
let nums = [1,1,2];
//let nums = [1];

console.log(findDuplicates(nums));