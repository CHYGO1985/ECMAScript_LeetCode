// const j = 'aA';
// const s = 'aAAbbbb';

const j = 'z';
const s = 'ZZ';

const numJewelsInStones = function (J, S) {
  const jewels = new Set(Array.from(J));
  const stones = Array.from(S);
  const res = [...stones].filter(ele => jewels.has(ele));
  return res.length;
};

console.log(numJewelsInStones(j, s));

