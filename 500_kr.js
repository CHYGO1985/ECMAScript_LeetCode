/**
 *
 * solved
 * @author jingjie jiang Apr 26, 2018
 */
const params = ['Hello', 'Alaska', 'Dad', 'Peace'];

const keyMap = {
  0: 'qwertyuiop',
  1: 'asdfghjkl',
  2: 'zxcvbnm',
};

const findWords = function (words) {
  // init a key board map
  // iterate through words, check the char in each word whether they have the same value
  // convert to lowercase
  // if it is return, else skip
  const res = words.filter((word) => {
    word = word.toLowerCase();
    const key = Object.keys(keyMap).filter(ele => keyMap[ele].indexOf(word.charAt(0)) >= 0);
    let isSame = true;
    [...word].forEach((ele) => { if (keyMap[key].indexOf(ele) < 0) isSame = false; });
    return isSame;
  });
  return res;
};

console.log(findWords(params));
