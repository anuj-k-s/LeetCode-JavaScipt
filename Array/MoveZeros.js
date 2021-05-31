
var moveZeroes = function(nums) {
    let nonZeroFoundAt = 0; 
    for (let i = 0; i < nums.length; i++) {
       if(nums[i] != 0){
          nums[nonZeroFoundAt] = nums[i];
           nonZeroFoundAt +=1;
       } 
        
    }
    for(let j=nonZeroFoundAt;j<nums.length;j++){
        nums[j] =0;
    }
};
let arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr);