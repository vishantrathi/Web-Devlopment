function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let A = parseInt(prompt("Enter a no to check even or odd"));
let number = A;
if (isEven(number)) {
    document.getElementById("demo").innerHTML= "Result is " +number + " is even";
} else {
    document.getElementById("demo1").innerHTML= "Result is " +number + " is odd";
}