const params = ['Hello', 'Alaska', 'Dad', 'Peace'];

const keyMap = {
  0: 'qwertyuiop',
  1: 'asdfghjkl',
  2: 'zxcvbnm',
};

let findWords = function (words) {
  // init a key board map
  // iterate through words, check the char in each word whether they have the same value
  // convert to lowercase
  // if it is return, else skip
  words.filter((word) => {
    word = word.toLowerCase();
    const key = Object.keys(keyMap).filter(ele => keyMap[ele].indexOf(word.charAt(0)) > 0);
    console.log('key:' + key);
    let isSame = true;
    [...word].forEach((ele) => { if (keyMap[key].indexOf(ele) < 0) isSame = false; });
    if (isSame) return word;
  });
};

console.log(findWords(params));
