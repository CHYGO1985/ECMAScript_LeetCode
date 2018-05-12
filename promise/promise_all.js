/**
 * promise.all() example
 * @author jingjiejiang May 13, 2018
 */
const nums = [1, 2, 3, 4, 5];

const getPromises = function (params) {
  const promises = params.map((cur, index) => new Promise((resolve) => {
    resolve(10 * index);
  }));
  console.log(promises);
  return promises;
};

async function runner() {
  const result = await Promise.all(getPromises(nums)).then(fulfilled => fulfilled);
  // console.log(result);
  return result;
}

console.log(`result ${runner()}`);

// const a1 = Promise.resolve(1);
// console.log(a1);
// const a2 = Promise.resolve(2);
// const a3 = Promise.resolve(3);

// async function all() {
//   await Promise.all([a1, a2, a3]).then((fulfilled) => {
//     console.log(fulfilled);
//   });
// }

// all();

// output:
// Promise { 1 }
// [ 1, 2, 3 ]
