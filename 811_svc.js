/**
 *
 * used 1 hour to find the bug.
 * @author jingjie jiang Apr25, 2018
 */
const params = ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'];

const subdomainVisits = function (cpdomains) {
  const map = {};
  cpdomains.forEach((ele) => {
    const pairs = ele.split(' ');
    let key = pairs[1];
    const value = parseInt(pairs[0], 10);
    // used map[key] = value here which is wrong should check rep first
    while (key) {
      if (map[key]) {
        map[key] += value;
      } else {
        map[key] = value;
      }
      key = (key.indexOf('.') > 0) ? key.substr(key.indexOf('.') + 1, key.length) : null;
    }
  });
  const res = Object.keys(map).map(key => `${map[key]} ${key}`);
  return res;
};

console.log(subdomainVisits(params));
