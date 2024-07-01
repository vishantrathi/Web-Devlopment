function x(){
    var a=7
    function y(){
        console.log(a);
    }
    a=100
    return y;
}
var z =x();
console.log(z);
z();

//A closure is a concept that allows a function to remember the variables from its containing scope, even after that parent function has finished executing.
// Uses of closures
// Module Design Pattern
// Currying
// Functions like once
// — memoize
// maintaining state in async world
// — set Timeouts
// Iterators
// — and many more...