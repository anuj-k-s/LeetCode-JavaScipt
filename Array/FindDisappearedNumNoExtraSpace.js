var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i]) - 1;
    if (nums[value] > 0) {
      nums[value] = -nums[value];
    }
  }
  let returnedArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      returnedArr.push(i + 1);
    }
  }

  return returnedArr;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
