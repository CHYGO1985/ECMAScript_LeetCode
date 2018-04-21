/*eslint-disable*/
const XLSX = require('xlsx');

var workbook = XLSX.readFile('Test.xlsx');
//console.log(JSON.stringify(workbook, null, 2));
var sheet_ids = workbook.SheetNames;

// Method 1: use sheet_to_json
// sheet_ids.forEach((ele, index) => {
//   console.log(JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_ids[index]], {header: 1})));
// });
// use header: A
// [  { A: 'test' }, { A: 'test' } ]
// [ { A: 'test2' }, { A: 'test2' } ]
// use header: 1
// [["test","testb1"],["test","testb12"],["test11","testb13"]]
// [["test2","testb2"],["test2","1"],["test21","1"]]

// Method 2: own version
const jsonRes = {};
sheet_ids.forEach((ele) => {
    let worksheet = workbook.Sheets[ele];
    let headers = {};
    let data = {};
    // iterate all the keys in worksheet : "!ref"， “A1”，"B1", “A2”, "B2"。。。
    for(key in worksheet) {
        // get only valid columns start with Capital Letters
        if(key[0] === '!') continue;
        //parse out the column, row, and value
        let colIndex = 0;

        const r = new RegExp('\\d');
        colIndex = key.search(r);

        let col = key.substring(0,colIndex); // get column ID A...
        let row = parseInt(key.substring(colIndex)); // get row num 1, 2...
        let value = worksheet[key].v;
        // console.log('%s key, %s value', key, value);

        //store header names
        //console.log('>>>>headers', headers);
        if (row == 1 && value) {
            headers[col] = value;
            continue;
        }

        if (!data[headers[col]]) data[headers[col]]=[];
        // the actual valid array inddex start from 2 (row 1 is title, row 2... are data)
        // console.log('$$$$data', data[row - 2][headers[col]]);
        // console.log(JSON.stringify(data[row - 2][headers[col]]));
        
        data[headers[col]].push(value);
        // console.log('>>>>key %s data %j', key, data);
        //console.log('>>>>key %s data %j', key, data[0]['testb1']);
    }
    // console.log(JSON.stringify(data));
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

