function sayMyname(){
console.log("a")
console.log("a")
console.log("a")
console.log("a")
console.log("a")
console.log("a")
}

// sayMyname()

function addTwoNumber(Number1,Number2){
//    let result = Number1+Number2
//    return result

   return Number1+Number2

   // return k baad koi fun execute nahi hota by js rules
}

const result=addTwoNumber(3,7)
// console.log("Result:",result)


function loginUserMessage(username="someone"){
    if(username===undefined){
        console.log("Please enter a user Name")
        return
    }
return `${username} just logged in`
}

console.log(loginUserMessage("Vishant"))
// console.log(loginUserMessage())  //Undefined if no value passed