//object
// 1. Object is a non-primitive data type in JavaScript.
// 2. Object is a collection of key-value pairs.
const human={
    name:'Satyam',
    age:25,
    address:'Ayodha',
    email:'ram@domain.com'
}
document.getElementById('demo1').innerHTML=human.name;
document.getElementById('demo2').innerHTML=human.age;
document.getElementById('demo3').innerHTML=human.address;
document.getElementById('demo4').innerHTML=human.email;


const student={};

student.name="Hari"
student.technology="JavaScript"
student.email="student@domain.com"

const r=student;
r.name="Hari"
document.getElementById('demo5').innerHTML="Name:"+ student.name;
r.email="student@domain.com";
document.getElementById('demo6').innerHTML="Email:"  +student.email;
r.technology="Javascript"
document.getElementById('demo7').innerHTML= "Technilogy:" + student.technology;

