//singleton=apni tarah ka ek he object
//object.create
//object literals

const JsUser={
    name:"nameHere",
    "fullname":"fullNameHere" ,//can't access via dot feature
    age:12,
    location:"India",
    email:"mail@js.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]

   
}
 //access the obj
    console.log(JsUser.email)
    console.log(JsUser["email"])
    console.log(JsUser["fullname"])
