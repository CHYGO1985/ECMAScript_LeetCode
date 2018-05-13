/**
 * promise.all example
 * @author jingjiejiang May 13, 2018
 */

const nums = [1, 2, 3, 4, 5];

/* test with async and await */
// const getPromises = function (params) {
//   const promises = params.map((cur, index) => new Promise((resolve) => {
//     resolve(10 * index);
//   }));
//   console.log(promises);
//   return promises;
// };

// async function runner() {
//   const result = await Promise.all(getPromises(nums)).then(fulfilled => fulfilled);
//   console.log(`result---- ${result}`);
//   console.log(`result++++ ${result}`);
//   return result;
// }

// async function getRes() {
//   console.log(`result^^^^ ${await runner()}`);
// }

// getRes();


/* accurately catch the promise that failed in promise all */
const getPromises = function (params) {
  const promises = params.map((cur, index) => new Promise((resolve, reject) => {
    if ((index + 1) === 2) {
      reject(new Error(`${index + 1} is failed`));
    }
    resolve(10 * (index + 1));
  }));
  return promises;
};

async function runner() {
  try {
    const result = await Promise.all(getPromises(nums)).then(fulfilled => fulfilled);
    console.log(`result---- ${result}`);
    console.log(`result++++ ${result}`);
    return result;
  } catch (err) {
    return err;
  }
}

async function getRes() {
  console.log(`result^^^^ ${await runner()}`);
}

getRes();

/* test use promise.all without async/wait, result cannot get the returned value */
// const nums = [1, 2, 3, 4, 5];

// const getPromises = function (params) {
//   const promises = params.map((cur, index) => new Promise((resolve) => {
//     resolve(10 * index);
//   }));
//   console.log(promises);
//   return promises;
// };

// function runner() {
//   const result = Promise.all(getPromises(nums)).then(fulfilled => console.log(fulfilled));
//   console.log(`result---- ${result}`);
//   console.log(`result++++ ${result}`);
//   return result;
// }

// console.log(runner());

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
