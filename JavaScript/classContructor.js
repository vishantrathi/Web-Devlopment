//es6

class User{
    constructor(username,email,password){
        this.username= username
        this.email=email
        this.password=password
    }
    encryptPswd(){
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@mymail.com","123")

console.log(chai.encryptPswd());
console.log(chai.changeUsername());

//behind the scean
function Users(username, email, password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPswd=function(){
    return`${this.password}abc`
}
User.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}abc`
}

const tea =new User("tea", "tea@mail.com", "123")

console.log(tea.encryptPswd())
console.log(tea.changeUsername());
