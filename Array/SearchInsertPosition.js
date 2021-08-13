var  nums = [3,5,6];
var  target = 7;
var searchInsert = function(nums, target) {
    let y = nums.findIndex((x,index) => {
        if(target === x || x> target){
            return true
        }
        
    })
    console.log(y);
};
searchInsert(nums,target);