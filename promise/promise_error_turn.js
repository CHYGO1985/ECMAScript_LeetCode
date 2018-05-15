/**
 * This is a demo to test how promise catch errors in turn.
 * @author jingjiejiang May 15, 2018
 */

/*eslint-disable*/
const checkEven = function (param) {
  return new Promise((resolve, reject) => {
    if (param == 1) {
      reject(1);
    }
    if (param == 3) {
      reject(3);
    }
    resolve(param);
  });
};

const show = async function () {
  try {
    await checkEven(1);
    await Promise.all([checkEven(2), checkEven(3)]);
    return 8;
  } catch (err) {
    console.log(err);
    return err;
  }
};

show();
