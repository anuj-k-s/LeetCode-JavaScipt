var removeDuplicates = function (nums) {
    uniqueIndex = 0;
    for (let i = 0; i < nums.length-1; i++) {
        if(nums [i+1] == nums[i]){
            continue;
        }else{
            nums[uniqueIndex+1] = nums[i+1]
            uniqueIndex+=1;
        }

    }
   return uniqueIndex+1;
};

let arr = [0,0,0, 1, 2, 2, 2, 2, 3, 3, 4, 5];

removeDuplicates(arr);
console.log(arr);
