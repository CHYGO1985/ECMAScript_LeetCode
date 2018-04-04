/**
 *
 * 804. Unique Morse Code Words
 * note: solved
 *
 * @author jingjiejiang Apr 4, 2018
 *
 */

// Method 1:
// build an object or a map with kay value pair
// convert string to morse code
// add res to set

// const params = ['gin', 'zen', 'gig', 'msg'];
const params = ['gin'];

const uniqueMorseRepresentations = function (words) {
  const morseDic = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
  const codes = [...words].map(word => word.split('').map(ele => morseDic[ele.charCodeAt(0) - 'a'.charCodeAt(0)]).join(''));
  return new Set(codes).size;
};

console.log(uniqueMorseRepresentations(params));

// Method 2:
// use map + reduce
// ref: https://leetcode.com/problems/unique-morse-code-words/discuss/120805/Functional-JavaScript-or-map-reduce

// const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
// ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// const getIdx = char => char.charCodeAt(0) - 'a'.charCodeAt(0)

// var uniqueMorseRepresentations = function(words) {
//     return words.map( word => word.split('')
//                                  .map( char => codes[getIdx(char)])
//                                  .join(''))
//                 .reduce((set, cur) => set.add(cur), new Set())
//                 .size
// };
