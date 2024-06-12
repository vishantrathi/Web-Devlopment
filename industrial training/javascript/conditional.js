// //conditional statement

// //if
// //else
// // if else
// // else if
// let a=parseInt(prompt("enter your value"));

// if(a>10){
//     document.getElementById(demo1).innerHTML="Welcome to the beachbay";
// }

// let A = parseInt(prompt("Enter first no"));
// let B = parseInt(prompt("Enter Second no"));
// if(A==B){
//     document.getElementById("demo2").innerHTML="Welcome to my Page";
// }
// else{
//     document.getElementById("demo3").innerHTML="Welcome to home bro";
// }



// let x=10;
// let y=10;
// if(x==y){
//     document.write("Welcome")
// }else if(x>y){
//     document.write("hello")
// }else if(x<y){
//     document.write("hello coe")
// }else{
//     document.write("not applicable")
// }



//switch statement
let day;
switch(new Date().getDate()){
    case 0:
    day ="sunday";
    break;
    case 1:
    day ="monday";
    break;
    case 2:
    day ="tuesday";
    break;
    case 3:
    day ="wednesday";
    break;
    case 4:
    day ="thursday";
    break;
    case 5:
    day ="friday";
    break;
    case 6:
    day ="saturday";
    break;

}
document.getElementById("new").innerHTML("today is"+day);