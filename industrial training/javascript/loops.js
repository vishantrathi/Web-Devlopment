// for loop
//while loop
//do(do mai condition hoti hai) while loop


//for loop
let text="";
for(i=0; i<10; i++){
    text += i+"<br>";
}
document.getElementById("demo1").innerHTML=text;

//break statement
let brk ="";
for(i=0; i<10; i++){
    if(i==6){break;}
    brk += i + "<br>";
}
document.getElementById("demo2").innerHTML=brk;

//continue statement
let cnt="";
for(i=0; i<10; i++){
    if(i==6){continue;}
    cnt += i + "<br>";
}
document.getElementById("demo3").innerHTML=cnt;


//while loop
let text1="";
let j=0;
while(j<10){
    text1 += j+"<br>";
    j++;
}
document.getElementById("demo4").innerHTML=text1;

//using while loop display the even numbers between 0 to 20
let even="";
let k=0;
while(k<=20){
    even += k + "<br>";
    k+=2;
}
document.getElementById("demo5").innerHTML=even;

//Q;Using do while loop display the odd numbers between 0 to 20
let odd="";
let l=1;
do{
    odd += l + "<br>";
    l+=2;
}
while(l<=20);
document.getElementById("demo6").innerHTML=odd;



