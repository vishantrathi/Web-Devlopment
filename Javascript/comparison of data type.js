// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null == 0);

//comparision and equallity check both are different in js
//strict check === ( does not convert the data type)
console.log("2"===2)