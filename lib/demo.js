'use strict';

var _xlsx = require('xlsx');

var _xlsx2 = _interopRequireDefault(_xlsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var workbook = _xlsx2.default.readFile('Test.xlsx');
var sheetIds = workbook.SheetNames;

// Method 1: use sheet_to_json
// sheetIds.forEach((ele, index) => {
// console.log(JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[sheetIds[index]],
// {header: 1})));
// });
// use header: 1
// [["test","testb1"],["test","testb12"],["test11","testb13"]]
// [["test2","testb2"],["test2","1"],["test21","1"]]

// Method 2: own version
var jsonRes = {};
sheetIds.forEach(function (ele) {
  var worksheet = workbook.Sheets[ele];
  var headers = {};
  var data = {};
  // iterate all the keys in worksheet : "!ref"， “A1”，"B1", “A2”, "B2"。。。
  Object.keys(worksheet).forEach(function (key) {
    // get only valid columns start with Capital Letters
    if (key[0] === '!') return;
    // get pos of fst number in key
    var r = new RegExp('\\d');
    var colIndex = key.search(r);
    // parse out the column, row, and value
    var col = key.substring(0, colIndex); // get column ID A...
    var row = parseInt(key.substring(colIndex), 10); // get row num 1, 2...
    var value = worksheet[key].v;

    // store header names
    if (row === 1 && value) {
      headers[col] = value;
      return;
    }

    if (!data[headers[col]]) data[headers[col]] = [];
    data[headers[col]].push(value);
  });
  jsonRes[ele] = data;
});

console.log(JSON.stringify(jsonRes, null, 2));
// output:
// {
//     "Sheet1": {
//       "testa1": [
//         "test12",
//         "test13"
//       ],
//       "testb1": [
//         "testb21",
//         "testb23"
//       ]
//     },
//     "Sheet2": {
//       "test2a": [
//         "test2a2",
//         "test2a3"
//       ],
//       "test2b": [
//         "test2b2",
//         "test2b3"
//       ]
//     }
//   }