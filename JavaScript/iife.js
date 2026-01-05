// Immediately Invoked Function Expressions=IIFE
//iife = jo function immediatly execute ho jaye
// it is used to remove the pollution of the global variable
// ()() the last Parentheses is for the execution call

(function chai(){
    console.log(`DB Connected NOW`)
})(); //iife doen't know where to end the context for that we use;

( (name )=> {
    console.log(`DB Connected for the Second Time ,${name}`)
})('Vishant')