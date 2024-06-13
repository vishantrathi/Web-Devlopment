// types of exception handling in JS
//1.try
//2.catch
//3.finally
//4.throw


// // try block
// try{
//     // code that may throw an exception
//     alert("welcome to the my page")
// }
// // catch block
// catch(err){
//     document.grtelemetById("demo1").innerHTML = err.message;
// }

//Q:write a program from try and catch block
try{
    let x = 10;
    let y = 0;
    let z = x/y;
    if(z!=0){
        alert("value cant not be divided by zero")
    }
}
catch(errr){
    document.getElementById("demo2").innerHTML = errr.message;
}
