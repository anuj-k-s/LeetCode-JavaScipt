/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let cnt = {};
    for(let i=0;i<nums.length;i++){
       if(cnt[nums[i]]){
           cnt[nums[i]] += 1; 
       }else{
           cnt[num[i]] = 1;
       }
       if(cnt[nums[i]] >= nums.length/2){
           return nums[i];
       }
    }
     return -1;
};