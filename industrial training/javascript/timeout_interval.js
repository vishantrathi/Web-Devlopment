const timeout = setTimeout(greetings, 3000);
function greetings(){
    document.getElementById("greetings").innerHTML="College of engineering";
}
//stop functon
let stop = setTimeout(greetings, 6000);
function stopFunction(){
    document.getElementById("demo").innerHTML=" ";
}
function stopFunction(){
    clearTimeout(stop);
}

//interval function
let interval = document.getElementById("demo2");
setInterval(function(){
    interval.innerHTML += "Hello",2000;
});

//stop interval function
function stopInterval(){
    clearInterval(interval);
}
// Q:Can you explain the difference between var, let, and const?

// var: var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

// let: let is block scoped. A block is a chunk of code bounded by {}. A block lives in curly braces. Anything declared with let is only available inside that block.

// const: const is used to declare variables that won’t be reassigned. const is block scoped and works like let but the value of the variable can’t be changed.