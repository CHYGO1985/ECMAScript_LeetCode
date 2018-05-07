/**
 * @author jingjie jiang May 7, 2018
 */
const params = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  // p(i) = cost[i - 1] + res[i - 1],  cost[i - 2] + res[i - 2];
  const res = new Array(cost.length + 1);
  res[0] = 0;
  res[1] = 0;
  for (let i = 2; i < res.length; i += 1) {
    res[i] = Math.min(res[i - 1] + cost[i - 1], res[i - 2] + cost[i - 2]);
  }
  return res[cost.length];
};

console.log(minCostClimbingStairs(params));
