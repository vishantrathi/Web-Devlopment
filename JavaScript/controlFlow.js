// const isUserLoggedIn=true
const temperature=489
if(temperature<50){
    console.log("temp is less than 50");
}else{
    console.log("Temerature is greater then 50")
}

if(temperature>50){
     
    console.log("temp is less than 50");
}else if(temperature>60){
    console.log("Temerature is greater then 50")
}
else if(temperature>80){
    console.log("Temp is greater than 80")
}


//

const isUserLoggedIn = true
const debitCard = true
const loggInFromGoogle = false
const loggedInFromEmail = false
if(isUserLoggedIn && debitCard && 2==2){  // all case should be true
    console.log("Allow to buy cources")
}

if(loggInFromGoogle || loggedInFromEmail){ // any one is the true the goes into the loop
    console.log("You are loggedIN")
}else{
    console.log("Not Allowed")
}

// Nullish Coalescing Operator (??):Null, Undefined
// The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined,
let val1;
// val1 = 5 ?? 10
val1 = null ??10  ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// console.log(val1)

//Terninary Operator
//Condition ? True:flase

const iceTeaPrice =100;
iceTeaPrice >=80 ? console.log("Less than 80"):console.log("month than 80");

