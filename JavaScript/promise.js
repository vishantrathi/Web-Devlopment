
     const promiseOne = new Promise(function(resolve, reject){
        //do an async task
        //DB calls, cryptography, network
        setTimeout(function(){
            console.log('Async task is complete')
             resolve() // kaam pura hua
        },1000)
     })

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolve")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({Username:"chai",email:"me@mail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
            if(!error){
                resolve({Username:"vishant",passcode:"123"});
        }else{
            reject('ERROR:something went worng')
        }
},1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.Username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
            if(!error){
                resolve({Username:"javascript",passcode:"1234"});
        }else{
            reject('ERROR:something went worng')
        }
},1000);
})

async function consumepromiseFive(){
    try{
        const response= await promiseFive
        console.log(response)
    }catch(error){
        console.log(error);
    }
}
consumepromiseFive();


async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    } catch (error) {
        console.log("E",error)
    }
}
getAllUser()




