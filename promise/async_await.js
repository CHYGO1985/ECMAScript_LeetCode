/**
 * async/await : await will wait for promise to execute
 * @author jingjiejiang 
 */

async function getSum(up) {
  let a = 0;
  for (let i = 1; i <= up; i += 1) {
    a += i;
  }
  return a;
}

/*eslint-disable*/
async function sum() {
  for (let i = 1; i < 5; i += 1) {
    const sum = await getSum(10000);
    console.log(`time: ${i}; sum: ${sum}`);
    console.log(`${i} continue without waiting`);
  }
  console.log('result');
}

console.log(sum());
