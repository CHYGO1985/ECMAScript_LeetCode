/* 771. Jewels and Stones
@author Jingjie Jiang on Apr 3, 2018
*/

const j = 'aA';
const s = 'aAAbbbb';

// const j = 'z';
// const s = 'ZZ';

// const numJewelsInStones = function (J, S) {
//   const jewels = new Set(Array.from(J));
//   const stones = Array.from(S);
//   const res = [...stones].filter(ele => jewels.has(ele));
//   return res.length;
// };

// Refactoring: use detrcturing ... to get chars in string S
const numJewelsInStones = function (J, S) {
  const jewels = new Set(Array.from(J));
  // const stones = Array.from(S);
  return [...S].filter(ele => jewels.has(ele)).length;
};

console.log(numJewelsInStones(j, s));

// Method 2: use Array.prototype.reduce()
// ref: https://leetcode.com/problems/jewels-and-stones/discuss/113563/Two-line-JavaScript-solution
// const numJewelsInStones = (J, S) => {
//   const jewels = new Set(J)
//   return S.split('').reduce((res, s) => res + jewels.has(s), 0)
// };

// The accumulator is an arrow function: (res, s) => res + jewels.has(s)
// Set.prototype.has will return boolean value which will be converted to number

// Method 3: use index + filter
// [...S].filter((char) => J.indexOf(char) > -1 ).length
