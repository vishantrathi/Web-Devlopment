const arr=[1,2,3,4,5,6,7,8]
for (const num of arr) {
    console.log(num)
    
}

const greetings="hello word"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//maps
//hold key value pair and original data and insertion order

const map = new Map()
map.set('IN', "India")
map.set('USA', "States")
map.set('Fr', "France")
// console.log(map)


for (const key of map) {
    console.log(key);
    
}

//key and value are seprated
for (const [key,value] of map) {
    console.log(key, ':-' ,value);
    
}


