function SetUserName(username){
    this.username = username
    console.log(username);
    
}

function createUser(username,email, password){
    //  SetUserName(username) // given refrence
     SetUserName.call(this,username) // given refrence and call

     this.email=email
     this.password=password
}

const chai = new createUser("chai","chai@mymail.com");

console.log(chai);