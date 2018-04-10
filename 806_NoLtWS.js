// const w = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
//   10, 10, 10, 10, 10, 10];
// const s = 'bbbcccdddaaa';

const w = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10];
const s = 'abcdefghijklmnopqrstuvwxyz';

/**
 * solved.
 * @author jingjiejiang Apr 10, 2018 
 */
const getWidthVal = function (ele) {
  const base = 'a'.charCodeAt(0);
  return ele.charCodeAt(0) - base;
};

const numberOfLines = function (widths, S) {
  let count = S.length === 0 ? 0 : 1;
  const lastWidth = [...S].map(ele => widths[getWidthVal(ele)])
    .reduce((preVal, curVal) => {
      if (curVal + preVal > 100) {
        count += 1;
        preVal = curVal;
      } else {
        curVal += preVal;
      }

      return curVal;
    });

  return [count, lastWidth];
};

console.log(numberOfLines(w, s));
