const coding=["js","ruby","java"]

const values= coding.forEach((item)=>{
    // console.log(item)
})

// console.log(values)

// const myNums=[1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter( (num) => num>4)
// console.log(newNums);

//or 

const myNums=[1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter( (num) => {
//     return num>4 //we need to add return if we start a scope
// })
// console.log(newNums);

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)

