import XLSX from 'xlsx';

const workbook = XLSX.readFile('Test.xlsx');
const sheetIds = workbook.SheetNames;

// Method 1: use sheet_to_json
// sheetIds.forEach((ele, index) => {
// console.log(JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[sheetIds[index]],
// {header: 1})));
// });
// use header: 1
// [["test","testb1"],["test","testb12"],["test11","testb13"]]
// [["test2","testb2"],["test2","1"],["test21","1"]]

// Method 2: own version
const jsonRes = {};
sheetIds.forEach((ele) => {
  const worksheet = workbook.Sheets[ele];
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
