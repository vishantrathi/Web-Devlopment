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