//ES6 released in 2015
//arrow gn released in 2015 with ES6

const user={
    username:"Vishant",
    Price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)

        // this scope mai jo bhi variable hai usko access ko karne we use this keyword

    }
}
// user.welcomeMessage()
// console.log(user)
// user.username="Jai"
// user.welcomeMessage()


// function chai(){
    // let username="Vishant"
    // console.log(this.username) //undefined
// }

// chai()

// const chai=function (){
    // let username="Vishant"
    // console.log(this.username)
// }
// chai()


// const chai = () => {
//     let username="Vishant"
//     console.log(this)
// }
// chai()


// () => {} syntax of arrow function


// const addTwo=(num1, num2)=>{
//     return num1+num2
// }

//another way to write(mainly use in react)
const addTwo=(num1, num2)=> num1+num2

console.log(addTwo(3,4))