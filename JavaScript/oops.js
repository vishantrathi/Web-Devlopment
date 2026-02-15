const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
    }
}

user.getUserDetails()

function NewUser(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const userOne = new NewUser("hitesh", 12, true)
const userTwo = new NewUser("hitesh2", 132, false)
console.log(userOne);


//OOPS
 

/*Parts of OOPS
Object literals{}

Construsctor
Prototypes
Classes
Instances(new,this)
*/

//4 Pillors

//Abstraction
//Encaptulation
//Inheritance
//Polymorphism


// new ek constructor function hai

