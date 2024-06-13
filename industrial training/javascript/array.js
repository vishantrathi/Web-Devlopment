const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("simple array",arr);

const arr1 = [];
arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;
arr1[3] = 4;
arr1[4] = 5;
console.log("second method",arr1);
//push() method //add the last element
const arr2 = [1, 2, 3, 4, 5];
arr2.push(6);
console.log("push",arr2);

//pop() method //remove the last element
const arr3 = [1, 2, 3, 4, 5];
arr3.pop(5);
console.log("pop",arr3);

//unshift() method //add the first element 
const arr4 = [1, 2, 3, 4, 5];
arr4.unshift(0);
console.log("unshift",arr4);


//shift() method  //remove the first element
const arr5 = [1, 2, 3, 4, 5];
arr5.shift();
console.log("shift",arr5);

//concat() method //merge two array
const arr6 = [1, 2, 3, 4, 5];
const arr7 = [6, 7, 8, 9, 10];
const arr8 = arr6.concat(arr7);
console.log("concat",arr8);

//join() method //convert array to string
const arr9 = [1, 2, 3, 4, 5];
const arr10 = arr9.join("-");
console.log("join",arr10);

//reverse() method //reverse the array
const arr11 = [1, 2, 3, 4, 5];
arr11.reverse();
console.log("reverse",arr11);

//slice() method //extract the element
const arr12 = [1, 2, 3, 4, 5];
const arr13 = arr12.slice(1, 3);
console.log("slice",arr13);

//splice() method //add or remove the element
const arr14 = [1, 2, 3, 4, 5];
arr14.splice(1, 2, 6, 7);
console.log("splice",arr14);


//Q; Create an array of your favorite fruits and perform the following operations:
// 1. Add a new fruit to the end of the array.
// 2. Remove the first fruit from the array.
// 3. Find the index of a specific fruit in the array.
// 4. Remove the last fruit from the array and add it to the beginning of the array.

const fruits = ["apple", "banana", "mango", "orange"];
console.log(" All fruits in array fruits",fruits);
//1
fruits.push("grapes");//push() method //add the last element
console.log("add new fruit",fruits);
//2
fruits.shift();//shift() method  //remove the first element
console.log("remove first fruit",fruits);
//3
const index = fruits.indexOf("grapes"); //Find the index of a specific fruit in the array.
console.log("index of mango",index);
//4
const last = fruits.pop(); //pop() method //remove the last element
fruits.unshift(last); //add it to the beginning of the array
console.log("remove last fruit and add it to the beginning",fruits);


// Sorting and Reversing an Array
// 1. Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.
// 2. Write a function that reverses the elements of an array without using the built-in reverse method.
