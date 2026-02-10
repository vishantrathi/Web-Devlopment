const user={
    username:"Hitesh",
    loginCount:8,
    signIn: true,

    getUserDetails: function(){
        console.log("Got User details from DB")

    }
}

console.log(user.username)
console.log(user.getUserDetails);
