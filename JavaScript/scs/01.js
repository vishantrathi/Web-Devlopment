// keywords and words

// words: a name 
// keywords: let var const

var a; //declare
var a = 1; //declare and initialization
// Redeclare allowed
// Reassign allowed
// Function scoped (block scoped nahi hota)

//window mai add karta hai
  
let a=10;
let a=10;

//Redeclare  not allowed
// Reassign  allowed
// Block scoped




const discount = 12;
// once declared the value can't be changed
// Redeclare 
// Reassign 
// Block scoped




//scope(globle,block,functonal)
var a=12 // global variable

function abcd(){
    var a=12; // can be used in fn only//
}



// blocked scoped//
//let, const
{
    var b=12; // functional scoped hota hai var js mai,Ye block scoped nahi hai, still accessible hai outside
}

function abcd(){
    if(true){
    let a=12; //block scope
    }
}




// reassignment , redeclaration//

var a=12;
a=32;


let a= 12;
a=32;





// temporal dead zone//

// utna area jitne mai js ko pata hai ki variable exist karta hai par vo aapko value nahi de sakta
console.log(a);
let a=12;



//hoisting impact per type//

// hoisting -> ek var ko jab js mai banate hai vo var do hisso mai tutta hai and uska declare part uper chala jata hai or uska initialization part neeche rah jata hai

var a =12;
// the above line breakes into
var a = undefined;
a=12;

// Behind the scenes:
var a = undefined; // var moves top of console
console.log(a);
a = 10; //

// var -> hoist -> undefined
//let -> hoist -> ref 
//const -> hoist -> ref 