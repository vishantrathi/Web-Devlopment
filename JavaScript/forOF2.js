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
    console.log(item);
})



//
coding.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})



