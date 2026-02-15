let myName="vishant     "
// console.log(myName.trim().length); 
// console.log(myName.trueLength); 

let myHeroes=["thor","spiderman","hammer"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getspiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Array.prototype.heyVishant=function(){
    console.log(`Vishant Says Hello`)
}

myHeroes.heyVishant()


const User={
    name:"Chai",
    email:"dash@google.com"
}
const teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

teacher.__proto__=User

//mordern syntax
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername="ChaiAurCode"

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);

}