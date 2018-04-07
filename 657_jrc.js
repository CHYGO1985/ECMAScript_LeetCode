/**
 *
 * @author jingjie jiang Apr 7, 2018
 */
// const routes = 'UD';
// const routes = 'LLR';
const routes = 'LLRR';

// method 1: map + reduce
// 1. U: [-1,0]; D: [1, 0]; R: [0, 1]; L:[0, -1]
// get one by one and add the coords
const judgeCircle = function (moves) {
  const coords = new Map([
    ['U', [-1, 0]],
    ['D', [1, 0]],
    ['R', [0, 1]],
    ['L', [0, -1]],
  ]);

  const pos = [...moves].map(ele => coords.get(ele)).reduce((res, cur) => {
    res[0] += cur[0];
    res[1] += cur[1];
    return res;
  }, [0, 0]);

  return pos[0] === 0 && pos[1] === 0;
};

console.log(judgeCircle(routes));
