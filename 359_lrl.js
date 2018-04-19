/**
 * solved
 * @author jingjie jiang Apr 19, 2018
 */

/**
 * Initialize your data structure here.
 */
const Logger = function () {
  this.map = new Map();
};

  /**
   * Returns true if the message should be printed in the given timestamp, otherwise returns false.
          If this method returns false, the message will not be printed.
          The timestamp is in seconds granularity.
   * @param {number} timestamp
   * @param {string} message
   * @return {boolean}
   */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.map.has(message) && timestamp - this.map.get(message) < 10) {
    return false;
  }
  this.map.set(message, timestamp);
  return true;
};

const obj = new Logger();
console.log(obj.shouldPrintMessage(1, 'foo'));
console.log(obj.shouldPrintMessage(3, 'foo'));
console.log(obj.shouldPrintMessage(10, 'foo'));
console.log(obj.shouldPrintMessage(11, 'foo'));
