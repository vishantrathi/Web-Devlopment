// function x(){
//     var i=1;
//     setTimeout(function() {
//         console.log(i);
//     },3000);
//     console.log("javascript")
// }
// x();
function x(){
for(let i=1;i<=10; i++){
    setTimeout(function() {
        console.log(i);
         },i=1000);
}
console.log("Javascript");
}
x();