//javascript synchronous single-threaded language that means js can execute only one statement at a time.
//javascript is a single-threaded language that can be non-blocking or blocking.
// var n=2;
// function square(num){
//     var ans=num*num;
//     return ans;
// }
// var square2=square(n);
// var square4=square(4);
// console.log(square2);
// console.log(square4);


// getname(); //output = 7
// console.log(x);//output = undefined

var x=7;
 function getname2(){
    console.log("1");
 }

 var getname3 = function (){
    console.log("2");

 }
var getname = () => {
    console.log("namaste javascript");
}
getname();
console.log(x);
console.log(getname);
console.log(getname2);
console.log(getname3);  