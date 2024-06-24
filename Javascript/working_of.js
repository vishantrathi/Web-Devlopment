//javascript synchronous single-threaded language that means js can execute only one statement at a time.
//javascript is a single-threaded language that can be non-blocking or blocking.
var n=2;
function square(num){
    var ans=num*num;
    return ans;
}
var square2=square(n);
var square4=square(4);
console.log(square2);
console.log(square4);