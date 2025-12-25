let a=10
// const b=20
// var c=30
// console.log(a,b,c)
// var c=300 //globle scope


if (true){// block scope
    let a=100
    const b=20
    var c=30 // becomes global (or function scope if inside function)
    // console.log(a)
}

// var is from old JavaScript (ES5 and earlier)
// let and const were introduced in ES6 to fix scoping problems

// console.log(a) 
// console.log(b) 
// console.log(a)
