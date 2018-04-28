// const word = 'code';
// const word = 'carerac';
const word = '"AaBb//a"';

const canPermutePalindrome = function (s) {
  // use an 26 length array to store the result
  // conver to lowercase
  // if the sum of the array <= 1, then it is a palindrome string
  const res = [];
  const arr = s.split('');
  arr.forEach((ele) => {
    const index = ele.charCodeAt(0) - 'a'.charCodeAt(0);
    if (!res[index]) res[index] = 0;
    res[index] += 1;
  });
  console.log(res);
  const count = res.reduce(((acc, cur) => acc += (cur % 2)), 0);
  return count <= 1;
};

console.log(canPermutePalindrome(word));
