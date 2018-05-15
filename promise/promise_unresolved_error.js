/**
 * This is to check the dif between proimse that has reject or not.
 *
 * @author jingjiejiang May 15, 2018
 */
/*eslint-disable*/
const aGoodPromise = () => new Promise((resolve) => {
  console.log('good good');
  resolve('good good');
});

const aBadPromise = () => new Promise((resolve, reject) => {
  reject('cry cry');
});

const aPromiseWithoutReject = () => new Promise((resolve, reject) => aBadPromise());

const aPromiseWithReject = () => new Promise((resolve, reject) => aBadPromise().catch(err => reject(err)));

const aComplicatedPromise = () => new Promise((resolve, reject) => aGoodPromise()
  .then(aPromiseWithoutReject)
  .catch(err => reject(err)));

const promises = [aComplicatedPromise(), aGoodPromise()];

const test = function () {
  Promise.all(promises).catch((err) => {
    console.error(`here is an error: ${err}`);
  });
};

test();
