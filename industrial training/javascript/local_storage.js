//local stoaage
localStorage.setItem('username', 'vishant rathi'); //data stored
// let result = localStorage.getItem('username'); //data fetched
// localStorage.removeItem('username');//data deleted

document.getElementById('result').innerHTML = localStorage.getItem('username'); //data displayed
//session storage
sessionStorage.setItem('Password', 'Vishant@123'); //data stored
let result1 = sessionStorage.getItem('Password'); //data fetched
localStorage.clear() //data deleted
document.getElementById('result1').innerHTML = sessionStorage.getItem('Password'); //data displayed

//Q: Make a funtion when click the data which is stored in lacal storage will be displayed
function clk() {
    sessionStorage.setItem('email', 'Vishant@gmail.com'); //data stored
     let result11 = sessionStorage.getItem('email'); //data fetched
    document.getElementById('demo').innerHTML = result11;
}
