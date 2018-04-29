/**
 *
 * @author jingjiejiang Apr 29, 2018
 */
const word = 'code';
// const word = 'carerac';
// const word = 'AaBb//a';

const canPermutePalindrome = function (s) {
  // use an 26 length array to store the result
  // conver to lowercase
  // if the sum of the array <= 1, then it is a palindrome string
  const res = [];
  s.split('').forEach((ele) => {
    if (!res[ele]) res[ele] = 0;
    res[ele] += 1;
  });
  const count = Object.values(res).reduce(((acc, cur) => acc + (cur % 2)), 0);
  return count <= 1;
};

console.log(canPermutePalindrome(word));
