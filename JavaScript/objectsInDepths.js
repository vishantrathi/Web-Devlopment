//singleton=apni tarah ka ek he object
//object.create
//object literals
const mySym=Symbol("Key1")
const JsUser={
    name:"nameHere",
    "full name":"fullNameHere" ,//can't access via dot feature
    age:12,
    [mySym]:"myKey1",
    location:"India",
    email:"mail@js.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]

   
}
 //access the obj
    console.log(JsUser.email)
    console.log(JsUser["email"])
    console.log(JsUser["fullname"])
    console.log(JsUser[mySym])
    JsUser.email="js@newmail.com" //chage value of obj
    // Object.freeze(JsUser)
    console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting)  //undefined
console.log(JsUser.greeting())

JsUser.greetingTwo=function(){
    console.log(`"Hello Js User",${this.name}`)

}

console.log(JsUser.greetingTwo())


