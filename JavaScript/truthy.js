//some values assumed to be true

const userEmail={}

if (userEmail){
    console.log("Got User Email")
}else{
    console.log("Don't have user email")
}

//only these value are false in js 
//false,0,-0,BigInt0n,null,undefined,NaN,"   "

//truthy values
//"0", 'false', " ", [], {}, function()

const userArray={}

if(userArray.lenth === 0){
    console.log("Array is Empty")
}else{
    console.log("Array is not Empty")
}


const userObj={}

if(Object.keys(userObj).length === 0){
    console.log("Obj is Empty")
}else{
    console.log("Array is not Empty")
}


// false == 0
// true

// false == ''
// true

// 0 == ''
// true