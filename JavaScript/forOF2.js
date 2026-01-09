const myObject={
    game1: 'NFS',
    game2: 'Spiderman'
}
// to make the objet iterable we use for in loop
for (const key in myObject) {
//    console.log(myObject[key])
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key])
}

const coding=["js", "rudy", "rust", "cpp", "python", "java"]
coding.forEach(function (val){
    console.log(val)
})