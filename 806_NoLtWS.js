const w = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
const s = 'bbbcccdddaaa';

const getWidthVal = function (ele) {
  const base = 'a'.charCodeAt(0);
  return ele.charCodeAt(0) - base; 
}

//TODO: use map + reduce
const numberOfLines = function (widths, S) {
  const 
  [...S].map(ele => widths[getWidthVal(ele)]).reduce;    
};

console.log(numberOfLines(w, s));
