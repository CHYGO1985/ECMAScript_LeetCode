/**
 * sovled
 * @author jingjie jiang Apr 11, 2018
 */
// const arr = [1, 4, 2, 3, 5, 6];
const arr = [-470, 66, -4835, -5623，-1];

const arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = nums.reduce((acc, cur, index) => {
    if (index > 0 && index % 2 !== 0) {
      return acc + Math.min(cur, nums[index - 1]);
    }
    return acc;
  }, 0);
  return res;
};

console.log(arrayPairSum(arr));
