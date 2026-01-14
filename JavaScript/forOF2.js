const myObject={
    game1: 'NFS',
    game2: 'Spiderman' 
}
// to make the objet iterable we use for in loop
for (const key in myObject) {
//    console.log(myObject[key])
//    console.log(`${key} shortcut is for ${myObject[key]}`)
}
//loops on obj=> which is forin
const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    //ye sidha key uthata hai
    // console.log(key)
    //for values use this syntax
    // console.log(programming[key])
}

const coding=["js", "ruby", "rust", "cpp", "python", "java"]
// coding.forEach(function (val){
//     console.log(val)
// })

//using arrow function
coding.forEach((item)=>{
    // console.log(item);
})



//
coding.forEach((item, index, arr)=>{
    // console.log(item,index,arr);
})


const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const greetings="hello js"
for (const i of greetings) {
    // console.log(i)
}

//maps
//maps hold key value pairs and it remembers the original insersion order
// const map=new Map()
// map.set('IN',"India"),
// map.set('ENG',"English"),
// map.set('HIN',"hindi")

// console.log(map)
// for (const[key,value] of map) {
    // console.log(key,value) // access the key and value seprately
// }


const myNewObject={
    game1:"subway",
    game2:'NFS'
}

// for (const[key,value] of myNewObject) {// not iterable
//     console.log(key,':-',value)
// }

for (const key in myNewObject) {//iterable
    // console.log(`${key} shortcut is for ${myNewObject[key]}`)
}


const programmingPro = ["js","rb","py","java"]
for (const key in programmingPro) {
    // console.log(key);
    
}


const map= new Map()
map.set('IN',"India")
map.set('USA',"UNited States of America")
map.set('Fr',"France")
map.set('UK',"United Kingdom")

// for (const key in map) {
//     console.log(value); //0,1,2,3 
    
// }


const Newcoding=["js","ruby"]
Newcoding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})


const mycoding=[
{
    lanuageName:"javascript",
    langaugeFileName:"js"
},
{
    lanuageName:"java",
    langaugeFileName:"java"
},
{
    lanuageName:"CplusPlus",
    langaugeFileName:"cpp"
},
]

mycoding.forEach(item => {
    console.log(item.lanuageName);
    
    
});

