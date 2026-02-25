class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username, email, passwd){
        super(username) //teacher inherits everything from user So teacher now has access to: username ,logMe() method
        this.email=email;
        this.passwd=passwd;
    }

    addCourse(){
        console.log(`A New course was added by  ${this.username }`)
    }
}

const chai= new teacher("chai", "chai@techaer.me", "123")

chai.addCourse()


const masalachai = new user("elachaiWali")

masalachai.logMe()