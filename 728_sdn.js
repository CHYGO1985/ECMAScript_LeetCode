/**
 * solved
 * @author jingjie jiang Apr 8, 2018
 */
const L = 1;
const R = 22;

const checker = function (num) {
  let temp = num;
  while (Math.trunc(temp / 10) !== 0) {
    if ((num % 10 === 0) || (num % Math.trunc(temp % 10) !== 0)) {
      return false;
    }
    temp = Math.trunc(temp / 10);
  }
  return num % temp === 0;
};

const selfDividingNumbers = function (left, right) {
  const res = [];
  for (let i = left; i <= right; i += 1) {
    if (checker(i) === true) {
      res.push(i);
    }
  }
  return res;
};

console.log(selfDividingNumbers(L, R));

// method 2:
// ref: https://leetcode.com/problems/self-dividing-numbers/discuss/109394/My-Javascript-Solution
// function isSelfDividingNumber(num) {
//   return num.toString()
//       .split('')
//       .map(Number) // use the constructor of Number to convert char digit to int digit
//       .map((digit) => digit !== 0 && num % digit === 0)
//       .reduce((acc, val) => acc && val);
// }

// /**
// * @param {number} left
// * @param {number} right
// * @return {number[]}
// */
// var selfDividingNumbers = function(left, right) {
//   return new Array(right - left + 1)
//       .fill(0)
//       .map((val, index) => left + index)
//       .filter((val) => isSelfDividingNumber(val));
// };
