var twoSum = function(nums, target) {
    let tempArr = [];
    for(let i=0;i<nums.length;i++){
        if(tempArr[nums[i]-1] != undefined){
            nums[0] = i;
            nums[1] = tempArr[nums[i]-1]
            return nums.slice(0,2);
        }else{
            tempArr[target-nums[i]-1] = i;
        }
    }
    
};

let nums = [2,7,11,15]
let target = 9
/* let nums = [3,2,4] 
let target = 6 */

console.log(twoSum(nums,target));