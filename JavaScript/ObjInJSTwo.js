const tinderuser = new Object() // this is a singleton obj
const tinderuserOne={} // this is not a singleton obj
// console.log(tinderuser) //{}
// console.log(tinderuserOne) //{}

tinderuser.id="123abc"
tinderuser.name="Sa"
tinderuser.isLoggedIn=false

// console.log(tinderuser);


const regularUser={
    email:"some@email.coom",
    fullname: {
        userFullname:{
            firstName:"first",
            lastName:"last"
        }
    }
}

// console.log(regularUser.fullname?.userFullname.firstName)4
//? is used for if the data is found it returns the value,if not it returns the "undefined"


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3=Object.assign({},obj1, obj2)  //{}=all values stored in these{}, other wise it store in obj1
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3={...obj1,...obj2} //easy to use and simple syntax
// console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users=[
    {
        id:1,
        email:"useer@gmail.com"
    },
    {
        id:1,
        email:"useer@gmail.com"
    },
    {
        id:1,
        email:"useer@gmail.com"
    },
    {
        id:1,
        email:"useer@gmail.com"
    },

]

// user[1].email
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser)) // give the values of entries
console.log(Object.entries(tinderuser)) //give the enteries of value
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("isLoggedIn"))  //false






