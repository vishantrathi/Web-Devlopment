// //stack(Premitive) ,Heap(Non-premitive)
let myyoutubeName="channelName"
let newname=myyoutubeName // it gives copy to newname insted of original 
newName="newchannel"

console.log(myyoutubeName) //channelname
console.log(newName)//newname


let user1={
    email:"user@google.com",
    upi:"user@ybl",
}

let user2=user1
user2.email="user@newemail.com"
console.table([user1])
console.log(user1)

//output

//│ (index) │ email               │ upi        │
// ├─────────┼─────────────────────┼────────────┤
// │ 0       │ 'user@newemail.com' │ 'user@ybl' │
// └─────────┴─────────────────────┴────────────┘
// { email: 'user@newemail.com', upi: 'user@ybl' }

// Output same hai kyunki is example me object ka reference use hua hai
const name="vishant"
const repocount=34
console.log(`Hello my name is ${name} and my repocont is ${repocount}`); //string interpolation

// Strings are stored as values in object key–value pairs
console.log(name[0]) //V
console.log(name.length) //7
console.log(name.toUpperCase()) //VISHANT
console.log(name.charAt(2))
console.log(name.indexOf('v'))
console.log(name.slice(0,2))

const url="htpps://vishant.com/new@files"
console.log(url.replace('@','-'))
console.log(url.includes('@'))





