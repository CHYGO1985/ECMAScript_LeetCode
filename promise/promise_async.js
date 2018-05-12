const isMomHappy = true;

const willIGetNewPhone = new Promise(((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black',
    };
    resolve(phone); // fulfilled
  } else {
    const reason = new Error('mom is not happy');
    reject(reason); // reject
  }
}));

const showOff = function (phone) {
  return new Promise(((resolve) => {
    const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;

    resolve(message);
  }));
};

const askMom = function () {
  console.log('before asking Mom'); // log before
  willIGetNewPhone
    .then(showOff)
    .then((fulfilled) => {
      console.log(fulfilled);
    })
    .catch((error) => {
      console.log(error.message);
    });
  console.log('after asking mom'); // log after
};

askMom();
