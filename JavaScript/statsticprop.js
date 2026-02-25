class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username: ${this.username}`); 
    }


    // static createId(){ // static : id ka access sabko nahi dena hai
    createId(){
        return`123`
    }
}


const vishant =new User("vishant")
console.log(vishant.createId());

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone = new teacher("iphone", "i@phone.com")
console.log(iphone);