//dates

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDatedot=new Date("2023-1-23")
// console.log(myCreatedDatedot.toLocaleString())
// let myCreatedDate= new Date("01-14-2023")
// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))
let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

console.log(`The day is ${newDate.getDay()} and the month is ${newDate.getMonth()}`)

newDate.toLocaleString('default',{
    weekday:"long",
})
 
