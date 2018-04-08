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
  for (let i = left; i <= right; i++) {
    if (checker(i) === true) {
      res.push(i);
    }
  }
  return res;
};

console.log(selfDividingNumbers(L, R));
