
let depthSum = function (nestedList) {
  return nestedList.map(ele => helper(ele, 1)).reduce((acc, cur) => acc + cur);
  // return nestedList.getList;

  // isInteger
  // getInteger
  // setInteger
  // add
  // getList
};

const helper = function (ele, depth) {
  let res = 0;
  console.log('>>> %d depth, %j', depth, ele.getList());
  // console.log('%j', ele.getInteger());

  if (ele.getInteger()) {
    res += ele.getInteger() * depth;
  } else {
    res += helper(ele[0].getList(), depth + 1);
  }
  /*
    else {
      res += helper(ele.getList, depth + 1);
    }
    return res;
    */
  return res;
};
