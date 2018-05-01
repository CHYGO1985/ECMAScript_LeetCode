/**
 * 
 * @author jingjie jiang May 1, 2018
 */
const params = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]];

const isToeplitzMatrix = function (matrix) {
  // traverse first row and first col
  // for each ele at [r, c], check if ele === matrix[r][c]
  // assume that matrix always has value init
  const maxRow = matrix.length;
  const maxCol = matrix[0].length;
  let res = true;
  // traverse row
  matrix[0].forEach((ele, index) => {
    let row = 0;
    let col = index;
    while (row < maxRow && col < maxCol) {
      if (ele !== matrix[row][col]) res = false;
      row += 1;
      col += 1;
    }
  });

  if (res === false) return res;

  // traverse col
  matrix.forEach((arr, index) => {
    let row = index;
    let col = 0;
    const ele = arr[0];
    while (row < maxRow && col < maxCol) {
      if (ele !== matrix[row][col]) res = false;
      row += 1;
      col += 1;
    }
  });
  return res;
};

console.log(isToeplitzMatrix(params));

// method 2: traditionally use two for loops
