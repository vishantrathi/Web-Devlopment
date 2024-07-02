accountId = 14455; //memory can be reverse without varible in js
const accountEmail ="email@gmail.com"
 let accountPassword="1234"
var accountcity ="jaipur"
/*perfer not to use the var
because of issue in block scope and functional scope */
accountEmail="hchc@mail.com"
console.log(accountEmail);
console.table(accountEmail,accountId,accountPassword,accountcity);