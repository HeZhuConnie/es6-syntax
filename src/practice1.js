const parseData = function (input) {
  let {data,column} = input; // extract data & column from input

  let name = column[0].name;
  let age = column[1].name;
  let gender = column[2].name;
  let birthday = column[3].name;

  let output = [];

  Object.keys(data).forEach(row=>{
    var record = {};

    record[name] = data[row][0];
    record[age] = data[row][1];
    record[gender] = data[row][2];
    record[birthday] = data[row][3];

    output.push(record);
  })

  return output;
}
export { parseData };
