function a(){
    var b =10;
    c();
    function c(){
    var c=11;
    console.log(c);
        
    }
    console.log(b);//we can access inside a
}
var b=10;
a();


//scope means a sepecial variable and function in our code
