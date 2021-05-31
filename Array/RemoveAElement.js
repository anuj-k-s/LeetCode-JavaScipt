
var removeElement = function(nums, val) {
    indexOfMatchingValue= 0;
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] != val){
          nums[indexOfMatchingValue] = nums[i];
          indexOfMatchingValue+=1;
      }
    }
};
nums = [3,2,2,3];
val = 3;
removeElement(nums,val);
console.log(nums);