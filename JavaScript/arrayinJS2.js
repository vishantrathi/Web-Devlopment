const heroes=["thor","Ironman","Spiderman"]
const dc_heroes=["superman","flash","batman"]
heroes.push(dc_heroes)

console.log(heroes) //[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
//                        1          2           3                       4     

console.log(heroes[3][0])  //superman

const allheroes=heroes.concat(dc_heroes)
console.log(allheroes) //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const all_new_heroes=[...heroes,...dc_heroes]
console.log(all_new_heroes) //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"})) //obj not itrable

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))





