/**
 *
 * @author jingjie jiang Apr 5, 2017
 */
const arrA = [12, 28, 46, 32, 50];
const arrB = [50, 12, 32, 46, 28];

const anagramMappings = function (A, B) {
  const map = new Map();
  const res = {};
  A.forEach((element, index) => {
    map.set(element, index);
  });

  B.forEach((element, index) => {
    if (map.has(element) >= 0) {
      res[map.get(element)] = index;
    }
  });
  res.length = A.length;

  return Array.prototype.slice.call(res);
};

console.log(anagramMappings(arrA, arrB));


// method 2:
// ref: https://leetcode.com/problems/find-anagram-mappings/discuss/113174/JavaScript-one-line-solution-using-map
// use map method + construct Map obj from an array
// var anagramMappings = function(A, B) {
//     var map = new Map(B.map((num, ind) => [num, ind]));
//     return A.map((num) => map.get(num));
// };
