// check the last avail bit, remember the pos
// reverse the num to num1
// use num1 & (a number that has pos num of 1 bits)
const param = 13; // params: 5, 1, 13

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
