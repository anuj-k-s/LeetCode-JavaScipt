var thirdMax = function(nums) {
    let leastValue = -Number.MAX_SAFE_INTEGER;
    let max = leastValue;
    let secondMax = leastValue;
    let thirdMax = leastValue;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > max){
            thirdMax = secondMax;
            secondMax = max;
            max = nums[i];
        }else if( nums[i] < max && nums[i] > thirdMax && nums[i] > secondMax){
            thirdMax = secondMax;
            secondMax = nums[i];
        }else if(nums[i] < secondMax && nums[i] > thirdMax){
            thirdMax = nums[i];

        }
        
    }
    return thirdMax > leastValue ? thirdMax : max;
};
let nums = [1,2,-2147483648]
console.log(thirdMax(nums));