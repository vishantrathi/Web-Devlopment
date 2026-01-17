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
// const newNums = myNums.filter((num) => {
//     return num>4  //we need to add return if we start a scope
// })
// console.log(newNums);


//if dont want to use filter
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)  //if num>4 then push it into newNums
    }
})

// console.log(newNums)

const book=[
    {title:'bookOne',genre:'Fiction',publish:1981,edition:2004},
    {title:'bookTwo',genre:'history',publish:1982,edition:2003},
    {title:'bookThree',genre:'geography',publish:1985,edition:2014},
    {title:'bookFour',genre:'Fiction',publish:1983,edition:2011},
    {title:'bookFive',genre:'economics',publish:1985,edition:2005},
    {title:'bookSix',genre:'history',publish:1986,edition:2007},
    {title:'bookSeven',genre:'Fiction',publish:2000,edition:2008},
    {title:'bookEight',genre:'geography',publish:1980,edition:2019}
]

// const userbooks = book.filter((bk)=> bk.genre==='history')
const userbook = book.filter((bk)=> {return bk.publish>=2000 && bk.genre==="Fiction"})
// console.log(userbook);

const myNumber=[1,2,3,4,5,6,7,8,9,10]
const newNum=myNumber
        .map((num)=>num+10)
        .map((num)=> num+1)
        .filter((num=>num>=20))

console.log(newNum);
