/**
 *
 * 476. Number Complement: solved.
 *
 * @author jingjie jiang Apr 17, 2018
 */
const param = 13; // params: 5, 1, 13

/*eslint-disable*/
const findComplement = function (num) {
  let tmp = num;
  let pos = 0;
  for (let i = 0; i < 32; i += 1) {
    if ((tmp & 1) === 1) {
      pos = i;
    }
    tmp >>= 1;
  }

  let mask = 0;
  tmp = 1;
  for (let i = 0; i <= pos; i += 1) {
    mask |= tmp;
    tmp <<= 1;
  }

  num = (~num) & mask;
  return num;
};

console.log(findComplement(param));
