// let score = "33abc"// not a pure number
// let score ="33"
let score =NaN;
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber); //output=NaN


//33 => 33
//33abc => NaN
//True => 1; false =>0

let isLoggedIn ="string"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true ; 0=>false

let somenumber = 33
let stringnumber = String(somenumber)
console.log(somenumber);
console.log(typeof somenumber);


