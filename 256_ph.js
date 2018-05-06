const params = [[3, 5, 3], [6, 17, 6], [7, 13, 18], [9, 10, 18]];

/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCost = function (costs) {
  if (costs === undefined || costs.length === 0 || costs[0].length < 3) return 0;
  const tmp = costs;
  for (let i = 1; i < tmp.length; i += 1) {
    tmp[i][0] += Math.min(tmp[i - 1][1], tmp[i - 1][2]);
    tmp[i][1] += Math.min(tmp[i - 1][0], tmp[i - 1][2]);
    tmp[i][2] += Math.min(tmp[i - 1][0], tmp[i - 1][1]);
  }
  const index = costs.length - 1;
  return Math.min(...tmp[index]);
};

console.log(minCost(params));
