var sortArrayByParity = function(nums) {
    let indexOfOddValue = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]%2==0){
            let temp = nums[indexOfOddValue];
            nums[indexOfOddValue] = nums[i];
            nums[i] = temp;
            indexOfOddValue+=1;
        }
     
    }   
};
nums = [3,1,2,4]
sortArrayByParity(nums);
console.log(nums);