let a=parseInt(prompt("Chal bhai ek no guess kar"));
let A = parseInt(prompt("ek or no guess"));
let B = parseInt(prompt("ek baar or guess kar"));
if(A==B){
    document.getElementById("demo1").innerHTML="Tu Jeet Gaya bhai";
}
else{
    document.getElementById("demo2").innerHTML="Naah bhai Naah try again";
}