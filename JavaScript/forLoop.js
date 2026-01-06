//for loop in js with break and continue

 for (let index = 1; index < 10; index++) {
    const element = index;
    console.log(element);

    for(let i=0;i<=10;i++){
      console.log(`OuterLoop Value ${i}`)
      for(let j=0;j<=10;j++){
      console.log(i + '*' + j +  '='+i*j );
    }
   }
   // console.log(i + '*' + j +  '='+i*j );
   
 }

//break and continue
 for (let index = 0; index < 20; index++) {
   if(index==5){
      console.log(`Detected 5`)
      break //stop at specfic requirement/index
      //continue  //skip a iteration
   }
   console.log(`Value of i is ${index}`);
   
   
 }