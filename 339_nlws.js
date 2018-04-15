/**
 * solved used 4 hours
 * @author jingjie jiang Apr 16, 2018
 */
const helper = function (ele, depth) {
  let res = 0;

  if (ele.getInteger() !== null) {
    res += ele.getInteger() * depth;
  } else {
    res += ele.getList().map(val => helper(val, depth + 1)).reduce(((acc, cur) => acc + cur), 0);
  }

  return res;
};

const depthSum = function (nestedList) {
  return nestedList.map(ele => helper(ele, 1)).reduce(((acc, cur) => acc + cur), 0);
};

console.log(depthSum(1));
