/**
 * 
 * @author jingjie jiang Apr 30, 2018
 */
// const metrics = [[1, 2], [3, 4]];
// const row = 1;
// const col = 4;

// const metrics = [[1, 2], [3, 4]];
// const row = 2;
// const col = 4;

const metrics = [[1, 2, 3], [4, 5, 6]];
const row = 3;
const col = 2;

const matrixReshape = function (nums, r, c) {
  // check the new shape whether it requires less or more than the original metrics
  // if so, output the original one
  // traverse the original two dimensional array (from l to r, from top to bottom) into the new one
  const oldTotal = nums.length * nums[0].length;
  const newTotal = r * c;
  if (oldTotal < newTotal || oldTotal > newTotal) return nums;
  const res = [];
  let curRow = 0;
  let curCol = 0;
  nums.forEach((rows) => {
    rows.forEach((ele) => {
      if (typeof res[curRow] === 'undefined') res[curRow] = new Array(c);
      res[curRow][curCol] = ele;
      curCol += 1;
      curRow += Math.trunc(curCol / c);
      curCol %= c;
    });
  });

  return res;
};

console.log(matrixReshape(metrics, row, col));


// method 2: concat and splice
// https://leetcode.com/problems/reshape-the-matrix/discuss/102551/Intuitive-Javascript-Solution
// var matrixReshape = function(nums, r, c) {
//     const numsRow = nums.length;
//     const numsCol = nums[0].length;
//     const output = [];
    
//     let flatNums = null;
    
//     // return original if new dimension doesn't match 
//     if (r * c !== numsRow * numsCol) return nums;
    
//     // deconstruct the original array and reconstruct new array
//     flatNums = nums.reduce((acc, curr) => acc.concat(curr), []);
    
//     for (let i = 0; i < r; i++) 
//         output.push(flatNums.splice(0, c));
    
//     return output;
// };