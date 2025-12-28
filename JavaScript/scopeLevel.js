function one(){
    const username="namehere"

    function two(){
        const website=" fromyouTube"
        console.log(username);
    }
    // console.log(website);  //acess outside the scope
    // two() // namehere
}

// one()


if(true){
    const username="userhere"
    if(username==="userhere"){
        const website=" fromyoutube"
        // console.log(username+website)
    }
    // console.log(website); // scope issue
}
// console.log(username); // scope issue

addone(5)  // yaha declare kia hai 
function addone(num){
    return num+1

}

console.log(addone(5))

// addTwo(5) //yaha fn declare k saat humne ek variable mai bhi store kia hai toh hum iss ko ese access nai kar sakte
//vajah rule hai toh hai ,matlb reference error hai :)
const addTwo = function addone(num){
    return num+2

}

console.log(addTwo(5))
