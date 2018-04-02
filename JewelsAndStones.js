// const j = 'aA';
// const s = 'aAAbbbb';

const j = 'z';
const s = 'ZZ';

const numJewelsInStones = function (J, S) {
  const jewels = new Set(Array.from(J));
  const stones = new Set(Array.from(S));
  const res = new Set([...jewels].filter(ele => stones.has(ele)));
  return res.size;
};

console.log(numJewelsInStones(j, s));

