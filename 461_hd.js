/**
 *
 * @author jingjie jiang Apr 8, 2018
 */
const X = 1;
const Y = 4;

const hammingDistance = function (x, y) {
  /* eslint-disable */
  let compared = x ^ y;
  let res = 0;
  for (let a = 0; a < 32; a++) {
    res += compared & 1;
    compared >>= 1;
  }
  /* eslint-enable */
  return res;
};

console.log(hammingDistance(X, Y));
