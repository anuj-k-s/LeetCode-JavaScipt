var rotate = function(nums, k) {
  let splicedArr = nums.splice((nums.length-k)%nums.length,k);
  nums.splice(0,0,...splicedArr);
    return nums;
};
var nums = [1,2];//[2,3,1]
var  k = 6;
console.log(rotate(nums,k));