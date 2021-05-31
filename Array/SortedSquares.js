var sortedSquares = function(nums) {
    let resultedNums = nums.map (num => num * num) .sort((a,b) => a-b )
    return resultedNums
};

let nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums));