import XLSX from 'xlsx';
import _ from 'lodash';

const workBook = XLSX.readFile('Test.xlsx');
const sheetIds = workBook.SheetNames;

// Method 1: use sheet_to_json
// sheetIds.forEach((ele, index) => {
// console.log(JSON.stringify(XLSX.utils.sheet_to_json(workBook.Sheets[sheetIds[index]], { header: 1 })));
// });
// use header: 1
// [["testa1","testb1"],["test12","testb21"],["test13","testb23"]]
// [["test2a","test2b"],["test2a2","test2b2"],["test2a3","test2b3"]]

// Method 2: own version
const jsonRes = {};
/*
sheetIds.forEach((ele) => {
  const worksheet = workBook.Sheets[ele];
  const headers = {};
  const data = {};
  // iterate all the keys in worksheet : "!ref"， “A1”，"B1", “A2”, "B2"。。。
  Object.keys(worksheet).forEach((key) => {
    // get only valid columns start with Capital Letters
    if (key[0] === '!') return;
    // get pos of fst number in key
    const r = new RegExp('\\d');
    const colIndex = key.search(r);
    // parse out the column, row, and value
    const col = key.substring(0, colIndex); // get column ID A...
    const row = parseInt(key.substring(colIndex), 10); // get row num 1, 2...
    const value = worksheet[key].v;

    // store header names
    if (row === 1 && !_.isEmpty(value)) {
      headers[col] = value;
      return;
    }

    if (!data[headers[col]]) data[headers[col]] = [];
    data[headers[col]].push(value);
  });
  jsonRes[ele] = data;
});

console.log(JSON.stringify(jsonRes, null, 2));
*/

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

// output as title : value ...
sheetIds.forEach((ele) => {
  const worksheet = workBook.Sheets[ele];
  const headers = [];
  const data = [];
  // iterate all the keys in worksheet : "!ref"， “A1”，"B1", “A2”, "B2"。。。
  Object.keys(worksheet).forEach((key, index) => {
    // get only valid columns start with Capital Letters
    if (key[0] === '!') return;
    // get pos of fst number in key
    const r = new RegExp('\\d');
    const colIndex = key.search(r);
    // parse out the column, row, and value
    const col = key.substring(0, colIndex); // get column ID A...
    const row = parseInt(key.substring(colIndex), 10); // get row num 1, 2...
    const value = worksheet[key].v;
    console.log('col %s row %s value %s', col, row, value);

    // store header names
    if (row === 1 && !_.isEmpty(value)) {
      if (_.isEmpty(headers[row - 1])) headers[row - 1] = value;
      else headers[row] = value;
      return;
    }

    // if (_.isNil(data[headers[index]])) data[headers[index]] = [];
    // data.push(Object.assign({headers[inx], value}));
    console.log('%j', headers);
    //console.log('index %d %s %j', index, headers[row - 1], data);
  });
  jsonRes[ele] = [];
  jsonRes[ele].push(data);
});

console.log(JSON.stringify(jsonRes, null, 2));
