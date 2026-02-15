 function multiplayBy5(num){
    return num*5
 }

 multiplayBy5.power=2

 console.log(multiplayBy5(5));
 console.log(multiplayBy5.power);
 console.log(multiplayBy5.prototype);
 
 
 function createUser(username, score){
    this.username=username  //this set current context
    this.score=score
 }

 createUser.prototype.increment=function(){
    this.score++ //this works for cureent context
 }

 createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
 }

 const chai =new createUser("chai",25)
 const tea= new createUser("tea",250)

 chai.printMe()